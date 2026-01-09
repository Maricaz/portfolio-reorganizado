-- Add language column to books table
ALTER TABLE public.books ADD COLUMN IF NOT EXISTS language TEXT DEFAULT 'pt';
ALTER TABLE public.books ADD COLUMN IF NOT EXISTS synopsis TEXT;

-- Update existing books to have a default language if null
UPDATE public.books SET language = 'pt' WHERE language IS NULL;

-- Seed data for Portuguese and English as requested
INSERT INTO public.books (title, author, synopsis, language, image_url, category, rating)
VALUES 
(
  'A Mulher Ruiva', 
  'Orhan Pamuk', 
  'Em A mulher ruiva, o vencedor do prêmio Nobel Orhan Pamuk nos leva a uma cidade próxima a Istambul, trinta anos atrás, para contar a história de um jovem de classe média, Cem, que se apaixona por uma mulher misteriosa de cabelos vermelhos. Misturando suspense, mitologia e reflexões sobre a relação entre pais e filhos, o romance explora como o passado molda nosso destino.', 
  'pt', 
  'https://img.usecurling.com/p/300/450?q=A+Mulher+Ruiva+book+cover', 
  'Romance',
  5
),
(
  'The Red-Haired Woman', 
  'Orhan Pamuk', 
  'In The Red-Haired Woman, Nobel Prize winner Orhan Pamuk takes us to a town near Istanbul thirty years ago to tell the story of a middle-class youth, Cem, who falls in love with a mysterious red-haired woman. Blending suspense, mythology, and reflections on the father-son relationship, the novel explores how the past shapes our destiny.', 
  'en', 
  'https://img.usecurling.com/p/300/450?q=The+Red-Haired+Woman+book+cover', 
  'Novel',
  5
),
(
  'Torto Arado', 
  'Itamar Vieira Junior', 
  'Nas profundezas do sertão baiano, as irmãs Bibiana e Belonísia encontram uma velha e misteriosa faca na mala guardada sob a cama da avó. Ocorre então um acidente. E para sempre suas vidas estarão ligadas. Uma história de vida e morte, de combate e redenção.', 
  'pt', 
  'https://img.usecurling.com/p/300/450?q=Torto+Arado+book+cover', 
  'Ficção',
  5
),
(
  'Crooked Plow', 
  'Itamar Vieira Junior', 
  'Deep in the Brazilian hinterland, sisters Bibiana and Belonísia find an old and mysterious knife in the suitcase kept under their grandmother''s bed. An accident happens. And forever their lives will be linked. A story of life and death, of combat and redemption.', 
  'en', 
  'https://img.usecurling.com/p/300/450?q=Crooked+Plow+book+cover', 
  'Fiction',
  5
),
(
  '1984', 
  'George Orwell', 
  'Winston Smith vive em Londres, sob a vigilância onipresente do Grande Irmão. Em um mundo onde a verdade é fabricada e o pensamento é crime, ele ousa sonhar com a liberdade e o amor, desafiando o poder totalitário do Partido.', 
  'pt', 
  'https://img.usecurling.com/p/300/450?q=1984+book+cover', 
  'Distopia',
  5
),
(
  '1984', 
  'George Orwell', 
  'Winston Smith lives in London, under the omnipresent surveillance of Big Brother. In a world where truth is manufactured and thought is a crime, he dares to dream of freedom and love, challenging the totalitarian power of the Party.', 
  'en', 
  'https://img.usecurling.com/p/300/450?q=1984+book+cover', 
  'Dystopia',
  5
);
