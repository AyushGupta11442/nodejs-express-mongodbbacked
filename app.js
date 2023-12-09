const express = require("express");

const app = express();
const userroute = require('./api/routes/user');

const mongoose = require("mongoose");


mongoose.connect('mongodb+srv://ayush:ayush11442@cluster0.zth6gbh.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.on('error' , err=>{
    console.log('connection fails');
});
mongoose.connection.on('connected' , con=>{
    console.log('connected with database');
});

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);

app.use('/signup' , userroute);
Z
app.use((req , res , next )=> {
    res.status(404).json(
        {
            error:"Bad request",
        }
    )
    }
);

module.exports = app;