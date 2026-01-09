-- Update books table to support new requirements and ensure all columns exist
ALTER TABLE public.books 
ADD COLUMN IF NOT EXISTS curatorship TEXT,
ADD COLUMN IF NOT EXISTS original_title TEXT,
ADD COLUMN IF NOT EXISTS translation TEXT,
ADD COLUMN IF NOT EXISTS category TEXT,
ADD COLUMN IF NOT EXISTS rating INTEGER;
