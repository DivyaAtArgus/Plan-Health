const app = require("./server");


// const bodyParser = require('body-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//database configs
// require("./mongo/mongo_connection");

//routes
const userRoutes = require('./route/user');
app.use(bodyParser.json());

// app.use(bodyParser.json());
