\c tuner_dev;

INSERT INTO artists (name, record_label, is_active) VALUES
('bbno$', 'Independent' ,true),
('Connor Price', 'Independent' ,true),
('Good Kid', 'Independent' ,true),
('The Rare Occasions', 'Independent' ,true),
('Dance Gavin Dance', 'Rise Records' ,true),
('Lewie G', 'Independent' ,false),
('Stray Kids', 'JYP Entertainment' ,true),
('BTS', 'Universal Music Group' ,true),
('Snail''s House', 'Youth Composer Association' ,true);


INSERT INTO songs (name, artist, album, genre, time, is_favorite, artist_id) VALUES
('It Boy', 'bbno$', null, 'RAP', '2:26', true, 1), -- bbno$
('nursery', 'bbno$', 'recess', 'RAP', '2:27', true, 1),
('seven', 'bbno$', 'recess', 'RAP', '3:19', true, 1),
('Not A Beanie', 'Connor Price & bbno$', null, 'RAP', '2:17', true, 2), -- Connor price
('Overnight', 'Connor Price & Tommy Royale','Spin The Globe 2', 'rap', '2:11', true, 2),
('Violet', 'Connor Price & Killa','Spin The Globe', 'rap', '2:03', true, 2),
('GOLDEN GOOSE', 'Connor Price',null , 'rap', '2:23', false, 2),
('Buddy', 'Connor Price & Hoodie Allen', null , 'rap', '1:58', true, 2),
('Premier Inn', 'Good Kid','Good kid 4', 'rock', '3:33', true, 3), -- Good Kid  
('Mimi''sDelivery Service', 'Good Kid','Mimi''s Delivery Service', 'rock', '2:59', false, 3),
('From the Start', 'Good Kid','From the Start', 'rock', '2:31', true, 3),
('Notion', 'The Rare Occasions', null, 'rock', '3:16', true, 4), -- The Rare Occasions
('Origami', 'The Rare Occasions', null, 'rock', '2:55', false, 4), 
('Darling, The Plantes', 'The Rare Occasions', null, 'rock', '3:08', true, 4), 
('Loans', 'The Rare Occasions','Futureproof', 'rock', '3:20', false, 4), 
('Ember', 'Dance Gavin Dance', 'Jackpot juicer', 'rock', '3:47', false, 5), -- Dance Gavin Dance
('Betrayed By The Game', 'Dance Gavin Dance', 'Mothership', 'rock', '3:11', true, 5),
('Frozen One', 'Dance Gavin Dance', 'Mothership', 'rock', '2:49', true, 5),
('We Own the Night', 'Dance Gavin Dance', 'Instant Gratification', 'rock', '3:26', true, 5),
('Wherever We Are Now', 'Lewie G','Cassette Beasts OST', 'video game', '3:47', true, 6), -- Lewie G
('Shot in The Dark', 'Lewie G','Cassette Beasts OST', 'video game', '3:56', false, 6),
('Same Old Story', 'Lewie G','Cassette Beasts OST', 'video game', '4:22', false, 6),
('Super Bowl', 'Stray Kids','5-STAR', 'K-pop', '3:04', false, 7), -- Stray Kids
('Thunderous', 'Stray Kids','NOEASY', 'K-pop', '3:04', true, 7),
('Back Door', 'Stray Kids','IN LIFE', 'K-pop', '3:10', true, 7),
('CIRCUS', 'Stray Kids','CIRCUS', 'K-pop', '3:15', true, 7),
('RUN', 'BTS','Young Forever', 'K-pop', '3:57', true, 8), -- BTS
('ON', 'BTS','Map of the Soul: 7', 'K-pop', '4:07', true, 8),
('Black Swan', 'BTS','Map of the Soul: 7', 'K-pop', '3:19', false, 8),
('Friends', 'BTS','Map of the Soul: 7', 'K-pop', '3:20', false, 8),
('Hot Milk', 'Snail''s House','Ordinary Songs 2','electric', '4:07', false, 9), -- Snail's House
('Pixelize', 'Snail''s House','Pixelize', 'electric', '3:31', false, 9), 
('gemini', 'Snail''s House','Lumi', 'electric', '4:17', true, 9), 
('Flash Drive', 'Snail''s House','Pixelize II', 'electric', '3:30', true, 9); 
