-- Migration for Enhanced Admin System: Permissions, Push Subscriptions, and Audit Logs

-- 1. Add permissions column to profiles
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS permissions JSONB DEFAULT '{}'::jsonb;

-- 2. Create push_subscriptions table
CREATE TABLE IF NOT EXISTS public.push_subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    endpoint TEXT NOT NULL,
    keys JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(user_id, endpoint)
);

-- 3. Audit Logging System

-- Function to calculate diffs and insert log
CREATE OR REPLACE FUNCTION public.log_audit_event()
RETURNS TRIGGER AS $$
DECLARE
    old_data_json JSONB;
    new_data_json JSONB;
    user_id_val UUID;
BEGIN
    -- Attempt to get user_id from context (set by supabase client)
    -- Fallback to null (system action)
    BEGIN
        user_id_val := auth.uid();
    EXCEPTION WHEN OTHERS THEN
        user_id_val := NULL;
    END;

    IF (TG_OP = 'DELETE') THEN
        old_data_json := to_jsonb(OLD);
        new_data_json := NULL;
    ELSIF (TG_OP = 'INSERT') THEN
        old_data_json := NULL;
        new_data_json := to_jsonb(NEW);
    ELSE -- UPDATE
        old_data_json := to_jsonb(OLD);
        new_data_json := to_jsonb(NEW);
        
        -- Optimization: If data didn't change (other than updated_at), maybe skip?
        -- For now, we log all updates to tracked tables for security.
    END IF;

    INSERT INTO public.audit_logs (
        user_id,
        action,
        table_name,
        record_id,
        old_data,
        new_data
    ) VALUES (
        user_id_val,
        TG_OP,
        TG_TABLE_NAME,
        COALESCE(NEW.id, OLD.id),
        old_data_json,
        new_data_json
    );

    RETURN NULL; -- Result is ignored for AFTER triggers
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Apply Audit Triggers to critical tables
DROP TRIGGER IF EXISTS audit_profiles_changes ON public.profiles;
CREATE TRIGGER audit_profiles_changes
AFTER INSERT OR UPDATE OR DELETE ON public.profiles
FOR EACH ROW EXECUTE FUNCTION public.log_audit_event();

DROP TRIGGER IF EXISTS audit_books_changes ON public.books;
CREATE TRIGGER audit_books_changes
AFTER INSERT OR UPDATE OR DELETE ON public.books
FOR EACH ROW EXECUTE FUNCTION public.log_audit_event();

DROP TRIGGER IF EXISTS audit_music_tracks_changes ON public.music_tracks;
CREATE TRIGGER audit_music_tracks_changes
AFTER INSERT OR UPDATE OR DELETE ON public.music_tracks
FOR EACH ROW EXECUTE FUNCTION public.log_audit_event();

DROP TRIGGER IF EXISTS audit_site_settings_changes ON public.site_settings;
CREATE TRIGGER audit_site_settings_changes
AFTER INSERT OR UPDATE OR DELETE ON public.site_settings
FOR EACH ROW EXECUTE FUNCTION public.log_audit_event();

-- RLS for push_subscriptions
ALTER TABLE public.push_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own subscriptions"
ON public.push_subscriptions
FOR ALL
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all subscriptions"
ON public.push_subscriptions
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE profiles.id = auth.uid()
    AND (profiles.role = 'admin' OR profiles.role = 'super_admin')
  )
);
