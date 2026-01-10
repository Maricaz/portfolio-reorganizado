-- Create storage bucket for portfolio media
INSERT INTO storage.buckets (id, name, public) 
VALUES ('portfolio-media', 'portfolio-media', true) 
ON CONFLICT (id) DO NOTHING;

-- Storage Policies
-- Allow public read access to all files in the bucket
CREATE POLICY "Public Access" 
ON storage.objects FOR SELECT 
USING ( bucket_id = 'portfolio-media' );

-- Allow authenticated users (admins) to upload files
CREATE POLICY "Auth Upload" 
ON storage.objects FOR INSERT 
WITH CHECK ( bucket_id = 'portfolio-media' AND auth.role() = 'authenticated' );

-- Allow authenticated users to update files
CREATE POLICY "Auth Update" 
ON storage.objects FOR UPDATE 
USING ( bucket_id = 'portfolio-media' AND auth.role() = 'authenticated' );

-- Allow authenticated users to delete files
CREATE POLICY "Auth Delete" 
ON storage.objects FOR DELETE 
USING ( bucket_id = 'portfolio-media' AND auth.role() = 'authenticated' );

-- Add role column to profiles table if it exists (it should from previous migrations)
-- We use DO block to handle potential missing table gracefully or create it if needed in a robust system, 
-- but here we assume it exists as per context.
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'user';

-- Add image_url to music_tracks for album art
ALTER TABLE public.music_tracks ADD COLUMN IF NOT EXISTS image_url TEXT;

-- Update RLS for profiles to allow users to read their own role (and admins to read all?)
-- Assuming basic profiles RLS exists. We ensure specific policy for role reading if needed.
-- For now, relying on existing Select policies.

