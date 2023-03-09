const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("addis software backend"));

const port = process.env.SERVER_PORT || 4000;

app.listen(port, () => console.log(`Server started on port ${port}`));
