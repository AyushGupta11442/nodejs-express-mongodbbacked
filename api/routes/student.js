const express = require("express");
const router = express.Router();
const studentschema = require('../modals/studentmodel');
const mongoose = require('mongoose');



router.get('/', (req, res, next) => {
    res.status(200).json(
        {
            message: "this is a student get req"
        }
    )
});
router.post('/', (req, res, next) => {
    const student = new studentschema({
        _id: mongoose.Schema.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.bodyphone,
        gender: req.body.gender,

    });

    student.save().then((result) => {
        console.log(result);
        res.status(200).json({
            message: "successfull added"
        });
    }).catch(err => {console.log(err);res.status(200).json({
        eroor:err
    })}
    )


});







module.exports = router;