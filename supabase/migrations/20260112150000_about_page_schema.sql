-- Create profile_content table
CREATE TABLE IF NOT EXISTS public.profile_content (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    bio_pt TEXT NOT NULL,
    bio_en TEXT NOT NULL,
    bio_ko TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create social_links table
CREATE TABLE IF NOT EXISTS public.social_links (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    platform TEXT NOT NULL CHECK (platform IN ('instagram', 'linkedin', 'github', 'lattes', 'resume')),
    url TEXT NOT NULL,
    icon TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create professional_skills table
CREATE TABLE IF NOT EXISTS public.professional_skills (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    proficiency INTEGER NOT NULL CHECK (proficiency >= 0 AND proficiency <= 100),
    category TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.profile_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.social_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.professional_skills ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Enable read access for all users" ON public.profile_content FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.social_links FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.professional_skills FOR SELECT USING (true);

-- Insert sample data for profile_content
INSERT INTO public.profile_content (bio_pt, bio_en, bio_ko)
VALUES (
'Sou Mariana Azevedo, uma desenvolvedora apaixonada por criar soluções digitais que impactam positivamente a vida das pessoas.\n\nCom mais de 5 anos de experiência em desenvolvimento web, especializei-me em React, Node.js e arquitetura de software. Minha jornada começou na faculdade de Engenharia de Software, onde descobri minha paixão por transformar código em arte.',
'I am Mariana Azevedo, a developer passionate about creating digital solutions that positively impact people''s lives.\n\nWith over 5 years of experience in web development, I specialized in React, Node.js, and software architecture. My journey began in Software Engineering college, where I discovered my passion for turning code into art.',
'저는 마리아나 아제베두입니다. 사람들의 삶에 긍정적인 영향을 미치는 디지털 솔루션을 만드는 것에 열정을 가진 개발자입니다.\n\n웹 개발 분야에서 5년 이상의 경력을 쌓았으며, React, Node.js 및 소프트웨어 아키텍처를 전문으로 합니다. 저의 여정은 소프트웨어 공학 대학에서 시작되었으며, 그곳에서 코드를 예술로 바꾸는 열정을 발견했습니다.'
);

-- Insert sample data for social_links
INSERT INTO public.social_links (platform, url, icon) VALUES
('instagram', 'https://instagram.com', 'Instagram'),
('linkedin', 'https://linkedin.com/in/marianaazevedo', 'Linkedin'),
('github', 'https://github.com/marianaazevedo', 'Github'),
('lattes', 'http://lattes.cnpq.br/', 'GraduationCap'),
('resume', '/resume.pdf', 'FileText');

-- Insert sample data for professional_skills
INSERT INTO public.professional_skills (name, proficiency, category) VALUES
('React', 95, 'Frontend'),
('TypeScript', 90, 'Frontend'),
('Node.js', 85, 'Backend'),
('Supabase', 80, 'Backend'),
('Python', 70, 'Backend'),
('Docker', 65, 'DevOps');
