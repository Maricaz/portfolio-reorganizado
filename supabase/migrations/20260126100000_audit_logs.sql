-- Create Audit Logs table
create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid, -- We store the UUID, potentially linking to profiles or auth.users
  action text not null,
  table_name text not null,
  record_id uuid,
  old_data jsonb,
  new_data jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.audit_logs enable row level security;

-- Policies
create policy "Admins can view audit logs"
  on public.audit_logs for select
  using (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid()
      and profiles.role in ('admin', 'super_admin')
    )
  );

-- Function to handle audit logging
create or replace function public.process_audit_log()
returns trigger as $$
declare
  old_data jsonb;
  new_data jsonb;
begin
  if (TG_OP = 'UPDATE') then
    old_data = to_jsonb(OLD);
    new_data = to_jsonb(NEW);
  elsif (TG_OP = 'DELETE') then
    old_data = to_jsonb(OLD);
    new_data = null;
  elsif (TG_OP = 'INSERT') then
    old_data = null;
    new_data = to_jsonb(NEW);
  end if;

  insert into public.audit_logs (
    user_id,
    action,
    table_name,
    record_id,
    old_data,
    new_data
  )
  values (
    auth.uid(),
    TG_OP,
    TG_TABLE_NAME::text,
    coalesce(NEW.id, OLD.id),
    old_data,
    new_data
  );

  return null;
end;
$$ language plpgsql security definer;

-- Apply triggers to relevant tables
drop trigger if exists audit_books on public.books;
create trigger audit_books
  after insert or update or delete on public.books
  for each row execute function public.process_audit_log();

drop trigger if exists audit_music_tracks on public.music_tracks;
create trigger audit_music_tracks
  after insert or update or delete on public.music_tracks
  for each row execute function public.process_audit_log();

drop trigger if exists audit_resume_experience on public.resume_experience;
create trigger audit_resume_experience
  after insert or update or delete on public.resume_experience
  for each row execute function public.process_audit_log();

drop trigger if exists audit_resume_education on public.resume_education;
create trigger audit_resume_education
  after insert or update or delete on public.resume_education
  for each row execute function public.process_audit_log();

drop trigger if exists audit_resume_skills on public.resume_skills;
create trigger audit_resume_skills
  after insert or update or delete on public.resume_skills
  for each row execute function public.process_audit_log();

drop trigger if exists audit_resume_certifications on public.resume_certifications;
create trigger audit_resume_certifications
  after insert or update or delete on public.resume_certifications
  for each row execute function public.process_audit_log();

drop trigger if exists audit_resume_languages on public.resume_languages;
create trigger audit_resume_languages
  after insert or update or delete on public.resume_languages
  for each row execute function public.process_audit_log();

drop trigger if exists audit_resume_publications on public.resume_publications;
create trigger audit_resume_publications
  after insert or update or delete on public.resume_publications
  for each row execute function public.process_audit_log();
