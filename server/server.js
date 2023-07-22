// imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes prefix
app.use("/",require("./routes/routes"));

//start server
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
