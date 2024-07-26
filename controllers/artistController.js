// Dependencies
const express = require('express');
const artists = express.Router();
const songsController = require('../controllers/songController')

// Queries
const { 
    getAllArtists,
    getOneArtist,
    createArtist,
    updateArtist,
    deleteArtist,
} = require('../queries/artists');


artists.use('/:artist_id/songs', songsController);

artists.get('/', async (req,res) => {
    const allArtists = await getAllArtists();

    if(allArtists[0]) {
        res.status(200).json(allArtists)
    } else {
        res.status(500).json({error: "Server error"})
    }
});

artists.get('/:id', async (req, res) => {
    const { id } = req.params;
    const artist = await getOneArtist(id);

    if(artist.id) {
        res.status(200).json(artist)
    } else {
        res.status(404).json({error: "Artist not found"})
    }
});

artists.post('/', async (req, res) => {
    const newArtist = await createArtist(req.body);

    if(newArtist.id) {
        res.status(200).json(newArtist)
    } else {
        res.status(404).json({error: "Something went wrong"})
    }
});

artists.put('/:id', async (req,res) => {
    const { id } = req.params;
    const updatedArtist = await updateArtist(id, req.body);

    if(updateArtist.id) {
        res.status(200).json(updatedArtist)
    } else {
        res.status(404).json({error: "Artist not found"})
    }
});

artists.delete('/:id', async (req,res) => {
    const { id } = req.params;
    const deletedArtist = await deleteArtist(id);

    if(deletedArtist.id){
        res.status(200).json(deletedArtist)
    } else {
        res.status(404).json({ error: "Artist not found"})
    }
});

module.exports = artists;
