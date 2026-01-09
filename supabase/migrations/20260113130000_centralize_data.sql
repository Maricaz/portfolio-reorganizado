-- Create skills table
CREATE TABLE IF NOT EXISTS public.skills (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    label TEXT NOT NULL,
    value INTEGER NOT NULL CHECK (value >= 0 AND value <= 100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create social_links table
DROP TABLE IF EXISTS public.social_links;
CREATE TABLE public.social_links (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    platform TEXT NOT NULL,
    url TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create site_settings table for brand and resume config
CREATE TABLE IF NOT EXISTS public.site_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    key TEXT NOT NULL UNIQUE,
    value JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create album_concept table
DROP TABLE IF EXISTS public.album_settings; -- Drop old if exists
CREATE TABLE public.album_concept (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title JSONB NOT NULL DEFAULT '{}'::jsonb,
    description JSONB NOT NULL DEFAULT '{}'::jsonb,
    video_url TEXT,
    cover_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Recreate music_tracks table to match new requirements
DROP TABLE IF EXISTS public.music_tracks;
CREATE TABLE public.music_tracks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    track_id TEXT NOT NULL,
    title TEXT NOT NULL,
    artist TEXT NOT NULL,
    src_url TEXT,
    platforms JSONB DEFAULT '{}'::jsonb,
    lyrics JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.social_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.album_concept ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.music_tracks ENABLE ROW LEVEL SECURITY;

-- Create policies (Public Read)
CREATE POLICY "Allow public read access" ON public.skills FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.social_links FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.album_concept FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.music_tracks FOR SELECT USING (true);

-- Seed Data

-- Site Settings
INSERT INTO public.site_settings (key, value) VALUES
('brand_config', '{"primary_gradient": "from-indigo-500 to-fuchsia-500"}'::jsonb),
('resume_config', '{"url": "/cv-mari-azevedo.pdf"}'::jsonb);

-- Skills
INSERT INTO public.skills (label, value) VALUES
('HTML/CSS', 95),
('JavaScript', 90),
('Python', 85);

-- Social Links
INSERT INTO public.social_links (platform, url) VALUES
('GitHub', 'https://github.com/Maricaz'),
('LinkedIn', 'https://linkedin.com/in/mariana-azevedo-52b637a6'),
('Lattes', 'http://lattes.cnpq.br/'),
('YouTube', 'https://youtube.com'),
('Instagram', 'https://instagram.com');

-- Album Concept
INSERT INTO public.album_concept (title, description, video_url, cover_url) VALUES
(
    '{"pt": "Conceito do Álbum", "en": "Album Concept", "ko": "앨범 컨셉"}'::jsonb,
    '{"pt": "Uma jornada visual e sonora através das emoções.", "en": "A visual and sonic journey through emotions.", "ko": "감정을 통한 시각적, 청각적 여행."}'::jsonb,
    'https://www.youtube.com/embed/dQw4w9WgXcQ',
    'https://img.usecurling.com/p/500/500?q=album%20cover%20art'
);

-- Music Tracks
INSERT INTO public.music_tracks (track_id, title, artist, src_url, platforms, lyrics) VALUES
(
    'ecos-da-minha-mente',
    'Ecos da Minha Mente',
    'Mariana Azevedo',
    'https://example.com/audio/ecos.mp3',
    '{"spotify": "", "deezer": "", "apple": "", "youtube": ""}'::jsonb,
    '{"pt": "Ecos da minha mente...", "en": "Echoes of my mind...", "ko": "내 마음의 메아리..."}'::jsonb
),
(
    'fica',
    'Fica',
    'Mariana Azevedo',
    'https://example.com/audio/fica.mp3',
    '{"spotify": "40QtBW26GpgcWzes35FSAj", "deezer": "123456"}'::jsonb,
    '{"pt": "Fica comigo esta noite...", "en": "Stay with me tonight...", "ko": "오늘 밤 나와 함께 있어..."}'::jsonb
),
(
    'aurora',
    'Aurora',
    'Mariana Azevedo',
    'https://example.com/audio/aurora.mp3',
    '{"spotify": "", "deezer": ""}'::jsonb,
    '{"pt": "A luz da aurora brilha...", "en": "The light of aurora shines...", "ko": "오로라의 빛이 빛난다..."}'::jsonb
);
