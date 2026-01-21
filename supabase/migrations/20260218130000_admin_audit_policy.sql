-- Ensure Audit Logs table exists and has correct permissions
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id),
    action TEXT NOT NULL,
    table_name TEXT NOT NULL,
    record_id TEXT,
    old_data JSONB,
    new_data JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Policy for Admins to Insert Audit Logs
CREATE POLICY "Admins can insert audit logs" ON public.audit_logs
    FOR INSERT
    WITH CHECK (
        public.is_admin()
    );

-- Policy for Admins to View Audit Logs
CREATE POLICY "Admins can view audit logs" ON public.audit_logs
    FOR SELECT
    USING (
        public.is_admin()
    );

-- Ensure Admins can update Profiles (including roles and ban status)
-- Note: Existing policies might cover this, but we ensure it here
CREATE POLICY "Admins can update all profiles" ON public.profiles
    FOR UPDATE
    USING (
        public.is_admin()
    )
    WITH CHECK (
        public.is_admin()
    );

-- Grant permissions
GRANT ALL ON public.audit_logs TO authenticated;
GRANT ALL ON public.profiles TO authenticated;
