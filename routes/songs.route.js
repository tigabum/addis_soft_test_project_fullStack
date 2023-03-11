const express = require('express')
const router = express.Router()

const songsCtrl = require('../controllers/songs.controller')

router.get('/songs/list', songsCtrl.getSongsList)
router.put('/songs/update/:id', songsCtrl.updateSingleSong)
router.post('/songs/create', songsCtrl.createSingleSong)
router.delete('/songs/delete/:id', songsCtrl.deleteSingleSong)

module.exports = router;