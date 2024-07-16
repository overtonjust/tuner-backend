// Dependencies
const express = require('express');
const songs = express.Router();
const { getAllSongs, getOneSong, createSong, updateSong, deleteSong, filterSongs } = require('../queries/songs');
const { checkSongName, checkArtistName, checkGenre, checkFavorite } = require('../validations/checkSongs');

// Read Routes

/// Read all
songs.get('/', async (req, res) => {
    let songsList;
    const filters = req.query;
    const order = filters.order;
    const favoriting = filters.is_favorite;
    
    if(order || favoriting !== undefined) {
        songsList = await filterSongs(order, favoriting)
        res.status(200).json(songsList)
    } else if(order === undefined && favoriting === undefined) {
        songsList = await getAllSongs();
        res.status(200).json(songsList)
    } else {
        res.status(500).json({error: "Server Error"})
    }
});

/// Read one
songs.get('/:id', async (req, res) => {
    const { id } = req.params;
    const song = await getOneSong(id)

    if(song.id) {
        res.status(200).json(song)
    } else {
        res.status(404).json({error: "Song not found"})
    }
});



// Create Routes
songs.post('/', checkSongName, checkArtistName, checkGenre, checkFavorite, async (req, res) => {
    const newSong = await createSong(req.body);
    if(newSong.id) {
        res.status(200).json(newSong)
    } else {
        res.status(404).json({error: "Something went wrong"})
    }
});

// Update Route
songs.put('/:id', checkSongName, checkArtistName, checkGenre, checkFavorite, async (req, res) => {
    const { id } = req.params;
    const songFound = await getOneSong(id);
    if(songFound.id) {
        const updatedSong = await updateSong(id, req.body);
        res.status(200).json(updatedSong);
    } else {
        res.status(404).json({error: "Song not found"})
    }
});

// Delete route
songs.delete('/:id',  async (req,res) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);

    if(deletedSong.id) {
        res.status(200).json({message: "Song successfully deleted"})
    } else {
        res.status(404).json({error: "Song not found"})
    }
});



module.exports = songs;