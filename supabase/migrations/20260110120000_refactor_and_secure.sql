-- Rename experience table to resume_entries
ALTER TABLE IF EXISTS experience RENAME TO resume_entries;

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE books ENABLE ROW LEVEL SECURITY;
ALTER TABLE resume_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE music_tracks ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create Policies for Public Access (Read Only)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'projects' AND policyname = 'Public projects are viewable by everyone') THEN
        CREATE POLICY "Public projects are viewable by everyone" ON projects FOR SELECT USING (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'books' AND policyname = 'Public books are viewable by everyone') THEN
        CREATE POLICY "Public books are viewable by everyone" ON books FOR SELECT USING (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'resume_entries' AND policyname = 'Public resume_entries are viewable by everyone') THEN
        CREATE POLICY "Public resume_entries are viewable by everyone" ON resume_entries FOR SELECT USING (true);
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'music_tracks' AND policyname = 'Public music_tracks are viewable by everyone') THEN
        CREATE POLICY "Public music_tracks are viewable by everyone" ON music_tracks FOR SELECT USING (true);
    END IF;
END
$$;

-- Create Policy for Contact Form (Insert Only)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'contact_submissions' AND policyname = 'Anyone can submit contact form') THEN
        CREATE POLICY "Anyone can submit contact form" ON contact_submissions FOR INSERT WITH CHECK (true);
    END IF;
END
$$;
