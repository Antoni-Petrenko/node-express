const path = require("path");

const express = require("express");

const router = express.Router();

const {products}=require('./admin');

router.get("/", (req, res, next) => {
  
  res.render('shop', {loged:products,docTitle:"Loged Users"})
});

module.exports = router;
