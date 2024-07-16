const checkSongName = (req,res,next) => {
    if(req.body.name) {
        if(typeof req.body.name === 'string') {
            return next();
        } else {
            res.status(400).json({error: "Song Name must be a string"})
        }
    } else {
        res.status(400).json({error: "Song Name is required"})
    }
};

const checkArtistName = (req, res, next) => {
    if(req.body.artist) {
        if(typeof req.body.artist === 'string') {
            return next();
        } else {
            res.status(400).json({error: "Song Artist must be a string"})
        }
    } else {
        res.status(400).json({error: "Song Artist is required"})
    }
};

const checkGenre = (req, res, next) => {
    if(req.body.genre) {
        if(typeof req.body.genre === 'string') {
            return next();
        } else {
            res.status(400).json({error: "A Genre must be a string"})
        }
    } else {
        res.status(400).json({error: "A genre of is required"})
    }
}

const checkFavorite = (req, res, next) => {
    if( typeof req.body.is_favorite === 'boolean') {
        return next();
    } else {
        res.status(400).json({error: "Song favorite must be a boolean"})
    }
};

module.exports = { checkSongName, checkArtistName, checkGenre, checkFavorite }