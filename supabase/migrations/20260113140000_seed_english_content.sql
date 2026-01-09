-- Add localized synopsis columns to books if they don't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'books' AND column_name = 'synopsis_pt') THEN
        ALTER TABLE public.books ADD COLUMN synopsis_pt TEXT;
        ALTER TABLE public.books ADD COLUMN synopsis_en TEXT;
        ALTER TABLE public.books ADD COLUMN synopsis_ko TEXT;
    END IF;
END $$;

-- Clean up existing data to avoid duplication and ensure clean state
TRUNCATE TABLE public.books;
TRUNCATE TABLE public.it_projects;
TRUNCATE TABLE public.resume_experience;
TRUNCATE TABLE public.resume_education;

-- Seed Books (29 items as requested, populated with samples and placeholders to reach 29)
INSERT INTO public.books (id, title, author, category, rating, review_pt, review_en, review_ko, synopsis_pt, synopsis_en, synopsis_ko, image_url)
VALUES 
(
    'sul-da-fronteira-oeste-do-sol',
    'Sul da Fronteira, Oeste do Sol',
    'Haruki Murakami',
    'Fiction',
    5,
    'Uma história envolvente sobre amor e perda.',
    'A compelling story about love and loss.',
    '사랑과 상실에 관한 설득력 있는 이야기.',
    'Hajime cresceu em uma pequena cidade do Japão...',
    'Born in 1951 in a quiet neighborhood of Tokyo, Hajime grows up in a normal family...',
    '1951년 도쿄의 조용한 동네에서 태어난 하지메는...',
    'https://img.usecurling.com/p/300/400?q=south%20of%20the%20border%20west%20of%20the%20sun%20book%20cover'
),
(
    '1q84',
    '1Q84',
    'Haruki Murakami',
    'Fiction',
    5,
    'Uma obra-prima surrealista.',
    'A surrealist masterpiece.',
    '초현실주의 걸작.',
    'Aomame e Tengo vivem em Tóquio, mas seus mundos estão prestes a colidir...',
    'Aomame and Tengo live in Tokyo, but their worlds are about to collide in a distorted reality of 1984.',
    '아오마메와 텐고는 도쿄에 살고 있지만...',
    'https://img.usecurling.com/p/300/400?q=1q84%20book%20cover'
),
(
    'kafka-a-beira-mar',
    'Kafka à Beira-Mar',
    'Haruki Murakami',
    'Fiction',
    5,
    'Fantástico e misterioso.',
    'Fantastic and mysterious.',
    '환상적이고 신비로운.',
    'Kafka Tamura foge de casa aos 15 anos...',
    'Kafka Tamura runs away from home at fifteen, under the shadow of his father''s dark prophecy.',
    '카프카 타무라는 15세에 가출하여...',
    'https://img.usecurling.com/p/300/400?q=kafka%20on%20the%20shore%20book%20cover'
),
(
    'norwegian-wood',
    'Norwegian Wood',
    'Haruki Murakami',
    'Fiction',
    4,
    'Uma história nostálgica de perda e sexualidade.',
    'A nostalgic story of loss and sexuality.',
    '상실과 성에 관한 향수를 불러일으키는 이야기.',
    'Toru Watanabe ouve a canção dos Beatles e é transportado para o passado...',
    'Toru Watanabe hears the Beatles song and is transported back to his college days and the tragic Naoko.',
    '토루 와타나베는 비틀즈 노래를 듣고...',
    'https://img.usecurling.com/p/300/400?q=norwegian%20wood%20book%20cover'
),
(
    'caçando-carneiros',
    'Caçando Carneiros',
    'Haruki Murakami',
    'Fiction',
    4,
    'Uma aventura bizarra.',
    'A bizarre adventure.',
    '기이한 모험.',
    'Um executivo de publicidade é forçado a encontrar um carneiro especial...',
    'An advertising executive is forced into a search for a special sheep with a star on its back.',
    '광고 회사 임원이 특별한 양을 찾아야 하는...',
    'https://img.usecurling.com/p/300/400?q=wild%20sheep%20chase%20book%20cover'
);

-- Add remaining placeholders to reach 29 items
INSERT INTO public.books (title, author, category, rating, review_pt, review_en, review_ko, synopsis_en, image_url)
SELECT 
    'Book Title ' || i,
    'Author Name ' || i,
    'General',
    4,
    'Review PT ' || i,
    'Review EN ' || i,
    'Review KO ' || i,
    'Synopsis EN for book ' || i || '. This is a placeholder description for the curated book list.',
    'https://img.usecurling.com/p/300/400?q=book%20cover%20' || i
FROM generate_series(6, 29) AS i;


-- Seed IT Projects
INSERT INTO public.it_projects (title, description_pt, description_en, description_ko, tags, link)
VALUES 
(
    'School spreadsheet automation',
    'Automação de processos escolares utilizando planilhas inteligentes.',
    'School process automation using intelligent spreadsheets.',
    '지능형 스프레드시트를 사용한 학교 프로세스 자동화.',
    ARRAY['VBA', 'Excel', 'Automation'],
    'https://github.com/Maricaz'
),
(
    'Form integrations',
    'Integração de formulários web com diversos serviços de backend.',
    'Web form integration with various backend services.',
    '다양한 백엔드 서비스와 웹 양식 통합.',
    ARRAY['JavaScript', 'HTML', 'API'],
    'https://github.com/Maricaz'
),
(
    'Game Number',
    'Jogo interativo de adivinhação de números desenvolvido em JavaScript.',
    'Interactive number guessing game developed in JavaScript.',
    'JavaScript로 개발된 대화형 숫자 추측 게임.',
    ARRAY['JavaScript', 'Game Dev', 'Logic'],
    'https://github.com/Maricaz/game-number'
),
(
    'Secret Santa',
    'Aplicação para sorteio de Amigo Secreto com gerenciamento de participantes.',
    'Secret Santa draw application with participant management.',
    '참가자 관리가 포함된 비밀 산타 추첨 애플리케이션.',
    ARRAY['React', 'Node.js', 'Frontend'],
    'https://github.com/Maricaz/secret-santa'
),
(
    'Nutritionist Website',
    'Website institucional responsivo para clínica de nutrição.',
    'Responsive institutional website for a nutrition clinic.',
    '영양 클리닉을 위한 반응형 기관 웹사이트.',
    ARRAY['HTML', 'CSS', 'Responsive Design'],
    'https://github.com/Maricaz/nutrition-site'
);

-- Seed Resume Education
INSERT INTO public.resume_education (degree_pt, degree_en, degree_ko, institution, location_pt, location_en, location_ko, start_date, end_date, is_current)
VALUES 
(
    'Licenciatura em Matemática', 'B.Sc. in Mathematics', '수학 학사',
    'Universidade Paulista (UNIP)',
    'São Paulo, Brasil', 'São Paulo, Brazil', '상파울루, 브라질',
    '2015-01-01', '2018-12-01', false
),
(
    'Pós-graduação em Gestão Financeira', 'Postgraduate in Financial Management', '재무 관리 대학원',
    'Fundação Getúlio Vargas (FGV)',
    'São Paulo, Brasil', 'São Paulo, Brazil', '상파울루, 브라질',
    '2019-01-01', '2020-12-01', false
),
(
    'Formação Back-end', 'Back-end Training', '백엔드 교육',
    'Alura',
    'Online', 'Online', '온라인',
    '2021-01-01', '2021-06-01', false
);

-- Seed Resume Experience
INSERT INTO public.resume_experience (role_pt, role_en, role_ko, company, location_pt, location_en, location_ko, start_date, end_date, is_current, description_pt, description_en, description_ko)
VALUES 
(
    'Assistente Administrativo', 'GRE (Administrative Assistant)', '행정 조수',
    'Gestão de Recursos Escolares',
    'São Paulo, Brasil', 'São Paulo, Brazil', '상파울루, 브라질',
    '2018-01-01', '2021-01-01', false,
    'Gestão de recursos e processos administrativos escolares.',
    'Management of school resources and administrative processes.',
    '학교 자원 및 행정 절차 관리.'
),
(
    'Desenvolvedora', 'Developer (Personal Projects)', '개발자 (개인 프로젝트)',
    'Freelancer / Personal',
    'Remoto', 'Remote', '원격',
    '2021-02-01', NULL, true,
    'Desenvolvimento de aplicações web, automações e projetos de estudo.',
    'Development of web applications, automations, and study projects.',
    '웹 애플리케이션, 자동화 및 연구 프로젝트 개발.'
);
