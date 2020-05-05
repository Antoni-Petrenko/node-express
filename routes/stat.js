const express = require("express");

const router = express.Router();
const jsonParser=express.json();


router.post("/stat",jsonParser,(req,res,next)=>{
    console.log(req.body)
});

module.exports = router;