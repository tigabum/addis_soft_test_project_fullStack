const mongoose = require('mongoose')
const Schema = mongoose.Schema

const genreSchema = new Schema({
    name: {type: String, required: true, minlength: 2, maxlength: 48}
})

module.exports = mongoose.model('Genre', genreSchema)