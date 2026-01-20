-- Create social_links table
CREATE TABLE IF NOT EXISTS public.social_links (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    platform TEXT NOT NULL,
    url TEXT NOT NULL
);

-- Enable RLS
ALTER TABLE public.social_links ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
DROP POLICY IF EXISTS "Allow public read access" ON public.social_links;
CREATE POLICY "Allow public read access" ON public.social_links FOR SELECT USING (true);

-- Seed data
INSERT INTO public.social_links (platform, url) VALUES
    ('GitHub', 'https://github.com/mariana-azevedo'),
    ('LinkedIn', 'https://linkedin.com/in/mariana-azevedo'),
    ('Instagram', 'https://instagram.com/mariana.azevedo'),
    ('YouTube', 'https://youtube.com/mariana-azevedo');
