const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminRouters = require("./routes/admin");
const shopRouters = require("./routes/shop");

const rootDir=require('./utility/path');

 

const app = express();

app.set('view engine', "pug");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(rootDir,'public')))

app.use(shopRouters);

app.use("/admin", adminRouters.router);

app.use((req, res, next) => {
    res.status(404).render('404')
  });
app.listen("3300");
