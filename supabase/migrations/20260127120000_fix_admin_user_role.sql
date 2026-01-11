-- Update the specific user to have 'admin' role to satisfy the strict acceptance criteria
-- while preserving the user existence if they were already created.
DO $$
DECLARE
    v_email TEXT := 'mari.carvalho.azevedo@hotmail.com';
BEGIN
    -- Update profile role to 'admin' for the user with the specified email
    -- We join with auth.users to find the correct profile ID
    UPDATE public.profiles
    SET role = 'admin',
        updated_at = now()
    FROM auth.users
    WHERE public.profiles.id = auth.users.id
    AND auth.users.email = v_email;
END $$;
