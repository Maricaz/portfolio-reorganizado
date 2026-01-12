-- Ensure audit_logs handles profile deletion gracefully
ALTER TABLE public.audit_logs
DROP CONSTRAINT IF EXISTS audit_logs_user_id_fkey;

ALTER TABLE public.audit_logs
ADD CONSTRAINT audit_logs_user_id_fkey
FOREIGN KEY (user_id) REFERENCES public.profiles(id)
ON DELETE SET NULL;

-- Insert default SEO settings if not exists
INSERT INTO public.site_settings (key, value)
VALUES 
  ('seo_global', '{"title": "My Portfolio", "description": "Welcome to my portfolio.", "keywords": "portfolio, developer, artist"}'::json)
ON CONFLICT (key) DO NOTHING;

