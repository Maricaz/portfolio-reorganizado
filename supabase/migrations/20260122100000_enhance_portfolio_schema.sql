-- Create or update IT Projects table
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
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Ensure columns exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'it_projects' AND column_name = 'category') THEN
        ALTER TABLE public.it_projects ADD COLUMN category TEXT DEFAULT 'Full Stack';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'it_projects' AND column_name = 'featured') THEN
        ALTER TABLE public.it_projects ADD COLUMN featured BOOLEAN DEFAULT false;
    END IF;
END $$;

-- Ensure RLS
ALTER TABLE public.it_projects ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public read access" ON public.it_projects;
CREATE POLICY "Public read access" ON public.it_projects FOR SELECT USING (true);

-- Ensure Resume Skills has category
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'resume_skills' AND column_name = 'category') THEN
        ALTER TABLE public.resume_skills ADD COLUMN category TEXT DEFAULT 'Other';
    END IF;
END $$;

