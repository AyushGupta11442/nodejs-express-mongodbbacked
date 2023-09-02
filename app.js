const express = require("express");

const app = express();
const studentroute = require('./api/routes/student')

app.use('/student' , studentroute)

app.use((req , res , next )=> {
    res.status(200).json(
        {
            message:"app is running in the local host",
        }
    )
    }

);

module.exports = app;