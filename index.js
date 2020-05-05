const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

//Routers
const adminRouters = require("./routes/admin");
const shopRouters = require("./routes/shop");
const notFoundRouter=require('./routes/404');
const stat=require("./routes/stat");

//Utility
const rootDir = require("./utility/path");



const app = express();

app.set("view engine", "pug"); //add view engine

app.use(bodyParser.urlencoded({ extended: false })); // add parser to incoming http requests body

app.use(express.static(path.join(rootDir, "public"))); // share public folder

app.use(shopRouters); //add shop router

app.use("/admin", adminRouters.router); //add admin router

app.use(stat)

app.use(notFoundRouter);  //404 page

app.listen("80");
