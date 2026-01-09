-- Seed IT Projects mentioned in User Story
INSERT INTO public.it_projects (title, description_pt, description_en, tags, link, created_at)
VALUES 
(
  'Automação de planilhas escolares',
  'Sistema automatizado para gestão de notas e presenças, simplificando a vida dos professores e garantindo precisão nos dados escolares.',
  'Automated system for grade and attendance management, simplifying teachers lives and ensuring school data accuracy.',
  ARRAY['Python', 'Excel API', 'Automation'],
  '#',
  NOW() - INTERVAL '1 day'
),
(
  'Game Número',
  'Um jogo interativo de adivinhação de números desenvolvido para ensinar lógica de programação para iniciantes de forma lúdica.',
  'An interactive number guessing game designed to teach programming logic to beginners in a playful way.',
  ARRAY['React', 'TypeScript', 'Game Dev'],
  '#',
  NOW() - INTERVAL '2 days'
),
(
  'Amigo Secreto',
  'Aplicação web para sorteio de amigo secreto com envio automático de e-mails, perfeita para festas de fim de ano.',
  'Web application for Secret Santa drawing with automatic email sending, perfect for holiday parties.',
  ARRAY['Next.js', 'Node.js', 'Email API'],
  '#',
  NOW() - INTERVAL '3 days'
);

-- Seed Books mentioned in User Story (implied) and generic ones
INSERT INTO public.books (title, author, category, rating, review_pt, review_en, review_ko, image_url, created_at)
VALUES
(
  'Sul da Fronteira, Oeste do Sol',
  'Haruki Murakami',
  'Ficção',
  5,
  'Uma narrativa envolvente sobre amor, perda e as complexidades da vida adulta. Murakami nos leva a uma jornada introspectiva inesquecível.',
  'A compelling narrative about love, loss, and the complexities of adult life. Murakami takes us on an unforgettable introspective journey.',
  '사랑, 상실, 성인 생활의 복잡성에 대한 설득력 있는 이야기입니다. 무라카미는 우리를 잊을 수 없는 성찰의 여행으로 안내합니다.',
  'https://img.usecurling.com/p/200/300?q=south%20of%20the%20border%20west%20of%20the%20sun%20book%20cover',
  NOW() - INTERVAL '1 day'
),
(
  'O Apanhador no Campo de Centeio',
  'J.D. Salinger',
  'Clássico',
  4,
  'Um retrato cru e honesto da adolescência e da alienação. Holden Caulfield continua sendo um dos personagens mais marcantes da literatura.',
  'A raw and honest portrait of adolescence and alienation. Holden Caulfield remains one of literatures most striking characters.',
  '청소년기와 소외에 대한 가공되지 않은 솔직한 초상화. 홀든 콜필드는 문학에서 가장 인상적인 캐릭터 중 하나로 남아 있습니다.',
  'https://img.usecurling.com/p/200/300?q=catcher%20in%20the%20rye%20book%20cover',
  NOW() - INTERVAL '2 days'
),
(
  '1984',
  'George Orwell',
  'Distopia',
  5,
  'Uma obra visionária que explora os perigos do totalitarismo e da vigilância em massa. Mais atual do que nunca.',
  'A visionary work exploring the dangers of totalitarianism and mass surveillance. More relevant than ever.',
  '전체주의와 대량 감시의 위험성을 탐구하는 선견지명이 있는 작품입니다. 그 어느 때보다 관련성이 높습니다.',
  'https://img.usecurling.com/p/200/300?q=1984%20book%20cover',
  NOW() - INTERVAL '3 days'
),
(
  'Dom Casmurro',
  'Machado de Assis',
  'Literatura Brasileira',
  5,
  'A genialidade de Machado em questionar a verdade e o ciúme. Capitu traiu ou não traiu? Uma obra-prima da ambiguidade.',
  'Machados genius in questioning truth and jealousy. Did Capitu cheat or not? A masterpiece of ambiguity.',
  '진실과 질투에 의문을 제기하는 마차도의 천재성. 카피투는 바람을 피웠을까, 아닐까? 모호함의 걸작.',
  'https://img.usecurling.com/p/200/300?q=dom%20casmurro%20book%20cover',
  NOW() - INTERVAL '4 days'
),
(
  'A Hora da Estrela',
  'Clarice Lispector',
  'Literatura Brasileira',
  5,
  'A história de Macabéa, uma anti-heroína que reflete a invisibilidade social. A escrita de Clarice é cortante e profundamente filosófica.',
  'The story of Macabéa, an anti-heroine reflecting social invisibility. Clarices writing is cutting and deeply philosophical.',
  '사회적 비가시성을 반영하는 반영웅 마카베아의 이야기. 클라리스의 글은 날카롭고 깊이 철학적입니다.',
  'https://img.usecurling.com/p/200/300?q=hour%20of%20the%20star%20book%20cover',
  NOW() - INTERVAL '5 days'
);
