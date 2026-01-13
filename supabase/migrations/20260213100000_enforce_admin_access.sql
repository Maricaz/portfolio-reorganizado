-- Migration to enforce strict Admin Access and RLS policies

-- 1. Create or Replace Helper Function for Admin Check
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

-- Grant execute to auth users
GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_admin() TO anon;

-- 2. Enforce Row Level Security on Critical Tables
DO $$
DECLARE
    t text;
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
        -- Enable RLS
        EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY', t);
        
        -- Clean up existing permissive or old admin policies to avoid conflicts
        EXECUTE format('DROP POLICY IF EXISTS "Admins have full control" ON public.%I', t);
        EXECUTE format('DROP POLICY IF EXISTS "Admin Full Access" ON public.%I', t);
        EXECUTE format('DROP POLICY IF EXISTS "Enable all for admins" ON public.%I', t);
        
        -- Create a unified "Omnipotent Admin" policy
        -- This allows admins to do ANYTHING (SELECT, INSERT, UPDATE, DELETE)
        EXECUTE format('
            CREATE POLICY "Admins have full control" ON public.%I
            FOR ALL
            TO public
            USING (public.is_admin())
            WITH CHECK (public.is_admin())
        ', t, t);
    END LOOP;
END $$;

-- 3. Specific Policy for Profiles (Self-Read)
-- Users should be able to read their own profile, but admins can read all
DROP POLICY IF EXISTS "Users can read own profile" ON public.profiles;
CREATE POLICY "Users can read own profile" ON public.profiles
    FOR SELECT
    TO authenticated
    USING (auth.uid() = id OR public.is_admin());

-- 4. Specific User Promotion
-- Ensure 'mari.carvalho.azevedo@hotmail.com' is an admin
DO $$
DECLARE
    target_email text := 'mari.carvalho.azevedo@hotmail.com';
    target_user_id uuid;
BEGIN
    -- Check if user exists in auth.users
    SELECT id INTO target_user_id FROM auth.users WHERE email = target_email LIMIT 1;

    IF target_user_id IS NOT NULL THEN
        -- Insert or Update profile to be admin
        INSERT INTO public.profiles (id, email, role, is_banned, updated_at)
        VALUES (target_user_id, target_email, 'admin', false, now())
        ON CONFLICT (id) DO UPDATE
        SET role = 'admin',
            email = target_email,
            is_banned = false,
            updated_at = now();
            
        RAISE NOTICE 'User % promoted to admin.', target_email;
    ELSE
        RAISE NOTICE 'User % not found in auth.users. Skipping promotion.', target_email;
    END IF;
END $$;
