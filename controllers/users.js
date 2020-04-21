const fs=require("fs");
const path=require("path");
const dirPath=require('../utility/path');

const products=[];
exports.getAddUser = (req, res, next) => {
  res.render("add-user");  
};

exports.postUsers = (req, res, next) => {
  const date = new Date();
  const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  req.body.num = products.length + 1;
  req.body.time = time;
  products.push(req.body);
};

exports.getUsersList = (req, res, next) => {
  res.render("users-list", { loged: products, docTitle: "Loged Users" });
};
