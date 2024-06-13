const mongoose= require("mongoose");
var bcrypt = require('bcrypt-nodejs');


const UserSchema=new mongoose.Schema({

     name:String,
     userid:String,
     email:String,
     password:String
});



         
module.exports= new  mongoose.model("user", UserSchema);