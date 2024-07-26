const db = require('../db/dbConfig');

const getAllSongs = async (artist_id) => {
    try {
        const allSongs = await db.any("SELECT * FROM songs WHERE artist_id=$1", artist_id);
        return allSongs;
    } catch (error) {
        return error;
    }
};


const getOneSong = async (id) => {
    try {
        const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
        return oneSong;
    } catch (error) {
        return error;
    }
};

const createSong = async (song) => {
    try {
       const newSong = await db.one(
        "INSERT INTO songs (name, artist, album, genre, time, is_favorite, artist_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [
            song.name,
            song.artist, 
            song.album, 
            song.genre, 
            song.time, 
            song.is_favorite,
            song.artist_id
        ]
       );
       return newSong;
    } catch (error) {
        return error;
    }
};

const updateSong = async (song) => {
    try {
        const updatedSong = await db.one(
            "UPDATE songs SET name=$1, artist=$2, album=$3, genre=$4, time=$5, is_favorite=$6, artist_id=$7 WHERE id=$8 RETURNING *",
            [
                song.name,
                song.artist, 
                song.album, 
                song.genre, 
                song.time, 
                song.is_favorite,
                song.artist_id, 
                song.id
            ]
        );
        return updatedSong;
    } catch (error) {
        return error;
    }
};

const deleteSong = async (id) => {
    try {
        const deletedSong = await db.one("DELETE FROM songs WHERE id=$1 RETURNING *", id);
        return deletedSong;
    } catch (error) {
        return error;
    }
};

module.exports = { getAllSongs, getOneSong, createSong, updateSong, deleteSong}