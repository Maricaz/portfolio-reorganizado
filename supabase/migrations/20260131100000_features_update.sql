-- Migration to support User Story features: Notifications, Storage, and Contact Submissions Link

-- 1. Add link column to notifications table
ALTER TABLE public.notifications ADD COLUMN IF NOT EXISTS link TEXT;

-- 2. Create playlist-covers bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('playlist-covers', 'playlist-covers', true)
ON CONFLICT (id) DO NOTHING;

-- 3. Set up RLS policies for playlist-covers bucket
-- Allow public access to view images
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'playlist-covers');

-- Allow authenticated users (admins) to upload, update, and delete
CREATE POLICY "Auth Upload" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'playlist-covers' AND auth.role() = 'authenticated');
CREATE POLICY "Auth Update" ON storage.objects FOR UPDATE USING (bucket_id = 'playlist-covers' AND auth.role() = 'authenticated');
CREATE POLICY "Auth Delete" ON storage.objects FOR DELETE USING (bucket_id = 'playlist-covers' AND auth.role() = 'authenticated');

-- 4. Create trigger function for contact submissions
CREATE OR REPLACE FUNCTION public.handle_new_contact_submission()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.notifications (title, message, type, link, read)
  VALUES (
    'New Contact Submission',
    'From: ' || NEW.name || ' (' || NEW.email || ')',
    'contact',
    '/admin/contacts',
    false
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 5. Create trigger on contact_submissions
DROP TRIGGER IF EXISTS on_contact_submission_created ON public.contact_submissions;
CREATE TRIGGER on_contact_submission_created
AFTER INSERT ON public.contact_submissions
FOR EACH ROW
EXECUTE FUNCTION public.handle_new_contact_submission();
