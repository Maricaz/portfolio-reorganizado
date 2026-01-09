-- Recreate books table to match User Story requirements strictly and ensure clean state
DROP TABLE IF EXISTS public.books;

CREATE TABLE public.books (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    language_code TEXT NOT NULL,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    curatorship TEXT,
    synopsis TEXT,
    original_title TEXT,
    translation TEXT,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Seed Data for Books in PT, EN, KO
INSERT INTO public.books (language_code, title, author, curatorship, synopsis, original_title, translation, image_url)
VALUES
-- Portuguese (PT)
('pt', 'A Mulher Ruiva', 'Orhan Pamuk', 'Uma obra intensa que mistura mito e realidade, explorando a relação entre pai e filho com a melancolia característica de Pamuk.', 'Em A mulher ruiva, o vencedor do prêmio Nobel Orhan Pamuk nos leva a uma cidade próxima a Istambul, trinta anos atrás, para contar a história de um jovem de classe média, Cem, que se apaixona por uma mulher misteriosa de cabelos vermelhos. Misturando suspense, mitologia e reflexões sobre a relação entre pais e filhos, o romance explora como o passado molda nosso destino.', 'Kırmızı Saçlı Kadın', 'Alves Calado', 'https://img.usecurling.com/p/300/450?q=red+woman+book'),
('pt', 'Torto Arado', 'Itamar Vieira Junior', 'Essencial para entender o Brasil profundo. Uma narrativa potente sobre terra, ancestralidade e resistência.', 'Nas profundezas do sertão baiano, as irmãs Bibiana e Belonísia encontram uma velha e misteriosa faca na mala guardada sob a cama da avó. Ocorre então um acidente. E para sempre suas vidas estarão ligadas. Uma história de vida e morte, de combate e redenção.', 'Torto Arado', '—', 'https://img.usecurling.com/p/300/450?q=farm+land+book'),

-- English (EN)
('en', 'The Red-Haired Woman', 'Orhan Pamuk', 'An intense work blending myth and reality, exploring the father-son relationship with Pamuk''s characteristic melancholy.', 'In The Red-Haired Woman, Nobel Prize winner Orhan Pamuk takes us to a town near Istanbul thirty years ago to tell the story of a middle-class youth, Cem, who falls in love with a mysterious red-haired woman. Blending suspense, mythology, and reflections on the father-son relationship, the novel explores how the past shapes our destiny.', 'Kırmızı Saçlı Kadın', 'Ekin Oklap', 'https://img.usecurling.com/p/300/450?q=red+woman+book'),
('en', 'Crooked Plow', 'Itamar Vieira Junior', 'Essential for understanding deep Brazil. A potent narrative about land, ancestry, and resistance.', 'Deep in the Brazilian hinterland, sisters Bibiana and Belonísia find an old and mysterious knife in the suitcase kept under their grandmother''s bed. An accident happens. And forever their lives will be linked. A story of life and death, of combat and redemption.', 'Torto Arado', 'Johnny Lorenz', 'https://img.usecurling.com/p/300/450?q=farm+land+book'),

-- Korean (KO)
('ko', '빨강 머리 여인', '오르한 파묵', '신화와 현실을 섞은 강렬한 작품. 파묵 특유의 우울함으로 아버지와 아들의 관계를 탐구합니다.', '노벨상 수상자 오르한 파묵의 이 소설은 이스탄불 근처의 한 마을로 우리를 데려갑니다. 중산층 청년 젬이 신비로운 붉은 머리 여인과 사랑에 빠지는 이야기를 다룹니다. 서스펜스, 신화, 그리고 아버지와 아들의 관계에 대한 성찰을 섞어, 과거가 어떻게 우리의 운명을 형성하는지 탐구합니다.', 'Kırmızı Saçlı Kadın', '이난아', 'https://img.usecurling.com/p/300/450?q=red+woman+book'),
('ko', '굽은 쟁기', '이타마르 비에이라 주니어', '깊은 브라질을 이해하기 위한 필수 도서. 땅, 조상, 그리고 저항에 관한 강력한 서사.', '브라질 오지 깊은 곳, 자매 비비아나와 벨로니시아는 할머니의 침대 밑 가방에서 낡고 신비한 칼을 발견합니다. 사고가 발생하고, 그들의 삶은 영원히 연결됩니다. 삶과 죽음, 투쟁과 구원에 관한 이야기입니다.', 'Torto Arado', '—', 'https://img.usecurling.com/p/300/450?q=farm+land+book');
