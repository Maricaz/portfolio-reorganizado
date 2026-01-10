INSERT INTO public.site_translations (key, lang, value)
VALUES
  ('nav.admin', 'pt', 'Administrador'),
  ('nav.admin', 'en', 'Admin'),
  ('nav.admin', 'ko', '관리자')
ON CONFLICT (key, lang) DO UPDATE SET value = EXCLUDED.value;
