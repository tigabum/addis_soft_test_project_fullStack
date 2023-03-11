const express = require('express')
const router = express.Router()

const artistCtrl = require('../controllers/artist.controller')

//Album routes and handlers
router.get('/artist/list', artistCtrl.getArtistsList);

router.post('/artist/create', artistCtrl.createSingleArtist);

module.exports = router