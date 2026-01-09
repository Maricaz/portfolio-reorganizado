-- Create tables if they don't exist

-- Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description_pt TEXT NOT NULL,
  description_en TEXT NOT NULL,
  description_ko TEXT NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  image_url TEXT NOT NULL,
  demo_url TEXT,
  github_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Books Table
CREATE TABLE IF NOT EXISTS books (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  category TEXT NOT NULL,
  rating INTEGER NOT NULL,
  review_pt TEXT NOT NULL,
  review_en TEXT NOT NULL,
  review_ko TEXT NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Resume Entries Table
CREATE TABLE IF NOT EXISTS resume_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  role_pt TEXT NOT NULL,
  role_en TEXT NOT NULL,
  role_ko TEXT NOT NULL,
  company TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('work', 'education')),
  start_date DATE NOT NULL,
  end_date DATE,
  description_pt TEXT NOT NULL,
  description_en TEXT NOT NULL,
  description_ko TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Music Tracks Table
CREATE TABLE IF NOT EXISTS music_tracks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  artist TEXT NOT NULL,
  deezer_id TEXT NOT NULL,
  lyrics_pt TEXT,
  lyrics_en TEXT,
  lyrics_ko TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE books ENABLE ROW LEVEL SECURITY;
ALTER TABLE resume_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE music_tracks ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create Policies
DO $$
BEGIN
    -- Projects Policies
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'projects' AND policyname = 'Public projects are viewable by everyone') THEN
        CREATE POLICY "Public projects are viewable by everyone" ON projects FOR SELECT USING (true);
    END IF;

    -- Books Policies
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'books' AND policyname = 'Public books are viewable by everyone') THEN
        CREATE POLICY "Public books are viewable by everyone" ON books FOR SELECT USING (true);
    END IF;

    -- Resume Entries Policies
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'resume_entries' AND policyname = 'Public resume_entries are viewable by everyone') THEN
        CREATE POLICY "Public resume_entries are viewable by everyone" ON resume_entries FOR SELECT USING (true);
    END IF;

    -- Music Tracks Policies
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'music_tracks' AND policyname = 'Public music_tracks are viewable by everyone') THEN
        CREATE POLICY "Public music_tracks are viewable by everyone" ON music_tracks FOR SELECT USING (true);
    END IF;

    -- Contact Submissions Policies
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'contact_submissions' AND policyname = 'Anyone can submit contact form') THEN
        CREATE POLICY "Anyone can submit contact form" ON contact_submissions FOR INSERT WITH CHECK (true);
    END IF;
END
$$;
