const express = require("express");
const connectDB = require("./config/db");
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const songsRoute = require('./routes/songs.route')
const genreRoute = require('./routes/genre.route')
const artistRoute = require('./routes/artist.route')
const albumRoute = require('./routes/album.route')
const cors = require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("addis software backend"));

// mount routes
app.use('/', songsRoute)
app.use('/', genreRoute)
app.use('/', artistRoute)
app.use('/', albumRoute)

const port = process.env.SERVER_PORT || 4000;

app.listen(port, () => console.log(`Server started on port ${port}`));
