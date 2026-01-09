-- Migration to fulfill User Story requirements
-- Establishing tables for it_projects, books, music_tracks, and contact_submissions

-- IT Projects Table
CREATE TABLE IF NOT EXISTS public.it_projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    tech_stack TEXT[] DEFAULT '{}',
    link TEXT,
    image_url TEXT,
    language TEXT NOT NULL DEFAULT 'pt',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for it_projects
ALTER TABLE public.it_projects ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public it_projects are viewable by everyone" ON public.it_projects;
CREATE POLICY "Public it_projects are viewable by everyone" ON public.it_projects FOR SELECT USING (true);

-- Books Table (Ensure columns match requirements)
CREATE TABLE IF NOT EXISTS public.books (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    review TEXT NOT NULL,
    cover_url TEXT NOT NULL,
    rating INTEGER DEFAULT 0,
    category TEXT DEFAULT 'General',
    language TEXT NOT NULL DEFAULT 'pt',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for books
ALTER TABLE public.books ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public books are viewable by everyone" ON public.books;
CREATE POLICY "Public books are viewable by everyone" ON public.books FOR SELECT USING (true);

-- Music Tracks Table (Ensure columns match requirements)
CREATE TABLE IF NOT EXISTS public.music_tracks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    artist TEXT NOT NULL,
    audio_url TEXT,
    lyrics_pt TEXT,
    lyrics_en TEXT,
    lyrics_ko TEXT,
    deezer_id TEXT,
    duration TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for music_tracks
ALTER TABLE public.music_tracks ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public music_tracks are viewable by everyone" ON public.music_tracks;
CREATE POLICY "Public music_tracks are viewable by everyone" ON public.music_tracks FOR SELECT USING (true);

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    subject TEXT DEFAULT 'Portfolio Contact',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for contact_submissions
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;
CREATE POLICY "Anyone can submit contact form" ON public.contact_submissions FOR INSERT WITH CHECK (true);

-- Seed Data for IT Projects (Example Data)
INSERT INTO public.it_projects (title, description, tech_stack, link, image_url, language)
SELECT 'Portfolio Website', 'My personal portfolio built with React and Supabase.', ARRAY['React', 'TypeScript', 'Supabase', 'Tailwind'], 'https://github.com/example/portfolio', 'https://img.usecurling.com/p/800/600?q=code&color=blue', 'pt'
WHERE NOT EXISTS (SELECT 1 FROM public.it_projects WHERE title = 'Portfolio Website' AND language = 'pt');

INSERT INTO public.it_projects (title, description, tech_stack, link, image_url, language)
SELECT 'Portfolio Website', 'My personal portfolio built with React and Supabase.', ARRAY['React', 'TypeScript', 'Supabase', 'Tailwind'], 'https://github.com/example/portfolio', 'https://img.usecurling.com/p/800/600?q=code&color=blue', 'en'
WHERE NOT EXISTS (SELECT 1 FROM public.it_projects WHERE title = 'Portfolio Website' AND language = 'en');

INSERT INTO public.it_projects (title, description, tech_stack, link, image_url, language)
SELECT '포트폴리오 웹사이트', 'React와 Supabase로 구축된 개인 포트폴리오.', ARRAY['React', 'TypeScript', 'Supabase', 'Tailwind'], 'https://github.com/example/portfolio', 'https://img.usecurling.com/p/800/600?q=code&color=blue', 'ko'
WHERE NOT EXISTS (SELECT 1 FROM public.it_projects WHERE title = '포트폴리오 웹사이트' AND language = 'ko');
