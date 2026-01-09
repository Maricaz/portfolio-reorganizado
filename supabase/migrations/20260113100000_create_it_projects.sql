-- Create the it_projects table
CREATE TABLE IF NOT EXISTS public.it_projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT, -- Generic description field as per requirements
    description_pt TEXT, -- Localized description for PT
    description_en TEXT, -- Localized description for EN
    description_ko TEXT, -- Localized description for KO
    tags TEXT[] DEFAULT '{}',
    link TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.it_projects ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON public.it_projects
    FOR SELECT USING (true);

-- Insert sample data to populate the page
INSERT INTO public.it_projects (title, description_pt, description_en, description_ko, tags, link)
VALUES 
(
    'Portfolio V2', 
    'Meu site pessoal reorganizado com foco em SEO e internacionalização. Construído com React, Vite e Supabase.', 
    'My reorganized personal website focused on SEO and internationalization. Built with React, Vite and Supabase.', 
    'SEO와 국제화에 중점을 둔 내 재구성된 개인 웹사이트. React, Vite 및 Supabase로 구축되었습니다.',
    ARRAY['React', 'TypeScript', 'Supabase', 'TailwindCSS', 'Vite'], 
    'https://github.com/mariana/portfolio'
),
(
    'Task Manager API', 
    'API RESTful robusta para gerenciamento de tarefas e equipes. Inclui autenticação JWT e documentação Swagger.', 
    'Robust RESTful API for task and team management. Includes JWT authentication and Swagger documentation.', 
    '작업 및 팀 관리를 위한 강력한 RESTful API. JWT 인증 및 Swagger 문서가 포함되어 있습니다.',
    ARRAY['Node.js', 'Express', 'PostgreSQL', 'Docker', 'Jest'], 
    '#'
),
(
    'Finance Dashboard', 
    'Dashboard financeiro interativo com gráficos em tempo real e relatórios exportáveis.', 
    'Interactive financial dashboard with real-time charts and exportable reports.', 
    '실시간 차트와 내보낼 수 있는 보고서가 있는 대화형 금융 대시보드.',
    ARRAY['Next.js', 'Recharts', 'Prisma', 'Stripe'], 
    'https://demo-finance-dashboard.com'
),
(
    'Mobile Health App', 
    'Aplicativo móvel para monitoramento de saúde e exercícios físicos com integração a wearables.', 
    'Mobile app for health and fitness tracking with wearable integration.', 
    '웨어러블 통합 기능이 있는 건강 및 피트니스 추적용 모바일 앱.',
    ARRAY['React Native', 'Redux', 'Firebase', 'HealthKit'], 
    'https://play.google.com/store/apps/details?id=com.health.app'
);
