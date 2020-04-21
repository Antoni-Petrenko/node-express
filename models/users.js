const fs=require("fs");
const path=require("path");
const dirPath=require('../utility/path');


module.exports = class User {
    constructor({name, surname, eMail}) {
        const date = new Date();
        const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        const num = users.length + 1;
        this.name = name;
        this.surname = surname;
        this.eMail = eMail;
        this.time = time;
        this.num = num;
    }
    save(){
        const p = path.join(dirPath,"data","users.json");

        fs.readFile(p,(err,data)=>{
            let users=[];
            if(!err){
                users=JSON.parse(data)
            }
            console.log(this)
            users.push(this);
            fs.writeFile(p,JSON.stringify(users),(err)=>{
                throw err
            })
        })
    }
    static fetchAll(){
        return users
    }
}
