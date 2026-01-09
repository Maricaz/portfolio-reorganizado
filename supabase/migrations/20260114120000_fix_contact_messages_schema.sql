-- Create the contact_messages table if it doesn't exist
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  origin TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Ensure origin column exists (in case table was created by a previous partial migration)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'contact_messages' AND column_name = 'origin') THEN
        ALTER TABLE contact_messages ADD COLUMN origin TEXT;
    END IF;
END $$;

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if any to avoid conflicts
DROP POLICY IF EXISTS "Enable insert for everyone" ON contact_messages;

-- Create policy to allow inserting data (public form)
CREATE POLICY "Enable insert for everyone" ON contact_messages FOR INSERT WITH CHECK (true);
