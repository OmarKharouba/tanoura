// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Database configuration
var dbConfig = require('./config/database');

// Routers
var tanourasRouter = require('./routers/tanouras');

// Initializing the app
var app = express();

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database path
var db = dbConfig.database;

// Avoid deprecated mongoose method
mongoose.set('useFindAndModify', false);

// Connecting to the database
mongoose.connect(db, { useNewUrlParser: true });
var connection = mongoose.connection;

connection.on('connected', () => {
    console.log('connected to database');
});

connection.on('error', (err) => {
    console.log('error in database connection');
});

// Tanouras router
app.use('/tanouras', tanourasRouter);


// Handling requests to non-existing routes
app.all('*', (req, res) => {
    res.status(404).json({
        message: "Page not found"
    });
});

// Starting the server
var port = 3000;
app.listen(port, () => {
    console.log('server is running on port ' + port);
});