


const bcrypt= require("bcryptjs");
const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken");



const userRegistrationSave=async(req, res)=>{
    const {name, userid, email, password, repassword}=req.body;
    if (password!=repassword)
        {
            res.json({message:"Password does not match!"})
        }
     else
     {
      

        bcrypt.genSalt(10, function (err, Salt) {
 
            // The bcrypt is used for encrypting password.
            bcrypt.hash(password, Salt, function (err, hash) {
         
                if (err) {
                    return console.log('Cannot encrypt');
                }
         
                hashedPassword = hash;
                const user= new UserModel({
                    name:name,
                    userid:userid,
                    email:email,
                    password:hash
                 });
        
                 user.save();
            res.json({message:"User Succesfully Registered!"});
                console.log(hash);
            })
        })
     }   
}


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
  };


const userCheck=async(req, res)=>{
    let email=req.body.email;
    let password=req.body.password;

     let myemail= await UserModel.find({email:email});
     console.log(myemail);
     if (myemail.length<1)
        {
          res.send({"message":"Invalid Email!"})
        }
        else 
        {
            const match = await bcrypt.compare(password, myemail[0].password);               
            const accessToken = jwt.sign(JSON.stringify(myemail[0]), process.env.TOKEN_SECRET)
            if(match){
                res.json({ accessToken: accessToken, name:myemail[0].name, email:myemail[0].email});
            } else {
                res.json({ message: "Invalid Credentials" });
            }
            
       }
           
        }
   



module.exports={
    userRegistrationSave,
    userCheck
}