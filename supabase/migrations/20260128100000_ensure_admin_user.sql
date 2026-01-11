-- Migration to ensure the admin user exists with correct credentials and role
-- Enables pgcrypto for password hashing
CREATE EXTENSION IF NOT EXISTS pgcrypto;

DO $$
DECLARE
    v_user_id UUID;
    v_instance_id UUID;
    v_email TEXT := 'mari.carvalho.azevedo@hotmail.com';
    v_password TEXT := '230791';
BEGIN
    -- Attempt to get the instance_id from an existing user to match the environment
    -- Default to the standard zero UUID if no users exist
    SELECT instance_id INTO v_instance_id FROM auth.users LIMIT 1;
    IF v_instance_id IS NULL THEN
        v_instance_id := '00000000-0000-0000-0000-000000000000';
    END IF;

    -- Check if the specific user already exists
    SELECT id INTO v_user_id FROM auth.users WHERE email = v_email;

    IF v_user_id IS NULL THEN
        -- Generate a new UUID for the user
        v_user_id := gen_random_uuid();
        
        -- Insert the user into auth.users
        INSERT INTO auth.users (
            id,
            instance_id,
            aud,
            role,
            email,
            encrypted_password,
            email_confirmed_at,
            created_at,
            updated_at,
            raw_app_meta_data,
            raw_user_meta_data,
            is_super_admin
        ) VALUES (
            v_user_id,
            v_instance_id,
            'authenticated',
            'authenticated',
            v_email,
            crypt(v_password, gen_salt('bf')),
            now(),
            now(),
            now(),
            '{"provider":"email","providers":["email"]}',
            '{}',
            false
        );
    ELSE
        -- Update the existing user's password to ensure it matches the requirements
        UPDATE auth.users
        SET encrypted_password = crypt(v_password, gen_salt('bf')),
            updated_at = now()
        WHERE id = v_user_id;
    END IF;

    -- Ensure the user has the 'admin' role in public.profiles
    -- Using ON CONFLICT to handle both insert and update cases
    INSERT INTO public.profiles (id, role, created_at, updated_at)
    VALUES (v_user_id, 'admin', now(), now())
    ON CONFLICT (id) DO UPDATE
    SET role = 'admin',
        updated_at = now();

END $$;
