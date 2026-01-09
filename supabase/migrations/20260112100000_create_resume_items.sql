-- Create resume_items table
CREATE TABLE IF NOT EXISTS public.resume_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category TEXT NOT NULL CHECK (category IN ('experience', 'education', 'skills')),
    title_pt TEXT,
    title_en TEXT,
    title_ko TEXT,
    institution TEXT,
    period TEXT,
    description_pt TEXT,
    description_en TEXT,
    description_ko TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.resume_items ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Enable read access for all users" ON public.resume_items
    FOR SELECT
    USING (true);

-- Insert sample data
INSERT INTO public.resume_items (category, title_pt, title_en, title_ko, institution, period, description_pt, description_en, description_ko)
VALUES 
('experience', 'Engenheira de Software Senior', 'Senior Software Engineer', '시니어 소프트웨어 엔지니어', 'Tech Corp', '2021 - Present', 'Liderança técnica de equipe, desenvolvimento de arquitetura de microsserviços e mentoria de desenvolvedores júnior.', 'Technical team leadership, microservices architecture development, and junior developer mentorship.', '기술 팀 리더십, 마이크로서비스 아키텍처 개발 및 주니어 개발자 멘토링.'),
('experience', 'Desenvolvedora Full Stack', 'Full Stack Developer', '풀스택 개발자', 'Startup Inc', '2018 - 2021', 'Desenvolvimento de aplicações web utilizando React, Node.js e PostgreSQL.', 'Web application development using React, Node.js, and PostgreSQL.', 'React, Node.js 및 PostgreSQL을 사용한 웹 애플리케이션 개발.'),
('education', 'Mestrado em Ciência da Computação', 'Master in Computer Science', '컴퓨터 공학 석사', 'University of Technology', '2016 - 2018', 'Foco em Inteligência Artificial e Aprendizado de Máquina.', 'Focus on Artificial Intelligence and Machine Learning.', '인공지능 및 머신러닝 중점.'),
('education', 'Bacharelado em Engenharia de Software', 'Bachelor in Software Engineering', '소프트웨어 공학 학사', 'State University', '2012 - 2016', 'Graduação com honras.', 'Graduated with honors.', '우등 졸업.'),
('skills', 'Frontend Development', 'Frontend Development', '프론트엔드 개발', NULL, 'Advanced', 'React, TypeScript, TailwindCSS, Next.js', 'React, TypeScript, TailwindCSS, Next.js', 'React, TypeScript, TailwindCSS, Next.js'),
('skills', 'Backend Development', 'Backend Development', '백엔드 개발', NULL, 'Advanced', 'Node.js, PostgreSQL, Supabase, Docker', 'Node.js, PostgreSQL, Supabase, Docker', 'Node.js, PostgreSQL, Supabase, Docker');
