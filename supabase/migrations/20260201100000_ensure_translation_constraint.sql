-- Ensure unique constraint on site_translations for upsert to work correctly
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'site_translations_key_lang_key') THEN
        ALTER TABLE site_translations ADD CONSTRAINT site_translations_key_lang_key UNIQUE (key, lang);
    END IF;
END $$;
