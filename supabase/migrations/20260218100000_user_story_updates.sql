-- Ensure it_projects table has required columns
CREATE TABLE IF NOT EXISTS public.it_projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS title TEXT NOT NULL DEFAULT '';
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS description_en TEXT;
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS tags TEXT[] DEFAULT '{}';
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS github_url TEXT;
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS live_url TEXT;
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS featured BOOLEAN DEFAULT false;

-- Ensure books table has required columns
CREATE TABLE IF NOT EXISTS public.books (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.books ADD COLUMN IF NOT EXISTS title TEXT NOT NULL DEFAULT '';
ALTER TABLE public.books ADD COLUMN IF NOT EXISTS author TEXT NOT NULL DEFAULT '';
ALTER TABLE public.books ADD COLUMN IF NOT EXISTS synopsis TEXT;
ALTER TABLE public.books ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE public.books ADD COLUMN IF NOT EXISTS category TEXT;

-- Ensure music_tracks table has required columns
CREATE TABLE IF NOT EXISTS public.music_tracks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.music_tracks ADD COLUMN IF NOT EXISTS title TEXT NOT NULL DEFAULT '';
ALTER TABLE public.music_tracks ADD COLUMN IF NOT EXISTS description_en TEXT;
ALTER TABLE public.music_tracks ADD COLUMN IF NOT EXISTS platforms JSONB DEFAULT '{}'::jsonb;

-- Ensure resume_experience table has required columns
CREATE TABLE IF NOT EXISTS public.resume_experience (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.resume_experience ADD COLUMN IF NOT EXISTS role_en TEXT;
ALTER TABLE public.resume_experience ADD COLUMN IF NOT EXISTS company TEXT NOT NULL DEFAULT '';
ALTER TABLE public.resume_experience ADD COLUMN IF NOT EXISTS description_en TEXT;
ALTER TABLE public.resume_experience ADD COLUMN IF NOT EXISTS start_date DATE;
ALTER TABLE public.resume_experience ADD COLUMN IF NOT EXISTS end_date DATE;

-- Ensure contact_submissions table has required columns
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.contact_submissions ADD COLUMN IF NOT EXISTS name TEXT NOT NULL DEFAULT '';
ALTER TABLE public.contact_submissions ADD COLUMN IF NOT EXISTS email TEXT NOT NULL DEFAULT '';
ALTER TABLE public.contact_submissions ADD COLUMN IF NOT EXISTS message TEXT NOT NULL DEFAULT '';

-- RLS Policies

-- Enable RLS on all tables
ALTER TABLE public.it_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.books ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.music_tracks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resume_experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Public SELECT access
DROP POLICY IF EXISTS "Allow public read access" ON public.it_projects;
CREATE POLICY "Allow public read access" ON public.it_projects FOR SELECT TO public USING (true);

DROP POLICY IF EXISTS "Allow public read access to books" ON public.books;
CREATE POLICY "Allow public read access to books" ON public.books FOR SELECT TO public USING (true);

DROP POLICY IF EXISTS "Allow public read access" ON public.music_tracks;
CREATE POLICY "Allow public read access" ON public.music_tracks FOR SELECT TO public USING (true);

DROP POLICY IF EXISTS "Allow public read access" ON public.resume_experience;
CREATE POLICY "Allow public read access" ON public.resume_experience FOR SELECT TO public USING (true);

-- Contact Submissions Policies
DROP POLICY IF EXISTS "Enable insert for everyone" ON public.contact_submissions;
CREATE POLICY "Enable insert for everyone" ON public.contact_submissions FOR INSERT TO public WITH CHECK (true);

DROP POLICY IF EXISTS "Allow service role read access" ON public.contact_submissions;
CREATE POLICY "Allow service role read access" ON public.contact_submissions FOR SELECT TO service_role USING (true);

-- Deny public read on contacts (implicit by lack of policy, but ensuring no public read policy exists)
DROP POLICY IF EXISTS "Allow public read access" ON public.contact_submissions;
