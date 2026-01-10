-- Create table if it doesn't exist (it_projects)
CREATE TABLE IF NOT EXISTS public.it_projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description_pt TEXT,
    description_en TEXT,
    description_ko TEXT,
    category TEXT DEFAULT 'Full Stack',
    tags TEXT[] DEFAULT '{}',
    image_url TEXT,
    demo_url TEXT,
    github_url TEXT,
    link TEXT,
    featured BOOLEAN DEFAULT false,
    title_ko TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Safely add columns to it_projects if they don't exist
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS category TEXT DEFAULT 'Full Stack';
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS featured BOOLEAN DEFAULT false;
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS title_ko TEXT;
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS demo_url TEXT;
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS link TEXT;

-- Enable RLS on it_projects
ALTER TABLE public.it_projects ENABLE ROW LEVEL SECURITY;

-- Re-create policy to ensure public read access for it_projects
DROP POLICY IF EXISTS "Public read access" ON public.it_projects;
CREATE POLICY "Public read access" ON public.it_projects FOR SELECT USING (true);

-- Ensure resume_skills has category column (assuming table exists)
DO $$
BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'resume_skills') THEN
        ALTER TABLE public.resume_skills ADD COLUMN IF NOT EXISTS category TEXT DEFAULT 'Other';
    END IF;
END $$;
