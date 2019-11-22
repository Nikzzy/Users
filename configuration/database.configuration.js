/**
 * @module DatabaseConfiguration
 * @description Database connection with Mongoose
 * @author Nikzzy
 */
const mongoose = require('mongoose');

mongoose.
    connect('mongodb://127.0.0.1:27017/', {
        dbName: 'Nikzzy',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((mongoose) => {
        console.log(`Connected to local MongoDB Server`);
    })
    .catch((err) => {
        console.log(`Connection error: ${err}`);
    });
