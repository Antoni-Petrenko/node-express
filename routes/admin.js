const express = require("express");

const path = require("path");

const rootDir = require("../utility/path");

const router = express.Router();

const products = [];

router.get("/add-message", (req, res, next) => {
  res.render('add-product')
});

router.post("/post-message", (req, res, next) => {
  const date=new Date();
  const time=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  req.body.num = products.length + 1;
  req.body.time=time;
  products.push(req.body);
  res.redirect("/");
});

exports.router = router;
exports.products = products;
