const fs=require("fs");
const path=require("path");
const dirPath=require('../utility/path');
const p=path.join(dirPath,'data','data.json');

exports.User = class {
  constructor({ name, surname, eMail }) {
    const date = new Date();
    this.name = name;
    this.surname = surname;
    this.eMail = eMail;
    this.time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
  save() {
      fs.readFile(p,(err,fileContent)=>{
          let users=[];
          if(!err){
              users=JSON.parse(fileContent)
          }
          users.push(this);
          fs.writeFile(p,JSON.stringify(users),(err)=>{
                console.log(err)
          });
      })
  }
  static getUsers(callBack){
    fs.readFile(p,(err,fileContent)=>{
        if(err){
           callBack([])
        }
        else{
            callBack(JSON.parse(fileContent));
        }
      })
      
  }
};
