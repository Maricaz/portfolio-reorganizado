-- Migration to implement robust admin access via RLS and ensure specific admin user

-- 1. Create is_admin helper function for RLS policies
-- This function checks if the current executing user has the 'admin' or 'super_admin' role
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid()
    AND role IN ('admin', 'super_admin')
  );
$$;

-- Grant execute permission to authenticated users so policies can use it
GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_admin() TO anon;

-- 2. Apply "Admins have full control" Policy to all relevant tables
-- This ensures admins can perform SELECT, INSERT, UPDATE, DELETE on all system tables
DO $$
DECLARE
    t text;
    -- List of tables identified in the User Story and system requirements
    tables text[] := ARRAY[
        'books', 
        'music_tracks', 
        'playlists', 
        'playlist_tracks', 
        'profiles', 
        'audit_logs', 
        'contact_submissions', 
        'resume_certifications', 
        'resume_education', 
        'resume_experience', 
        'resume_languages', 
        'resume_publications', 
        'resume_skills', 
        'site_settings', 
        'site_translations', 
        'notifications', 
        'push_subscriptions'
    ];
BEGIN
    FOREACH t IN ARRAY tables LOOP
        -- Ensure RLS is enabled for the table
        EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY', t);
        
        -- Drop potentially conflicting or outdated admin policies
        EXECUTE format('DROP POLICY IF EXISTS "Admins have full control" ON public.%I', t);
        EXECUTE format('DROP POLICY IF EXISTS "Admin Full Access" ON public.%I', t);
        EXECUTE format('DROP POLICY IF EXISTS "Admins can do everything" ON public.%I', t);
        
        -- Create the universal admin policy
        -- USING (true) for admins, WITH CHECK (true) for admins
        EXECUTE format('
            CREATE POLICY "Admins have full control" ON public.%I
            FOR ALL
            TO public
            USING (public.is_admin())
            WITH CHECK (public.is_admin())
        ', t, t);
    END LOOP;
END $$;

-- 3. Ensure the specific user is configured as Admin
-- This handles the requirement: "Configuration of the specific email... as a high-privilege administrator"
DO $$
DECLARE
    target_email text := 'mari.carvalho.azevedo@hotmail.com';
    target_user_id uuid;
BEGIN
    -- Attempt to find the user in auth.users
    SELECT id INTO target_user_id FROM auth.users WHERE email = target_email LIMIT 1;

    IF target_user_id IS NOT NULL THEN
        -- Upsert the profile with 'admin' role
        INSERT INTO public.profiles (id, email, role, created_at, updated_at)
        VALUES (target_user_id, target_email, 'admin', now(), now())
        ON CONFLICT (id) DO UPDATE
        SET role = 'admin',
            email = target_email, -- Keep email synced
            is_banned = false,    -- Ensure not banned
            updated_at = now();
    END IF;
END $$;
