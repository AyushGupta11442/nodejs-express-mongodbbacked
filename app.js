const express = require("express");

const app = express();
const studentroute = require('./api/routes/student');
const facultyroute = require('./api/routes/faculty');

const mongoose = require("mongoose");


mongoose.connect('mongodb+srv://ayush:Test1234@cluster0.zth6gbh.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.on('error' , err=>{
    console.log('connection fails');
});
mongoose.connection.on('connected' , con=>{
    console.log('connected with database');
});


const bodyparse = require('body-parser');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);








app.use('/student' , studentroute);
app.use('/faculty' , facultyroute);

app.use((req , res , next )=> {
    res.status(404).json(
        {
            error:"Bad request",
        }
    )
    }

);

module.exports = app;