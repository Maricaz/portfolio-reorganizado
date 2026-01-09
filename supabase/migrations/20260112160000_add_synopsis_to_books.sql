-- Add synopsis column to books table if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'books' AND column_name = 'synopsis') THEN
        ALTER TABLE public.books ADD COLUMN synopsis TEXT;
    END IF;
END $$;

-- Update existing rows with some dummy synopsis if null (optional, but good for display)
UPDATE public.books 
SET synopsis = 'A compelling story that explores the depths of human nature and the complexities of our choices.' 
WHERE synopsis IS NULL;

-- Enable RLS (just in case it wasn't enabled, though it should be)
ALTER TABLE public.books ENABLE ROW LEVEL SECURITY;

-- Ensure policy exists
DROP POLICY IF EXISTS "Enable read access for all users" ON public.books;
CREATE POLICY "Enable read access for all users" ON public.books FOR SELECT USING (true);
