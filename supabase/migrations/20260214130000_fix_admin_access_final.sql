-- Safe function to check admin status (avoid recursion)
CREATE OR REPLACE FUNCTION public.is_admin_safe()
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid()
    AND role IN ('admin', 'super_admin')
  );
$$;

-- Drop existing policies to ensure clean slate
DROP POLICY IF EXISTS "Users can read own profile" ON public.profiles;
DROP POLICY IF EXISTS "Admins can read all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;

-- Create policies
-- 1. Users can read their own profile (Critical for auth hook)
CREATE POLICY "Users can read own profile" ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

-- 2. Admins can read all profiles (Critical for user management)
CREATE POLICY "Admins can read all profiles" ON public.profiles
  FOR SELECT
  USING (public.is_admin_safe());

-- 3. Users can insert their own profile (Fallback for auto-create trigger)
CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- 4. Users can update their own profile
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id);

-- Promote the specific user
DO $$
DECLARE
  target_user_id UUID;
  target_email TEXT := 'mari.carvalho.azevedo@hotmail.com';
BEGIN
  SELECT id INTO target_user_id FROM auth.users WHERE email = target_email;

  IF target_user_id IS NOT NULL THEN
    -- Upsert profile ensuring admin role
    INSERT INTO public.profiles (id, email, role, language, permissions, created_at, updated_at)
    VALUES (
      target_user_id, 
      target_email, 
      'admin', 
      'pt', 
      '{"content": true, "users": true, "settings": true, "audit": true}'::jsonb,
      NOW(), 
      NOW()
    )
    ON CONFLICT (id) DO UPDATE
    SET 
      role = 'admin',
      permissions = '{"content": true, "users": true, "settings": true, "audit": true}'::jsonb,
      email = EXCLUDED.email,
      updated_at = NOW();
    
    RAISE NOTICE 'User % promoted to admin successfully.', target_email;
  ELSE
    RAISE NOTICE 'User % not found in auth.users. Cannot promote.', target_email;
  END IF;
END $$;
