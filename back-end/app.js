var express = require('express');
var app = express();
var Tanoura = require('./models/tanoura');
var mongoose = require('mongoose');
var dbConfig = require('./config/database');
var tanourasRouter = require('./routers/tanouras');


var db = dbConfig.database;

mongoose.connect(db, { useNewUrlParser: true });
var connection = mongoose.connection;

connection.on('connected', () => {
    console.log('connected to database');
});

connection.on('error', (err) => {
    console.log('error in database connection');
});

app.use('/tanouras', tanourasRouter);






app.all('*',(req,res)=>{
    res.status(404).json({
        message: "Page not found"
    });
});


var port = 3000;
app.listen(port, () => {
    console.log('server is running on port ' + port);
});