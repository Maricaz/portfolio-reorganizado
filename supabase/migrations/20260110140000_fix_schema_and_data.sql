-- Migration: Fix Schema and Data
-- This migration ensures the schema is correct and migrates data for multilingual support
-- safely handling potential partial states from previous failed migrations.

-- 1. Update Projects Table Structure
DO $$
BEGIN
    -- Add columns if they don't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'projects' AND column_name = 'description') THEN
        ALTER TABLE public.projects ADD COLUMN description TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'projects' AND column_name = 'tech_stack') THEN
        ALTER TABLE public.projects ADD COLUMN tech_stack TEXT[];
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'projects' AND column_name = 'link') THEN
        ALTER TABLE public.projects ADD COLUMN link TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'projects' AND column_name = 'language') THEN
        ALTER TABLE public.projects ADD COLUMN language TEXT DEFAULT 'pt';
    END IF;
END $$;

-- 2. Update Books Table Structure
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'books' AND column_name = 'review') THEN
        ALTER TABLE public.books ADD COLUMN review TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'books' AND column_name = 'cover_url') THEN
        ALTER TABLE public.books ADD COLUMN cover_url TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'books' AND column_name = 'language') THEN
        ALTER TABLE public.books ADD COLUMN language TEXT DEFAULT 'pt';
    END IF;
END $$;

-- 3. Create Resume Items Table
CREATE TABLE IF NOT EXISTS public.resume_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category TEXT NOT NULL,
  title TEXT NOT NULL,
  period TEXT NOT NULL,
  description TEXT NOT NULL,
  language TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for resume_items
ALTER TABLE public.resume_items ENABLE ROW LEVEL SECURITY;

-- Policy (Drop first to avoid error if exists)
DROP POLICY IF EXISTS "Public resume_items are viewable by everyone" ON public.resume_items;
CREATE POLICY "Public resume_items are viewable by everyone" ON public.resume_items FOR SELECT USING (true);

-- 4. Update Music Tracks Structure
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'music_tracks' AND column_name = 'audio_url') THEN
        ALTER TABLE public.music_tracks ADD COLUMN audio_url TEXT;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'music_tracks' AND column_name = 'duration') THEN
        ALTER TABLE public.music_tracks ADD COLUMN duration TEXT;
    END IF;
END $$;

-- 5. Data Migration (Idempotent)

-- Projects: Set defaults for 'pt' rows (existing rows assumed to be pt)
-- using dynamic SQL to avoid errors if source columns are missing in a strict environment,
-- though we assume they exist based on project context.
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'projects' AND column_name = 'description_pt') THEN
        UPDATE public.projects 
        SET 
          description = COALESCE(description, description_pt),
          tech_stack = COALESCE(tech_stack, tags),
          link = COALESCE(link, demo_url),
          language = 'pt'
        WHERE language IS NULL OR language = 'pt';
    END IF;
END $$;

-- Projects: Create 'en' rows
-- We verify source columns exist before trying to read them
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'projects' AND column_name = 'description_en') THEN
        INSERT INTO public.projects (title, description, tech_stack, link, image_url, language, created_at)
        SELECT title, description_en, tags, demo_url, image_url, 'en', created_at
        FROM public.projects
        WHERE language = 'pt' 
          AND description_en IS NOT NULL 
          AND NOT EXISTS (SELECT 1 FROM public.projects p2 WHERE p2.title = public.projects.title AND p2.language = 'en');
    END IF;
END $$;

-- Projects: Create 'ko' rows
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'projects' AND column_name = 'description_ko') THEN
        INSERT INTO public.projects (title, description, tech_stack, link, image_url, language, created_at)
        SELECT title, description_ko, tags, demo_url, image_url, 'ko', created_at
        FROM public.projects
        WHERE language = 'pt' 
          AND description_ko IS NOT NULL 
          AND NOT EXISTS (SELECT 1 FROM public.projects p2 WHERE p2.title = public.projects.title AND p2.language = 'ko');
    END IF;
END $$;

-- Books: Set defaults for 'pt' rows
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'books' AND column_name = 'review_pt') THEN
        UPDATE public.books
        SET
          review = COALESCE(review, review_pt),
          cover_url = COALESCE(cover_url, image_url),
          language = 'pt'
        WHERE language IS NULL OR language = 'pt';
    END IF;
END $$;

-- Books: Create 'en' rows
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'books' AND column_name = 'review_en') THEN
        INSERT INTO public.books (title, author, category, rating, review, cover_url, language, created_at)
        SELECT title, author, category, rating, review_en, image_url, 'en', created_at
        FROM public.books
        WHERE language = 'pt' 
          AND review_en IS NOT NULL 
          AND NOT EXISTS (SELECT 1 FROM public.books b2 WHERE b2.title = public.books.title AND b2.language = 'en');
    END IF;
END $$;

-- Books: Create 'ko' rows
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'books' AND column_name = 'review_ko') THEN
        INSERT INTO public.books (title, author, category, rating, review, cover_url, language, created_at)
        SELECT title, author, category, rating, review_ko, image_url, 'ko', created_at
        FROM public.books
        WHERE language = 'pt' 
          AND review_ko IS NOT NULL 
          AND NOT EXISTS (SELECT 1 FROM public.books b2 WHERE b2.title = public.books.title AND b2.language = 'ko');
    END IF;
END $$;

-- Resume Items: Seed from Resume Entries
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'resume_entries') THEN
        INSERT INTO public.resume_items (category, title, period, description, language)
        SELECT 'work', role_pt, to_char(start_date, 'YYYY') || ' - ' || COALESCE(to_char(end_date, 'YYYY'), 'Present'), description_pt, 'pt' 
        FROM public.resume_entries
        WHERE NOT EXISTS (SELECT 1 FROM public.resume_items WHERE title = public.resume_entries.role_pt AND language = 'pt');
        
        INSERT INTO public.resume_items (category, title, period, description, language)
        SELECT 'work', role_en, to_char(start_date, 'YYYY') || ' - ' || COALESCE(to_char(end_date, 'YYYY'), 'Present'), description_en, 'en' 
        FROM public.resume_entries
        WHERE NOT EXISTS (SELECT 1 FROM public.resume_items WHERE title = public.resume_entries.role_en AND language = 'en');
        
        INSERT INTO public.resume_items (category, title, period, description, language)
        SELECT 'work', role_ko, to_char(start_date, 'YYYY') || ' - ' || COALESCE(to_char(end_date, 'YYYY'), 'Present'), description_ko, 'ko' 
        FROM public.resume_entries
        WHERE NOT EXISTS (SELECT 1 FROM public.resume_items WHERE title = public.resume_entries.role_ko AND language = 'ko');
    END IF;
END $$;
