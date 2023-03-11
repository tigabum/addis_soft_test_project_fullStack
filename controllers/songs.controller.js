exports.createSingleSong = (req, res) => {
    return res.send('songs create')
}

exports.updateSingleSong = (req, res) => {
    return res.send('songs update')
}

exports.getSongsList = (req, res) => {
    return res.send('songs list')
}

exports.deleteSingleSong = () => {
    return res.send('songs delete')
}

// module.default  = {
//     createSingleSong,
//     updateSingleSong,
//     getSongsList,
//     deleteSingleSong
// }