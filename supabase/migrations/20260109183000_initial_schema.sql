-- Create Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description_pt TEXT NOT NULL,
  description_en TEXT NOT NULL,
  description_ko TEXT NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  image_url TEXT NOT NULL,
  demo_url TEXT,
  github_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create Books Table
CREATE TABLE IF NOT EXISTS books (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  category TEXT NOT NULL,
  rating INTEGER NOT NULL DEFAULT 0,
  review_pt TEXT NOT NULL,
  review_en TEXT NOT NULL,
  review_ko TEXT NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create Experience Table
CREATE TABLE IF NOT EXISTS experience (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  role_pt TEXT NOT NULL,
  role_en TEXT NOT NULL,
  role_ko TEXT NOT NULL,
  company TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('work', 'education')),
  start_date DATE NOT NULL,
  end_date DATE,
  description_pt TEXT NOT NULL,
  description_en TEXT NOT NULL,
  description_ko TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create Music Tracks Table
CREATE TABLE IF NOT EXISTS music_tracks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  artist TEXT NOT NULL,
  deezer_id TEXT NOT NULL,
  lyrics_pt TEXT,
  lyrics_en TEXT,
  lyrics_ko TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Seed Data for Projects
INSERT INTO projects (title, description_pt, description_en, description_ko, tags, image_url, demo_url, github_url) VALUES
('E-Commerce Dashboard', 'Um painel administrativo completo para gestão de vendas.', 'A complete administrative dashboard for sales management.', '판매 관리를 위한 완전한 관리 대시보드입니다.', ARRAY['React', 'TypeScript', 'Supabase'], 'https://img.usecurling.com/p/600/400?q=dashboard', 'https://example.com', 'https://github.com'),
('AI Image Generator', 'Geração de imagens usando IA.', 'Image generation using AI.', 'AI를 사용한 이미지 생성.', ARRAY['Python', 'React', 'OpenAI'], 'https://img.usecurling.com/p/600/400?q=artificial%20intelligence', 'https://example.com', 'https://github.com'),
('Portfolio V1', 'Primeira versão do meu portfólio.', 'First version of my portfolio.', '내 포트폴리오의 첫 번째 버전.', ARRAY['HTML', 'CSS', 'JS'], 'https://img.usecurling.com/p/600/400?q=website', 'https://example.com', 'https://github.com');

-- Seed Data for Books
INSERT INTO books (title, author, category, rating, review_pt, review_en, review_ko, image_url) VALUES
('Clean Code', 'Robert C. Martin', 'Tech', 5, 'Essencial para qualquer desenvolvedor.', 'Essential for any developer.', '모든 개발자에게 필수적입니다.', 'https://img.usecurling.com/p/300/450?q=book%20cover'),
('Sapiens', 'Yuval Noah Harari', 'History', 5, 'Uma breve história da humanidade.', 'A brief history of humankind.', '인류의 간략한 역사.', 'https://img.usecurling.com/p/300/450?q=history%20book'),
('The Pragmatic Programmer', 'Andrew Hunt', 'Tech', 4, 'Dicas práticas para programação.', 'Practical tips for programming.', '프로그래밍을 위한 실용적인 팁.', 'https://img.usecurling.com/p/300/450?q=coding%20book');

-- Seed Data for Experience
INSERT INTO experience (role_pt, role_en, role_ko, company, type, start_date, end_date, description_pt, description_en, description_ko) VALUES
('Engenheiro de Software Sênior', 'Senior Software Engineer', '수석 소프트웨어 엔지니어', 'Tech Corp', 'work', '2023-01-01', NULL, 'Liderança técnica e arquitetura.', 'Technical leadership and architecture.', '기술 리더십 및 아키텍처.'),
('Desenvolvedor Frontend', 'Frontend Developer', '프론트엔드 개발자', 'Web Agency', 'work', '2020-03-01', '2022-12-31', 'Desenvolvimento de interfaces React.', 'React interface development.', 'React 인터페이스 개발.'),
('Ciência da Computação', 'Computer Science', '컴퓨터 과학', 'University', 'education', '2016-01-01', '2019-12-31', 'Bacharelado.', 'Bachelor degree.', '학사 학위.');

-- Seed Data for Music
INSERT INTO music_tracks (title, artist, deezer_id, lyrics_pt, lyrics_en, lyrics_ko) VALUES
('Midnight Coding', 'Dev Beats', '123456', 'Codando a noite toda...', 'Coding all night long...', '밤새 코딩 중...'),
('Bug Fix Blues', 'The Debuggers', '654321', 'Onde está esse erro?', 'Where is this bug?', '이 버그는 어디에 있나요?');
