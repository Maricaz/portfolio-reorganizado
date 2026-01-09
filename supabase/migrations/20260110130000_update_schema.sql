-- Migration to match User Story requirements
-- We will update existing tables or create new ones to match the requested schema

-- Update projects table
-- Requirements: id, title, description, tech_stack, link, language
-- Existing: id, title, description_pt/en/ko, tags, image_url, demo_url, github_url
ALTER TABLE public.projects ADD COLUMN IF NOT EXISTS description TEXT;
ALTER TABLE public.projects ADD COLUMN IF NOT EXISTS tech_stack TEXT[];
ALTER TABLE public.projects ADD COLUMN IF NOT EXISTS link TEXT;
ALTER TABLE public.projects ADD COLUMN IF NOT EXISTS language TEXT DEFAULT 'pt';

-- Migrate data if needed (example logic, assuming 'pt' as default for existing rows)
UPDATE public.projects SET description = description_pt, tech_stack = tags, link = demo_url WHERE description IS NULL;

-- Update books table
-- Requirements: id, title, author, review, cover_url, language
-- Existing: id, title, author, category, rating, review_pt/en/ko, image_url
ALTER TABLE public.books ADD COLUMN IF NOT EXISTS review TEXT;
ALTER TABLE public.books ADD COLUMN IF NOT EXISTS cover_url TEXT;
ALTER TABLE public.books ADD COLUMN IF NOT EXISTS language TEXT DEFAULT 'pt';

-- Migrate data
UPDATE public.books SET review = review_pt, cover_url = image_url WHERE review IS NULL;

-- Create resume_items table
-- Requirements: id, category, title, period, description, language
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

CREATE POLICY "Public resume_items are viewable by everyone" ON public.resume_items FOR SELECT USING (true);

-- Update music_tracks table
-- Requirements: id, title, audio_url, lyrics_pt, lyrics_en, lyrics_ko, duration
-- Existing: id, title, artist, deezer_id, lyrics_pt/en/ko
ALTER TABLE public.music_tracks ADD COLUMN IF NOT EXISTS audio_url TEXT;
ALTER TABLE public.music_tracks ADD COLUMN IF NOT EXISTS duration TEXT;

-- Seed Data for resume_items (Example)
INSERT INTO public.resume_items (category, title, period, description, language)
SELECT 'work', role_pt, to_char(start_date, 'YYYY') || ' - ' || COALESCE(to_char(end_date, 'YYYY'), 'Present'), description_pt, 'pt' FROM public.resume_entries;

INSERT INTO public.resume_items (category, title, period, description, language)
SELECT 'work', role_en, to_char(start_date, 'YYYY') || ' - ' || COALESCE(to_char(end_date, 'YYYY'), 'Present'), description_en, 'en' FROM public.resume_entries;

INSERT INTO public.resume_items (category, title, period, description, language)
SELECT 'work', role_ko, to_char(start_date, 'YYYY') || ' - ' || COALESCE(to_char(end_date, 'YYYY'), 'Present'), description_ko, 'ko' FROM public.resume_entries;

