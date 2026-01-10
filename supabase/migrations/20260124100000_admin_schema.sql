-- Enable RLS and Policies for Admin features

-- Books Table
CREATE TABLE IF NOT EXISTS public.books (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    category TEXT DEFAULT 'General',
    rating INTEGER DEFAULT 0,
    synopsis TEXT,
    review_pt TEXT,
    review_en TEXT,
    review_ko TEXT,
    curation TEXT,
    original_title TEXT,
    translation TEXT,
    language_code TEXT NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.books ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read books" ON public.books FOR SELECT USING (true);
CREATE POLICY "Admin all books" ON public.books FOR ALL USING (auth.role() = 'authenticated');

-- Music Tracks Table
CREATE TABLE IF NOT EXISTS public.music_tracks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    track_id TEXT,
    title TEXT NOT NULL,
    artist TEXT NOT NULL,
    src_url TEXT,
    deezer_id TEXT,
    lyrics JSONB,
    platforms JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.music_tracks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read music" ON public.music_tracks FOR SELECT USING (true);
CREATE POLICY "Admin all music" ON public.music_tracks FOR ALL USING (auth.role() = 'authenticated');

-- Resume Experience
CREATE TABLE IF NOT EXISTS public.resume_experience (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    role_pt TEXT,
    role_en TEXT,
    role_ko TEXT,
    company TEXT NOT NULL,
    location_pt TEXT,
    location_en TEXT,
    location_ko TEXT,
    start_date DATE NOT NULL,
    end_date DATE,
    is_current BOOLEAN DEFAULT false,
    description_pt TEXT,
    description_en TEXT,
    description_ko TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.resume_experience ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read experience" ON public.resume_experience FOR SELECT USING (true);
CREATE POLICY "Admin all experience" ON public.resume_experience FOR ALL USING (auth.role() = 'authenticated');

-- Resume Education
CREATE TABLE IF NOT EXISTS public.resume_education (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    degree_pt TEXT,
    degree_en TEXT,
    degree_ko TEXT,
    institution TEXT NOT NULL,
    location_pt TEXT,
    location_en TEXT,
    location_ko TEXT,
    start_date DATE NOT NULL,
    end_date DATE,
    is_current BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.resume_education ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read education" ON public.resume_education FOR SELECT USING (true);
CREATE POLICY "Admin all education" ON public.resume_education FOR ALL USING (auth.role() = 'authenticated');

-- Resume Skills
CREATE TABLE IF NOT EXISTS public.resume_skills (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    proficiency INTEGER DEFAULT 0,
    category TEXT DEFAULT 'Other',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.resume_skills ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read skills" ON public.resume_skills FOR SELECT USING (true);
CREATE POLICY "Admin all skills" ON public.resume_skills FOR ALL USING (auth.role() = 'authenticated');

-- Resume Certifications
CREATE TABLE IF NOT EXISTS public.resume_certifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    institution TEXT NOT NULL,
    date DATE NOT NULL,
    url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.resume_certifications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read certifications" ON public.resume_certifications FOR SELECT USING (true);
CREATE POLICY "Admin all certifications" ON public.resume_certifications FOR ALL USING (auth.role() = 'authenticated');

-- Resume Languages
CREATE TABLE IF NOT EXISTS public.resume_languages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    language_pt TEXT,
    language_en TEXT,
    language_ko TEXT,
    level_pt TEXT,
    level_en TEXT,
    level_ko TEXT,
    proficiency INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.resume_languages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read languages" ON public.resume_languages FOR SELECT USING (true);
CREATE POLICY "Admin all languages" ON public.resume_languages FOR ALL USING (auth.role() = 'authenticated');

-- Resume Publications
CREATE TABLE IF NOT EXISTS public.resume_publications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    summary_pt TEXT,
    summary_en TEXT,
    summary_ko TEXT,
    url TEXT,
    date DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.resume_publications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read publications" ON public.resume_publications FOR SELECT USING (true);
CREATE POLICY "Admin all publications" ON public.resume_publications FOR ALL USING (auth.role() = 'authenticated');

-- Site Translations for Dynamic Content
CREATE TABLE IF NOT EXISTS public.site_translations (
    key TEXT NOT NULL,
    lang TEXT NOT NULL,
    value TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    PRIMARY KEY (key, lang)
);
ALTER TABLE public.site_translations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read translations" ON public.site_translations FOR SELECT USING (true);
CREATE POLICY "Admin all translations" ON public.site_translations FOR ALL USING (auth.role() = 'authenticated');

-- Site Settings
CREATE TABLE IF NOT EXISTS public.site_settings (
    key TEXT PRIMARY KEY,
    value JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read settings" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "Admin all settings" ON public.site_settings FOR ALL USING (auth.role() = 'authenticated');
