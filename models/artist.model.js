const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    name: {type: String, required: true, minlength: 2, maxlength: 48},
    albums: [{type:Schema.ObjectID, ref: 'Album'}]
})

module.exports = mongoose.model('Artist', artistSchema)