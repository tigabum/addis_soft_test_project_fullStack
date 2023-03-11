const express = require('express')
const router = express.Router()

const albumsCtrl = require('../controllers/album.controller')

//Album routes and handlers
router.get('/album/list', albumsCtrl.getAlbumsList);

router.post('/album/create', albumsCtrl.createSingleAlbum);

module.exports = router