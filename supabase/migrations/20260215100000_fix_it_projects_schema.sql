CREATE TABLE IF NOT EXISTS public.it_projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS title TEXT NOT NULL DEFAULT '';
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS title_ko TEXT;
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS description_en TEXT;
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS description_pt TEXT;
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS description_ko TEXT;
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS github_url TEXT;
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS live_url TEXT;
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS demo_url TEXT;
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS link TEXT;
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS featured BOOLEAN DEFAULT false;
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS tags TEXT[] DEFAULT '{}';
ALTER TABLE public.it_projects ADD COLUMN IF NOT EXISTS category TEXT;

ALTER TABLE public.it_projects ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read access" ON public.it_projects;
CREATE POLICY "Allow public read access" ON public.it_projects FOR SELECT USING (true);

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM public.it_projects) THEN
        INSERT INTO public.it_projects (title, description_en, description_pt, description_ko, image_url, github_url, live_url, featured, tags, category)
        VALUES 
        (
            'Portfolio V2', 
            'My reorganized personal website focused on SEO and internationalization. Built with React, Vite and Supabase.', 
            'Meu site pessoal reorganizado com foco em SEO e internacionalização. Construído com React, Vite e Supabase.', 
            'SEO와 국제화에 중점을 둔 내 재구성된 개인 웹사이트. React, Vite 및 Supabase로 구축되었습니다.',
            'https://img.usecurling.com/p/600/400?q=portfolio&color=purple', 
            'https://github.com/mariana/portfolio', 
            'https://portfolio-reorganizado.goskip.app', 
            true, 
            ARRAY['React', 'TypeScript', 'Supabase', 'TailwindCSS'], 
            'Web'
        ),
        (
            'Task Manager API', 
            'Robust RESTful API for task and team management. Includes JWT authentication and Swagger documentation.', 
            'API RESTful robusta para gerenciamento de tarefas e equipes. Inclui autenticação JWT e documentação Swagger.', 
            '작업 및 팀 관리를 위한 강력한 RESTful API. JWT 인증 및 Swagger 문서가 포함되어 있습니다.',
            'https://img.usecurling.com/p/600/400?q=code&color=blue', 
            'https://github.com/mariana/task-manager', 
            NULL, 
            false, 
            ARRAY['Node.js', 'Express', 'PostgreSQL', 'Docker'], 
            'Backend'
        ),
        (
            'Finance Dashboard', 
            'Interactive financial dashboard with real-time charts and exportable reports.', 
            'Dashboard financeiro interativo com gráficos em tempo real e relatórios exportáveis.', 
            '실시간 차트와 내보낼 수 있는 보고서가 있는 대화형 금융 대시보드.',
            'https://img.usecurling.com/p/600/400?q=finance&color=green', 
            'https://github.com/mariana/finance-dashboard', 
            'https://demo-finance.com', 
            true, 
            ARRAY['Next.js', 'Recharts', 'Prisma', 'Stripe'], 
            'Web'
        ),
        (
            'Mobile Health App', 
            'Mobile app for health and fitness tracking with wearable integration.', 
            'Aplicativo móvel para monitoramento de saúde e exercícios físicos com integração a wearables.', 
            '웨어러블 통합 기능이 있는 건강 및 피트니스 추적용 모바일 앱.',
            'https://img.usecurling.com/p/600/400?q=mobile%20app&color=orange', 
            NULL, 
            'https://play.google.com/store/apps/details?id=com.health.app', 
            false, 
            ARRAY['React Native', 'Redux', 'Firebase'], 
            'Mobile'
        );
    END IF;
END $$;
