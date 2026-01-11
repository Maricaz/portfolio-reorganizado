-- Create Playlists Table
CREATE TABLE IF NOT EXISTS public.playlists (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create Playlist Tracks Table (Many-to-Many)
CREATE TABLE IF NOT EXISTS public.playlist_tracks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    playlist_id UUID NOT NULL REFERENCES public.playlists(id) ON DELETE CASCADE,
    track_id UUID NOT NULL REFERENCES public.music_tracks(id) ON DELETE CASCADE,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(playlist_id, track_id)
);

-- Enable Row Level Security
ALTER TABLE public.playlists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.playlist_tracks ENABLE ROW LEVEL SECURITY;

-- Policies for Playlists
CREATE POLICY "Public read access for playlists" 
ON public.playlists FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can insert playlists" 
ON public.playlists FOR INSERT 
WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update playlists" 
ON public.playlists FOR UPDATE 
USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete playlists" 
ON public.playlists FOR DELETE 
USING (auth.role() = 'authenticated');

-- Policies for Playlist Tracks
CREATE POLICY "Public read access for playlist_tracks" 
ON public.playlist_tracks FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can insert playlist_tracks" 
ON public.playlist_tracks FOR INSERT 
WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update playlist_tracks" 
ON public.playlist_tracks FOR UPDATE 
USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete playlist_tracks" 
ON public.playlist_tracks FOR DELETE 
USING (auth.role() = 'authenticated');
