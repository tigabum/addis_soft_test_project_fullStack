const express = require('express')
const router = express.Router()

const genreCtrl = require('../controllers/genre.controller')

//Album routes and handlers
router.get('/genre/list', genreCtrl.getGenresList);

router.post('/genre/create', genreCtrl.createSingleGenre);

module.exports = router