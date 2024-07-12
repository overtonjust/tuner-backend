// Dependencies
const express = require('express');
const songs = express.Router();
const { getAllSongs, getOneSong, createSong } = require('../queries/songs');
const { checkSongName, checkArtistName, checkFavorite } = require('../validations/checkSongs');

// Read Routes
songs.get('/', async (req, res) => {
    const allSongs = await getAllSongs();
    if(allSongs){
        res.status(200).json(allSongs)      
    } else {
        res.status(500).json({error: "Server Error"})
    }
});

songs.get('/:id', async (req, res) => {
    const { id } = req.params;
    const song = await getOneSong(id)

    if(song) {
        res.status(200).json(song)
    } else {
        res.status(404).json({error: "Song not found"})
    }
});

// Create Routes
songs.post('/', checkSongName, checkArtistName, checkFavorite, async (req, res) => {
    const newSong = await createSong(req.body);
    if(newSong) {
        res.status(200).json(newSong)
    } else {
        res.status(404).json({error: "Something went wrong"})
    }
});

module.exports = songs;