/**
 * @module Server
 * @description Startpoint of the application
 * @author Nikzzy
 */
const express = require('express');
const bodyParser = require('body-parser');

// Load .env file
require('dotenv').config();

const router = require('./routes/core.router');

const app = express();

// Express settings
app.set('PORT', process.env.PORT || 8000);

// Connect to database
require('./configuration/database.configuration');

// Express middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', router);

app.listen(app.get('PORT'), () => {
    console.log(`Express server is running on http://localhost:${app.get('PORT')}`);
});

