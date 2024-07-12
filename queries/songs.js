const db = require('../db/dbConfig');

const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM tuner");
        return allSongs;
    } catch (error) {
        return error;
    }
};

const getOneSong = async (id) => {
    try {
        const oneSong = await db.one("SELECT * FROM tuner WHERE id=$1", id);
        return oneSong;
    } catch (error) {
        return error;
    }
};

const createSong = async (song) => {
    try {
       const newSong = await db.one("INSERT INTO tuner (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [song.name, song.artist, song.album, song.time, song.is_favorite]
       );
       return newSong;
    } catch (error) {
        return error;
    }
};

module.exports = { getAllSongs, getOneSong, createSong }