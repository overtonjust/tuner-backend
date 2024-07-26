// Dependencies
const express = require('express');
const songs = express.Router({mergeParams: true});

// Queries
const { 
    getAllSongs,
    getOneSong,
    createSong,
    updateSong,
    deleteSong, 
} = require('../queries/songs');

const {
    getOneArtist,
} = require('../queries/artists');

// Validation
const { 
    checkSongName,
    checkArtistName,
    checkGenre, 
    checkFavorite, 
} = require('../validations/checkSongs');

// Read Routes

/// Read all
songs.get('/', async (req, res) => {
    const { artist_id } = req.params;
    const artist = await getOneArtist(artist_id);
    const songs = await getAllSongs(artist_id);

    if(artist.id) {
        res.status(200).json({...artist, songs});
    } else {
        res.status(500).json({error: "Artist not found or server error"})
    }
});

/// Read one
songs.get('/:id', async (req, res) => {
    const {  artist_id, id } = req.params;
    const artist  = await getOneArtist(artist_id);
    const song = await getOneSong(id);

    if(song) {
        res.status(200).json({...artist, song})
    } else {
        res.status(404).json({error: "Song not found"})
    }
});


// Create Routes
songs.post('/', checkSongName, checkArtistName, checkGenre, checkFavorite, async (req, res) => {
    const { artist_id } = req.params;
    const newSong = await createSong({...req.body, artist_id});

    if(newSong.id) {
        res.status(200).json(newSong)
    } else {
        res.status(404).json({error: "Something went wrong"})
    }
});

// Update Route
songs.put('/:id', checkSongName, checkArtistName, checkGenre, checkFavorite, async (req, res) => {
    const { id, artist_id } = req.params;
    const updatedSong = await updateSong({id, artist_id, ...req.body});
    
    if(updatedSong.id) {
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