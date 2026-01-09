-- Ensure contact_submissions table exists and has correct columns
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL
);

-- Add origin column if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'contact_submissions' AND column_name = 'origin') THEN
        ALTER TABLE public.contact_submissions ADD COLUMN origin TEXT;
    END IF;
END $$;

-- Make subject nullable if it exists, as it is no longer required in the UI
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'contact_submissions' AND column_name = 'subject') THEN
        ALTER TABLE public.contact_submissions ALTER COLUMN subject DROP NOT NULL;
    END IF;
END $$;

-- Enable RLS if not enabled
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy for inserting (public can insert)
DROP POLICY IF EXISTS "Enable insert for public" ON public.contact_submissions;
CREATE POLICY "Enable insert for public" ON public.contact_submissions FOR INSERT WITH CHECK (true);
