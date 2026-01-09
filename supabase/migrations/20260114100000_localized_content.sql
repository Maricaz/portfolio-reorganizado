-- Add title_ko column to it_projects
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS title_ko TEXT;

-- Add title_ko column to books
ALTER TABLE public.books ADD COLUMN IF NOT EXISTS title_ko TEXT;

-- Update existing IT Projects with Korean titles
UPDATE public.it_projects
SET title_ko = CASE
    WHEN title = 'Automação de planilhas escolares' THEN '학교 스프레드시트 자동화'
    WHEN title = 'Game Número' THEN '숫자 맞추기 게임'
    WHEN title = 'Amigo Secreto' THEN '비밀 산타'
    ELSE title
END
WHERE title_ko IS NULL;

-- Insert missing IT Projects for user story (5 total required)
-- 4. Form Integrations
INSERT INTO public.it_projects (title, title_ko, description_pt, description_en, description_ko, tags, link, created_at)
SELECT
    'Integração de Formulários',
    '폼 통합 시스템',
    'Sistema centralizado para coleta e processamento de dados de formulários diversos, garantindo integridade e acessibilidade.',
    'Centralized system for collecting and processing data from various forms, ensuring integrity and accessibility.',
    '다양한 양식의 데이터를 수집하고 처리하여 무결성과 접근성을 보장하는 중앙 집중식 시스템입니다.',
    ARRAY['Node.js', 'PostgreSQL', 'API Integration'],
    '#',
    NOW() - INTERVAL '4 days'
WHERE NOT EXISTS (
    SELECT 1 FROM public.it_projects WHERE title = 'Integração de Formulários'
);

-- 5. Nutritionist Website
INSERT INTO public.it_projects (title, title_ko, description_pt, description_en, description_ko, tags, link, created_at)
SELECT
    'Site de Nutricionista',
    '영양사 웹사이트',
    'Plataforma web moderna para nutricionistas, com agendamento online, blog de receitas e área do cliente.',
    'Modern web platform for nutritionists, with online scheduling, recipe blog, and client area.',
    '온라인 예약, 레시피 블로그 및 고객 영역을 갖춘 영양사를 위한 현대적인 웹 플랫폼입니다.',
    ARRAY['React', 'Tailwind', 'Supabase'],
    '#',
    NOW() - INTERVAL '5 days'
WHERE NOT EXISTS (
    SELECT 1 FROM public.it_projects WHERE title = 'Site de Nutricionista'
);

-- Update Books with Korean Titles
UPDATE public.books
SET title_ko = CASE
    WHEN title = 'Sul da Fronteira, Oeste do Sol' THEN '국경의 남쪽, 태양의 서쪽'
    WHEN title = 'O Apanhador no Campo de Centeio' THEN '호밀밭의 파수꾼'
    WHEN title = '1984' THEN '1984'
    WHEN title = 'Dom Casmurro' THEN '돔 카스무후'
    WHEN title = 'A Hora da Estrela' THEN '별의 시간'
    ELSE title
END
WHERE title_ko IS NULL;
