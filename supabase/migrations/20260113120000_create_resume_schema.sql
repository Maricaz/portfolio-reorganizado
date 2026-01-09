-- Create resume_experience table
CREATE TABLE IF NOT EXISTS public.resume_experience (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    role_pt TEXT NOT NULL,
    role_en TEXT NOT NULL,
    role_ko TEXT NOT NULL,
    company TEXT NOT NULL,
    location_pt TEXT,
    location_en TEXT,
    location_ko TEXT,
    start_date DATE NOT NULL,
    end_date DATE,
    is_current BOOLEAN DEFAULT false,
    description_pt TEXT,
    description_en TEXT,
    description_ko TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create resume_education table
CREATE TABLE IF NOT EXISTS public.resume_education (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    degree_pt TEXT NOT NULL,
    degree_en TEXT NOT NULL,
    degree_ko TEXT NOT NULL,
    institution TEXT NOT NULL,
    location_pt TEXT,
    location_en TEXT,
    location_ko TEXT,
    start_date DATE NOT NULL,
    end_date DATE,
    is_current BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create resume_skills table
CREATE TABLE IF NOT EXISTS public.resume_skills (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    proficiency INTEGER NOT NULL CHECK (proficiency >= 0 AND proficiency <= 100),
    category TEXT NOT NULL DEFAULT 'Other',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create resume_certifications table
CREATE TABLE IF NOT EXISTS public.resume_certifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    institution TEXT NOT NULL,
    date DATE NOT NULL,
    url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create resume_languages table
CREATE TABLE IF NOT EXISTS public.resume_languages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    language_pt TEXT NOT NULL,
    language_en TEXT NOT NULL,
    language_ko TEXT NOT NULL,
    level_pt TEXT NOT NULL,
    level_en TEXT NOT NULL,
    level_ko TEXT NOT NULL,
    proficiency INTEGER NOT NULL CHECK (proficiency >= 0 AND proficiency <= 100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create resume_publications table
CREATE TABLE IF NOT EXISTS public.resume_publications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    summary_pt TEXT,
    summary_en TEXT,
    summary_ko TEXT,
    url TEXT,
    date DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.resume_experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resume_education ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resume_skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resume_certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resume_languages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resume_publications ENABLE ROW LEVEL SECURITY;

-- Create policies (Public Read)
CREATE POLICY "Allow public read access" ON public.resume_experience FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.resume_education FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.resume_skills FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.resume_certifications FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.resume_languages FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.resume_publications FOR SELECT USING (true);

-- Insert Seed Data
-- Experience
INSERT INTO public.resume_experience (role_pt, role_en, role_ko, company, location_pt, location_en, location_ko, start_date, is_current, description_pt, description_en, description_ko)
VALUES 
(
    'Engenheira de Software Senior', 'Senior Software Engineer', '시니어 소프트웨어 엔지니어',
    'TechFlow Solutions',
    'São Paulo, Brasil', 'São Paulo, Brazil', '상파울루, 브라질',
    '2023-01-01', true,
    '• Liderança técnica de equipe de 5 desenvolvedores.\n• Migração de arquitetura legada para Next.js.\n• Melhoria de 40% na performance do site.',
    '• Technical leadership of a team of 5 developers.\n• Migration of legacy architecture to Next.js.\n• 40% improvement in site performance.',
    '• 5명의 개발자 팀 기술 리더십.\n• 레거시 아키텍처를 Next.js로 마이그레이션.\n• 사이트 성능 40% 향상.'
),
(
    'Desenvolvedora Full Stack', 'Full Stack Developer', '풀스택 개발자',
    'Creative Web',
    'Remoto', 'Remote', '원격',
    '2021-03-01', false,
    '• Desenvolvimento de aplicações web com React e Node.js.\n• Integração com APIs de pagamento e serviços de terceiros.',
    '• Development of web applications using React and Node.js.\n• Integration with payment APIs and third-party services.',
    '• React와 Node.js를 사용한 웹 애플리케이션 개발.\n• 결제 API 및 타사 서비스 통합.',
    '2022-12-31'
);

-- Education
INSERT INTO public.resume_education (degree_pt, degree_en, degree_ko, institution, location_pt, location_en, location_ko, start_date, end_date, is_current)
VALUES 
(
    'Bacharelado em Ciência da Computação', 'B.Sc. Computer Science', '컴퓨터 과학 학사',
    'Universidade de São Paulo (USP)',
    'São Paulo, Brasil', 'São Paulo, Brazil', '상파울루, 브라질',
    '2017-02-01', '2021-12-01', false
);

-- Skills
INSERT INTO public.resume_skills (name, proficiency, category)
VALUES 
('React', 95, 'Frontend'),
('TypeScript', 90, 'Frontend'),
('Node.js', 85, 'Backend'),
('PostgreSQL', 80, 'Backend'),
('Python', 75, 'Backend'),
('AWS', 70, 'DevOps'),
('Docker', 75, 'DevOps'),
('UI/UX Design', 80, 'Design');

-- Certifications
INSERT INTO public.resume_certifications (name, institution, date, url)
VALUES 
('AWS Certified Developer - Associate', 'Amazon Web Services', '2023-06-15', 'https://aws.amazon.com/verification'),
('Meta Frontend Developer Professional Certificate', 'Meta', '2022-11-20', 'https://coursera.org/verify');

-- Languages
INSERT INTO public.resume_languages (language_pt, language_en, language_ko, level_pt, level_en, level_ko, proficiency)
VALUES 
('Português', 'Portuguese', '포르투갈어', 'Nativo', 'Native', '원어민', 100),
('Inglês', 'English', '영어', 'Fluente', 'Fluent', '유창함', 90),
('Coreano', 'Korean', '한국어', 'Intermediário', 'Intermediate', '중급', 50);

-- Publications
INSERT INTO public.resume_publications (title, summary_pt, summary_en, summary_ko, date, url)
VALUES 
(
    'Otimizando Performance em React',
    'Um guia prático sobre técnicas avançadas de otimização de renderização em aplicações React de larga escala.',
    'A practical guide on advanced rendering optimization techniques in large-scale React applications.',
    '대규모 React 애플리케이션의 고급 렌더링 최적화 기술에 대한 실용적인 가이드입니다.',
    '2024-02-10',
    'https://medium.com/stories'
);
