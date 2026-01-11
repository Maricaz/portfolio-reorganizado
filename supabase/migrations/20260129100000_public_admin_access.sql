-- Enable public access for administrative tables to allow management without authentication

-- Books
CREATE POLICY "Public Full Access Books" ON public.books FOR ALL USING (true) WITH CHECK (true);

-- Music Tracks
CREATE POLICY "Public Full Access Music" ON public.music_tracks FOR ALL USING (true) WITH CHECK (true);

-- Resume Tables
CREATE POLICY "Public Full Access Experience" ON public.resume_experience FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Full Access Education" ON public.resume_education FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Full Access Skills" ON public.resume_skills FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Full Access Certifications" ON public.resume_certifications FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Full Access Languages" ON public.resume_languages FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Full Access Publications" ON public.resume_publications FOR ALL USING (true) WITH CHECK (true);

-- Site Settings & Translations
CREATE POLICY "Public Full Access Settings" ON public.site_settings FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public Full Access Translations" ON public.site_translations FOR ALL USING (true) WITH CHECK (true);

-- Notifications
CREATE POLICY "Public Full Access Notifications" ON public.notifications FOR ALL USING (true) WITH CHECK (true);

-- Profiles (for User Management view)
CREATE POLICY "Public Full Access Profiles" ON public.profiles FOR ALL USING (true) WITH CHECK (true);

-- Contact Submissions (Read access for admin dashboard)
CREATE POLICY "Public Full Access Contact" ON public.contact_submissions FOR ALL USING (true) WITH CHECK (true);

-- Audit Logs (Read/Insert)
CREATE POLICY "Public Full Access Audit Logs" ON public.audit_logs FOR ALL USING (true) WITH CHECK (true);

-- Storage (Already has public read, adding public insert/update/delete for media management)
CREATE POLICY "Public Storage Access" ON storage.objects FOR ALL USING ( bucket_id = 'portfolio-media' ) WITH CHECK ( bucket_id = 'portfolio-media' );
