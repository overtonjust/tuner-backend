DROP DATABASE IF EXISTS tuner_dev;
CREATE DATABASE tuner_dev;

\c tuner_dev;

DROP TABLE IF EXISTS artists;

CREATE TABLE artists (
  id SERIAL PRIMARY KEY,
  name VARCHAR(20),
  record_label TEXT,
  is_active BOOLEAN
);

DROP TABLE IF EXISTS songs;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    genre Text NOT NULL,
    time TEXT,
    is_favorite BOOLEAN,
    artist_id INTEGER REFERENCES artists (id) 
    ON DELETE CASCADE
);
