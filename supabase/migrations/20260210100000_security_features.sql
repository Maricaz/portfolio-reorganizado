-- Migration for Security Features: Session Management and Security Auditing

-- 1. Create a secure RPC function to log security events from the client
-- This allows authenticated users to insert audit logs for security actions (2FA, Password Reset)
-- without giving them direct INSERT permission on the table for everything.
CREATE OR REPLACE FUNCTION public.log_security_activity(
  action_text TEXT,
  details JSONB DEFAULT '{}'::jsonb
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.audit_logs (
    user_id,
    action,
    table_name,
    created_at,
    new_data
  ) VALUES (
    auth.uid(),
    action_text,
    'security_events',
    now(),
    details
  );
END;
$$;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION public.log_security_activity(TEXT, JSONB) TO authenticated;

-- 2. Add comment to clarify usage
COMMENT ON FUNCTION public.log_security_activity IS 'Securely logs security-related events like 2FA changes and password resets.';
