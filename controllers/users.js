const {User}=require('../models/user');

exports.getAddUser = (req, res, next) => {
  res.render("add-user");  
};

exports.postUsers = (req, res, next) => {
  const user=new User(req.body);
  user.save();
  console.log(user)
};

exports.getUsersList = (req, res, next) => {
 User.getUsers((users)=>{
  res.render("users-list", { loged: users, docTitle: "Loged Users" });
  })
  
};
