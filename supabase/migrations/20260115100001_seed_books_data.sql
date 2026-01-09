-- Clear existing data to ensure clean state for seeding (using DELETE instead of TRUNCATE for better compatibility)
DELETE FROM public.books;

-- Seed data for Portuguese and English
INSERT INTO public.books (title, author, curatorship, synopsis, original_title, translation, language, image_url, category, rating, created_at)
VALUES 
-- Book 1: A Mulher Ruiva (PT)
(
  'A Mulher Ruiva', 
  'Orhan Pamuk', 
  'Uma obra intensa que mistura mito e realidade, explorando a relação entre pai e filho com a melancolia característica de Pamuk.',
  'Em A mulher ruiva, o vencedor do prêmio Nobel Orhan Pamuk nos leva a uma cidade próxima a Istambul, trinta anos atrás, para contar a história de um jovem de classe média, Cem, que se apaixona por uma mulher misteriosa de cabelos vermelhos. Misturando suspense, mitologia e reflexões sobre a relação entre pais e filhos, o romance explora como o passado molda nosso destino.', 
  'Kırmızı Saçlı Kadın',
  'Alves Calado',
  'pt', 
  'https://img.usecurling.com/p/300/450?q=red+woman+book', 
  'Romance',
  5,
  NOW()
),
-- Book 1: The Red-Haired Woman (EN)
(
  'The Red-Haired Woman', 
  'Orhan Pamuk', 
  'An intense work blending myth and reality, exploring the father-son relationship with Pamuk''s characteristic melancholy.',
  'In The Red-Haired Woman, Nobel Prize winner Orhan Pamuk takes us to a town near Istanbul thirty years ago to tell the story of a middle-class youth, Cem, who falls in love with a mysterious red-haired woman. Blending suspense, mythology, and reflections on the father-son relationship, the novel explores how the past shapes our destiny.', 
  'Kırmızı Saçlı Kadın',
  'Ekin Oklap',
  'en', 
  'https://img.usecurling.com/p/300/450?q=red+woman+book', 
  'Novel',
  5,
  NOW()
),
-- Book 2: Torto Arado (PT)
(
  'Torto Arado', 
  'Itamar Vieira Junior', 
  'Essencial para entender o Brasil profundo. Uma narrativa potente sobre terra, ancestralidade e resistência.',
  'Nas profundezas do sertão baiano, as irmãs Bibiana e Belonísia encontram uma velha e misteriosa faca na mala guardada sob a cama da avó. Ocorre então um acidente. E para sempre suas vidas estarão ligadas. Uma história de vida e morte, de combate e redenção.', 
  'Torto Arado',
  '—',
  'pt', 
  'https://img.usecurling.com/p/300/450?q=farm+land+book', 
  'Ficção',
  5,
  NOW() - INTERVAL '1 day'
),
-- Book 2: Crooked Plow (EN)
(
  'Crooked Plow', 
  'Itamar Vieira Junior', 
  'Essential for understanding deep Brazil. A potent narrative about land, ancestry, and resistance.',
  'Deep in the Brazilian hinterland, sisters Bibiana and Belonísia find an old and mysterious knife in the suitcase kept under their grandmother''s bed. An accident happens. And forever their lives will be linked. A story of life and death, of combat and redemption.', 
  'Torto Arado',
  'Johnny Lorenz',
  'en', 
  'https://img.usecurling.com/p/300/450?q=farm+land+book', 
  'Fiction',
  5,
  NOW() - INTERVAL '1 day'
),
-- Book 3: 1984 (PT)
(
  '1984', 
  'George Orwell', 
  'A distopia definitiva. Assustadoramente atual em tempos de vigilância e manipulação da verdade.',
  'Winston Smith vive em Londres, sob a vigilância onipresente do Grande Irmão. Em um mundo onde a verdade é fabricada e o pensamento é crime, ele ousa sonhar com a liberdade e o amor, desafiando o poder totalitário do Partido.', 
  '1984',
  'Heloisa Jahn',
  'pt', 
  'https://img.usecurling.com/p/300/450?q=dystopia+book', 
  'Distopia',
  5,
  NOW() - INTERVAL '2 days'
),
-- Book 3: 1984 (EN)
(
  '1984', 
  'George Orwell', 
  'The definitive dystopia. Frighteningly current in times of surveillance and truth manipulation.',
  'Winston Smith lives in London, under the omnipresent surveillance of Big Brother. In a world where truth is manufactured and thought is a crime, he dares to dream of freedom and love, challenging the totalitarian power of the Party.', 
  '1984',
  '—',
  'en', 
  'https://img.usecurling.com/p/300/450?q=dystopia+book', 
  'Dystopia',
  5,
  NOW() - INTERVAL '2 days'
);
