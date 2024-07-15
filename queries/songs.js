const db = require('../db/dbConfig');

const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM tuner");
        return allSongs;
    } catch (error) {
        return error;
    }
};

const filterSongs = async (order, favoriting) => {
    try {
        let filteredSongs;

        if(order !== undefined && favoriting !== undefined){
            filteredSongs = await db.any("SELECT * FROM tuner WHERE is_favorite=$2 ORDER BY name $1:raw", [order, favoriting]);
            return filteredSongs;
        } else if (order !== undefined) {
            filteredSongs = await db.any("SELECT * FROM tuner ORDER BY name $1:raw", order)
            return filteredSongs;
        } else {
            filteredSongs = await db.any("SELECT * FROM tuner WHERE is_favorite=$1", favoriting)
            return filteredSongs;
        }
    } catch (error) {
        return error;
    }
}

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

const updateSong = async (id, song) => {
    try {
        const updatedSong = await db.one("UPDATE tuner SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *",
            [song.name, song.artist, song.album, song.time, song.is_favorite, id]
        );
        return updatedSong;
    } catch (error) {
        return error;
    }
};

const deleteSong = async (id) => {
    try {
        const deletedSong = await db.one("DELETE FROM tuner WHERE id=$1 RETURNING *", id);
        return deletedSong;
    } catch (error) {
        return error;
    }
};

module.exports = { getAllSongs, getOneSong, createSong, updateSong, deleteSong, filterSongs }