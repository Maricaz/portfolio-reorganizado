-- Enable pgcrypto extension if it's not already enabled to allow password hashing
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

DO $$
DECLARE
    -- Credentials provided in the User Story
    v_email TEXT := 'mari.carvalho.azevedo@hotmail.com';
    v_password TEXT := '230791';
    -- Role granting admin privileges
    v_role TEXT := 'super_admin';
    
    v_user_id UUID;
    v_encrypted_pw TEXT;
BEGIN
    -- Generate the bcrypt hash of the password
    v_encrypted_pw := crypt(v_password, gen_salt('bf'));

    -- Check if the user already exists in the auth.users table
    SELECT id INTO v_user_id FROM auth.users WHERE email = v_email;

    IF v_user_id IS NULL THEN
        -- If user does not exist, generate a new UUID
        v_user_id := gen_random_uuid();

        -- Insert the new user into the auth.users table
        -- We provide all necessary fields to ensure the user is valid and confirmed
        INSERT INTO auth.users (
            id,
            instance_id,
            aud,
            role,
            email,
            encrypted_password,
            email_confirmed_at,
            raw_app_meta_data,
            raw_user_meta_data,
            created_at,
            updated_at
        ) VALUES (
            v_user_id,
            '00000000-0000-0000-0000-000000000000', -- Default Supabase instance ID
            'authenticated',
            'authenticated',
            v_email,
            v_encrypted_pw,
            now(), -- Confirm email immediately
            '{"provider":"email","providers":["email"]}'::jsonb,
            '{}'::jsonb,
            now(),
            now()
        );

        -- Note: The trigger 'on_auth_user_created' on auth.users might run here
        -- and create a profile with default role 'user'.
        -- We handle this by upserting the profile below to ensure correct role.

    ELSE
        -- If user already exists, update their password to match requirements
        UPDATE auth.users
        SET encrypted_password = v_encrypted_pw,
            email_confirmed_at = COALESCE(email_confirmed_at, now()),
            updated_at = now()
        WHERE id = v_user_id;
    END IF;

    -- Upsert the profile in public.profiles to ensure administrative privileges
    -- This handles both cases:
    -- 1. Profile created by trigger (Update role)
    -- 2. Profile missing (Insert new profile)
    INSERT INTO public.profiles (id, role, language)
    VALUES (v_user_id, v_role, 'pt')
    ON CONFLICT (id) DO UPDATE
    SET role = v_role,
        updated_at = now();

END $$;
