-- Fix admin user with specific ID and credentials to ensure access

CREATE EXTENSION IF NOT EXISTS pgcrypto;

DO $$
DECLARE
    v_user_id UUID := 'b90f6b6e-ce93-4cc5-8dbf-9446d67ff6da';
    v_email TEXT := 'mari.carvalho.azevedo@hotmail.com';
    v_password TEXT := '230791';
    v_encrypted_pw TEXT;
BEGIN
    v_encrypted_pw := crypt(v_password, gen_salt('bf'));

    -- 1. Handle potential email conflict with different ID
    -- If there is a user with this email but DIFFERENT ID, delete it to enforce our specific ID.
    -- This ensures we can insert/update the specific ID without unique constraint violation on email.
    DELETE FROM auth.users 
    WHERE email = v_email AND id != v_user_id;

    -- 2. Upsert user into auth.users with specific ID
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
        '00000000-0000-0000-0000-000000000000',
        'authenticated',
        'authenticated',
        v_email,
        v_encrypted_pw,
        now(),
        now(),
        now(),
        '{"provider":"email","providers":["email"]}',
        '{"name": "Mariana Azevedo"}',
        false
    )
    ON CONFLICT (id) DO UPDATE
    SET email = v_email,
        encrypted_password = v_encrypted_pw,
        raw_user_meta_data = '{"name": "Mariana Azevedo"}',
        updated_at = now();

    -- 3. Ensure profile exists and has admin role
    INSERT INTO public.profiles (id, role, created_at, updated_at)
    VALUES (v_user_id, 'admin', now(), now())
    ON CONFLICT (id) DO UPDATE
    SET role = 'admin',
        updated_at = now();

END $$;
