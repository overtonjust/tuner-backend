// Dependencies
const express = require('express');
const cors = require('cors');
const songController = require('./controllers/songController');

const app = express();


// Middleware
app.use(cors());
app.use(express.json());
app.use('/songs', songController);

app.get('/', (req,res) => {
    res.send('Welcome to Tuner');
});

app.get('*', (req, res) => {
    res.status(404).json({error: 'Path not found'});
});

module.exports = app;