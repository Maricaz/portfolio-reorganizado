INSERT INTO public.site_translations (key, lang, value)
VALUES
  ('nav.admin', 'pt', 'Login'),
  ('nav.admin', 'en', 'Login'),
  ('nav.admin', 'ko', '로그인')
ON CONFLICT (key, lang) DO UPDATE SET value = EXCLUDED.value;
