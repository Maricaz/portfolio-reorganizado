-- Secure Profiles, Role Enforcement and Admin Promotion

-- 1. Ensure profiles table structure is robust
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL PRIMARY KEY,
  role TEXT DEFAULT 'user',
  email TEXT,
  is_banned BOOLEAN DEFAULT FALSE,
  permissions JSONB DEFAULT '{}'::jsonb,
  language TEXT DEFAULT 'pt',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Ensure specific columns exist if table was created simply before
DO $$
BEGIN
    ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS email TEXT;
    ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'user';
    ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS is_banned BOOLEAN DEFAULT FALSE;
    ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS permissions JSONB DEFAULT '{}'::jsonb;
    ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS language TEXT DEFAULT 'pt';
END $$;

-- 2. Automated Profile Provisioning (Trigger on new user)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, role, language)
  VALUES (NEW.id, NEW.email, 'user', 'pt')
  ON CONFLICT (id) DO UPDATE
  SET email = EXCLUDED.email;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- 3. Profile Data Integrity (Sync Email on update)
CREATE OR REPLACE FUNCTION public.handle_user_update()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  IF NEW.email IS DISTINCT FROM OLD.email THEN
    UPDATE public.profiles
    SET email = NEW.email, updated_at = NOW()
    WHERE id = NEW.id;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_updated ON auth.users;
CREATE TRIGGER on_auth_user_updated
  AFTER UPDATE ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_user_update();

-- 4. Secure Role Enforcement (RLS & Triggers)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Clear old policies to ensure clean slate
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can read own profile" ON public.profiles;
DROP POLICY IF EXISTS "Admins can do everything" ON public.profiles;

-- RLS: Read Access
-- Users see their own. Admins see all (needed for user management).
CREATE POLICY "Users can read own profile" ON public.profiles
  FOR SELECT
  USING (
    auth.uid() = id OR 
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'super_admin')
    )
  );

-- RLS: Update Access
-- Users can update their own row.
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id);

-- RLS: Insert Access
-- Users can insert their own row (backup for auto-provisioning).
CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Database-level protection against role escalation
CREATE OR REPLACE FUNCTION public.prevent_role_escalation()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Bypass for system/migration scripts (when running as superuser/service_role)
  IF auth.uid() IS NULL THEN
    RETURN NEW;
  END IF;

  -- Bypass for Admins
  IF EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND role IN ('admin', 'super_admin')
  ) THEN
    RETURN NEW;
  END IF;

  -- Enforce restrictions for non-admins
  IF NEW.role IS DISTINCT FROM OLD.role THEN
    RAISE EXCEPTION 'Unauthorized: You cannot change your role.';
  END IF;

  IF NEW.is_banned IS DISTINCT FROM OLD.is_banned THEN
    RAISE EXCEPTION 'Unauthorized: You cannot change your banned status.';
  END IF;
  
  IF NEW.permissions IS DISTINCT FROM OLD.permissions THEN
    RAISE EXCEPTION 'Unauthorized: You cannot change your permissions.';
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS check_role_escalation ON public.profiles;
CREATE TRIGGER check_role_escalation
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.prevent_role_escalation();

-- 5. Admin Promotion Script
DO $$
DECLARE
  target_user_id UUID;
BEGIN
  -- Look up user by email
  SELECT id INTO target_user_id 
  FROM auth.users 
  WHERE email = 'mari.carvalho.azevedo@hotmail.com';
  
  -- Promote if exists
  IF target_user_id IS NOT NULL THEN
    UPDATE public.profiles
    SET role = 'admin',
        permissions = '{"content": true, "users": true, "settings": true, "audit": true}'::jsonb
    WHERE id = target_user_id;
  END IF;
END $$;
