const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express(); // using express 
var cors = require('cors');

const loginRoute = require('./api/routes/login');
const medicineRoute = require('./api/routes/Medicine');
const alternateRoute = require('./api/routes/Alternate');


mongoose.connect('mongodb+srv://joseph:7371@cluster0.hzsfm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
// to check if the database is connected if not then error displayed
mongoose.connection.on('error',err=>{
    console.log('connection failed');
});

// if connected then connection successful displayed
mongoose.connection.on('connected',connected=>{
    console.log('connection successful');
});

// helps in retrieving data from database as well from the frontend
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// helps in cross connection
app.use(cors())

// Routes
app.use('/login', loginRoute)
app.use('/medicine', medicineRoute)
app.use('/alternate',alternateRoute)


// for error handling (bad url request)
app.use((req,res,next) => {
    res.status(404).json({
        error: "bad request"
    })
})

module.exports = app;