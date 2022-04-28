const express = require("express");
const path = __dirname + '/server/views/';
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();

// app.use(express.static(path));

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded());

const db = require("./server/config/mongoose");

// simple route
// app.get('/', function (req,res) {
//     res.sendFile(path + "index.html");
// });

// use express router
app.use('/', require('./server/routes'));
//require("./server/routes/index")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});