const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const port = process.env.port || 5000;

app.use(cors());

app.use(express.json());

const uri = process.env.ATLAS_URI;
console.log("uri", uri);
const db = mongoose.connection;
mongoose.connect(uri).then(() => {
    db.on('error', console.error.bind(console, "Error connecting to MongoDB"));
    db.once('open', function () {
        console.log('Connected to Database :: MongoDB');
    });
});

// const exercisesRouter = require('./routes/exercises');
// const usersRouter = require('./routes/users');
//
// app.use('/exercises', exercisesRouter);
// app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});