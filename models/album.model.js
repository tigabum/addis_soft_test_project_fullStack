const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    name:{type: String, required: true, minlength: 2, maxlength: 48},
    artist:{type:Schema.ObjectId, ref:'Artist', required: true},
    genre:[{type:Schema.ObjectId, ref:'Genre', required: true}]
})

module.exports = mongoose.model('Album', albumSchema)