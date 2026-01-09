-- Add new columns to music_tracks to support the new requirements
ALTER TABLE public.music_tracks ADD COLUMN IF NOT EXISTS audio_url TEXT;
ALTER TABLE public.music_tracks ADD COLUMN IF NOT EXISTS spotify_track_id TEXT;
ALTER TABLE public.music_tracks ADD COLUMN IF NOT EXISTS deezer_track_id TEXT;
ALTER TABLE public.music_tracks ADD COLUMN IF NOT EXISTS apple_music_id TEXT;
ALTER TABLE public.music_tracks ADD COLUMN IF NOT EXISTS youtube_video_id TEXT;
ALTER TABLE public.music_tracks ADD COLUMN IF NOT EXISTS lyrics JSONB DEFAULT '{}'::jsonb;

-- Migrate existing lyrics data to jsonb if the jsonb is empty
-- This preserves data if migration is run on an existing database
UPDATE public.music_tracks 
SET lyrics = jsonb_build_object(
    'pt', COALESCE(lyrics_pt, ''),
    'en', COALESCE(lyrics_en, ''),
    'ko', COALESCE(lyrics_ko, '')
)
WHERE lyrics = '{}'::jsonb AND (lyrics_pt IS NOT NULL OR lyrics_en IS NOT NULL OR lyrics_ko IS NOT NULL);

-- Migrate existing deezer_id to deezer_track_id if new column is empty
UPDATE public.music_tracks
SET deezer_track_id = deezer_id
WHERE deezer_track_id IS NULL AND deezer_id IS NOT NULL;

-- Create album_settings table for the concept section
CREATE TABLE IF NOT EXISTS public.album_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description_pt TEXT,
    description_en TEXT,
    description_ko TEXT,
    video_url TEXT,
    cover_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for album_settings
ALTER TABLE public.album_settings ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access for album_settings
DROP POLICY IF EXISTS "Allow public read access" ON public.album_settings;
CREATE POLICY "Allow public read access" ON public.album_settings FOR SELECT USING (true);

-- Insert sample data for Album Concept
INSERT INTO public.album_settings (title, description_pt, description_en, description_ko, cover_url)
SELECT 
    'Luz & Eco',
    'Um álbum conceitual explorando a dualidade entre som e silêncio. Uma jornada através de paisagens sonoras que refletem a complexidade da experiência humana.',
    'A conceptual album exploring the duality between sound and silence. A journey through soundscapes that reflect the complexity of the human experience.',
    '소리와 침묵 사이의 이중성을 탐구하는 컨셉 앨범. 인간 경험의 복잡성을 반영하는 소리 풍경을 통한 여정.',
    'https://img.usecurling.com/p/800/800?q=abstract%20sound%20waves&color=blue'
WHERE NOT EXISTS (SELECT 1 FROM public.album_settings);

-- Update sample music tracks with new fields if they exist
UPDATE public.music_tracks
SET 
    audio_url = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    spotify_track_id = '4cOdK2wGLETKBW3PvgPWqT',
    youtube_video_id = 'dQw4w9WgXcQ'
WHERE title = 'Track 1' OR title LIKE 'Track%';
