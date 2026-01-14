-- Fix Auth Resilience & RLS Policies

-- 1. Create a secure function to check admin status without recursion
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

-- 2. Drop existing policies to ensure a clean slate
DROP POLICY IF EXISTS "Admins can read all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Users can read own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;

-- 3. Create robust, non-recursive RLS policies
-- Allow users to read their own profile (Non-recursive)
CREATE POLICY "Users can read own profile" ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

-- Allow admins to read all profiles (Uses security definer function to avoid recursion)
CREATE POLICY "Admins can read all profiles" ON public.profiles
  FOR SELECT
  USING (public.is_admin_safe());

-- Allow users to insert their own profile (Essential for fallback creation)
CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Allow users to update their own profile (Protected by trigger for sensitive fields)
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id);

-- 4. Ensure the auto-create profile trigger exists and is correct
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, role, language, created_at, updated_at)
  VALUES (
    NEW.id, 
    NEW.email, 
    'user', 
    'pt', 
    NOW(), 
    NOW()
  )
  ON CONFLICT (id) DO UPDATE
  SET email = EXCLUDED.email,
      updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Re-create trigger to be sure
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- 5. Admin Promotion Script
-- Promotes mari.carvalho.azevedo@hotmail.com to admin
DO $$
DECLARE
  target_user_id UUID;
BEGIN
  SELECT id INTO target_user_id 
  FROM auth.users 
  WHERE email = 'mari.carvalho.azevedo@hotmail.com';
  
  IF target_user_id IS NOT NULL THEN
    -- Ensure profile exists first
    INSERT INTO public.profiles (id, email, role, created_at, updated_at)
    VALUES (target_user_id, 'mari.carvalho.azevedo@hotmail.com', 'admin', NOW(), NOW())
    ON CONFLICT (id) DO NOTHING;

    -- Update role
    UPDATE public.profiles
    SET role = 'admin',
        permissions = '{"content": true, "users": true, "settings": true, "audit": true}'::jsonb
    WHERE id = target_user_id;
  END IF;
END $$;
