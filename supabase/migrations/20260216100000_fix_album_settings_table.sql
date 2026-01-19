-- Fix album_settings table structure and ensure it exists
DROP TABLE IF EXISTS public.album_settings;

CREATE TABLE public.album_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    title_en TEXT,
    title_pt TEXT,
    title_ko TEXT,
    description_en TEXT,
    description_pt TEXT,
    description_ko TEXT,
    image_url TEXT
);

-- Enable RLS
ALTER TABLE public.album_settings ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access" ON public.album_settings FOR SELECT USING (true);

-- Seed initial data
INSERT INTO public.album_settings (
    title_en, 
    title_pt, 
    title_ko, 
    description_en, 
    description_pt, 
    description_ko, 
    image_url
) VALUES (
    'Light & Echo',
    'Luz & Eco',
    '빛과 메아리',
    'A conceptual album exploring the duality between sound and silence. A journey through soundscapes that reflect the complexity of the human experience.',
    'Um álbum conceitual explorando a dualidade entre som e silêncio. Uma jornada através de paisagens sonoras que refletem a complexidade da experiência humana.',
    '소리와 침묵 사이의 이중성을 탐구하는 컨셉 앨범. 인간 경험의 복잡성을 반영하는 소리 풍경을 통한 여정.',
    'https://img.usecurling.com/p/800/800?q=abstract%20sound%20waves&color=blue'
);
