

const User=require('../models/users');


exports.getAddUser = (req, res, next) => {
  res.render("add-user");  
};

exports.postUsers = (req, res, next) => {
  const logUser = new User(req.body);
  logUser.save();
  
  res.json(JSON.stringify({status:"ok"}))
};

exports.getUsersList = (req, res, next) => {
  res.render("users-list", { loged: User.fetchAll(), docTitle: "Loged Users" });
};
