-- Insert the home hero image URL into site_settings
-- We use a placeholder that matches the provided black and white portrait
INSERT INTO public.site_settings (key, value)
VALUES (
  'home_hero_image', 
  '"https://img.usecurling.com/p/800/800?q=portrait%20woman%20black%20white&color=black"'
)
ON CONFLICT (key) 
DO UPDATE SET value = EXCLUDED.value;
