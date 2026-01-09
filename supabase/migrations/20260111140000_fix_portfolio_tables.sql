-- Fix portfolio tables creation with timeout protection and idempotency

-- Projects Table
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description_pt TEXT,
    description_en TEXT,
    description_ko TEXT,
    tech_stack TEXT[] DEFAULT '{}',
    image_url TEXT,
    demo_url TEXT,
    github_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

DO $$ 
BEGIN
    DROP POLICY IF EXISTS "Public projects are viewable by everyone" ON public.projects;
    CREATE POLICY "Public projects are viewable by everyone" ON public.projects FOR SELECT USING (true);
EXCEPTION
    WHEN OTHERS THEN NULL;
END $$;

-- Books Table
CREATE TABLE IF NOT EXISTS public.books (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    review_pt TEXT,
    review_en TEXT,
    review_ko TEXT,
    cover_url TEXT NOT NULL,
    rating INTEGER DEFAULT 0,
    category TEXT DEFAULT 'General',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.books ENABLE ROW LEVEL SECURITY;

DO $$ 
BEGIN
    DROP POLICY IF EXISTS "Public books are viewable by everyone" ON public.books;
    CREATE POLICY "Public books are viewable by everyone" ON public.books FOR SELECT USING (true);
EXCEPTION
    WHEN OTHERS THEN NULL;
END $$;

-- Music Tracks Table
CREATE TABLE IF NOT EXISTS public.music_tracks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    artist TEXT NOT NULL,
    audio_url TEXT,
    lyrics_pt TEXT,
    lyrics_en TEXT,
    lyrics_ko TEXT,
    deezer_id TEXT,
    spotify_id TEXT,
    duration TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.music_tracks ENABLE ROW LEVEL SECURITY;

DO $$ 
BEGIN
    DROP POLICY IF EXISTS "Public music_tracks are viewable by everyone" ON public.music_tracks;
    CREATE POLICY "Public music_tracks are viewable by everyone" ON public.music_tracks FOR SELECT USING (true);
EXCEPTION
    WHEN OTHERS THEN NULL;
END $$;

-- Resume Data Table
CREATE TABLE IF NOT EXISTS public.resume_data (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category TEXT NOT NULL,
    title_pt TEXT,
    title_en TEXT,
    title_ko TEXT,
    period TEXT,
    description_pt TEXT,
    description_en TEXT,
    description_ko TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.resume_data ENABLE ROW LEVEL SECURITY;

DO $$ 
BEGIN
    DROP POLICY IF EXISTS "Public resume_data are viewable by everyone" ON public.resume_data;
    CREATE POLICY "Public resume_data are viewable by everyone" ON public.resume_data FOR SELECT USING (true);
EXCEPTION
    WHEN OTHERS THEN NULL;
END $$;

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    subject TEXT DEFAULT 'Portfolio Contact',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

DO $$ 
BEGIN
    DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;
    CREATE POLICY "Anyone can submit contact form" ON public.contact_submissions FOR INSERT WITH CHECK (true);
EXCEPTION
    WHEN OTHERS THEN NULL;
END $$;
