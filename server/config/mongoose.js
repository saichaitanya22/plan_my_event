const mongoose = require('mongoose');

const uri =  "mongodb+srv://kkviks:mongodb@cluster0.3p90o.mongodb.net/myFirstDatabase";
// const uri =  "mongodb+srv://root:1234@plan-my-event.pctap.mongodb.net/MyFirstDatabase";
// const uri = 'mongodb://localhost:27017/test';
const db = mongoose.connection;

mongoose.connect(uri).then(() => {
    db.on('error', console.error.bind(console, "Error connecting to MongoDB"));
    db.once('open', function () {
        console.log('Connected to Database :: MongoDB');
    });
});




module.exports = db;