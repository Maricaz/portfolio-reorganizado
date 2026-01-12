-- Migration to fix missing profiles and ensure robustness for Admin Login

-- 1. Ensure profiles table has necessary columns (idempotent checks)
DO $$
BEGIN
    -- Check if profiles table exists (it should), but just in case
    CREATE TABLE IF NOT EXISTS public.profiles (
        id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL PRIMARY KEY,
        role TEXT DEFAULT 'user',
        is_banned BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
    );
END $$;

-- 2. Backfill missing profiles for existing auth users
-- This prevents "Profile not found" errors for old users
INSERT INTO public.profiles (id, email, role)
SELECT 
    au.id, 
    au.email, 
    'user'
FROM auth.users au
WHERE NOT EXISTS (
    SELECT 1 FROM public.profiles p WHERE p.id = au.id
)
ON CONFLICT (id) DO NOTHING;

-- 3. Ensure RLS Policies are permissive enough for the user to read/write their OWN profile
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own profile
DROP POLICY IF EXISTS "Users can read own profile" ON public.profiles;
CREATE POLICY "Users can read own profile" ON public.profiles
    FOR SELECT
    USING (auth.uid() = id);

-- Policy: Users can update their own profile
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE
    USING (auth.uid() = id);

-- Policy: Users can insert their own profile (Critical for self-healing logic)
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile" ON public.profiles
    FOR INSERT
    WITH CHECK (auth.uid() = id);

-- 4. Ensure the trigger for new users is active
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, role)
  VALUES (NEW.id, NEW.email, 'user')
  ON CONFLICT (id) DO UPDATE
  SET email = EXCLUDED.email; -- Update email if it changed on re-signup
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();
