const express=require("express");

const route=express.Router();

const {notFound}=require('../controllers/404')

route.use(notFound);

module.exports=route