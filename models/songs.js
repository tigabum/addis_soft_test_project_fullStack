const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let songsSchema = new Schema({
  title: String,
  Artist: String,
  Album: String,
  Genre: String,
});

module.exports = mongoose.model("Songs", songsSchema);
