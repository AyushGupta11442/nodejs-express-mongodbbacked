const express = require("express");
const router = express.Router();

router.get('/' , (req , res , next) => {
    res.status(200).json(
        {
            message : "this is a student get req"
        }
    )
});
router.post('/' , (req , res , next) => {
    res.status(200).json(
        {
            message : "this is a student post req"
        }
    )
});







module.exports = router;