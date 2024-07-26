const db = require('../db/dbConfig');

const getAllArtists = async () => {
    try {
        const allArtists = await db.any('SELECT * FROM artists');
        return allArtists;
    } catch (error) {
        return error;
    }
};

const getOneArtist = async (id) => {
    try {
        const artistFound = await db.one('SELECT * FROM artists WHERE id=$1', id)
        return artistFound;
    } catch (error) {
        return error;
    }
};

const createArtist = async (artist) => {
    try {
        const newArtist = await db.one("INSERT INTO artists (name, record_label, is_active) VALUES($1, $2, $3) RETURNING *", 
            [
                artist.name,
                artist.record_label,
                artist.is_active
            ]
        );
        return newArtist;
    } catch (error) {
        return error;
    }
};

const updateArtist = async (id, artist) => {
    try {
        const updatedArtist = await db.one(
            'UPDATE artists SET name=$1, record_label=$2, is_active=$3 WHERE id=$4 RETURNING *', 
            [
                artist.name,
                artist.record_label,
                artist.is_active,
                id
            ]
        );
        return updateArtist;
    } catch (error) {
        return error;
    }
};

const deleteArtist = async (id) => {
    try {
        const deletedArtist = await db.one("DELETE FROM artists WHERE id=$1 RETURNING *", id);
        return deletedArtist;
    } catch (error) {
        return error;
    }
}

module.exports = { getAllArtists, getOneArtist, createArtist, updateArtist, deleteArtist }