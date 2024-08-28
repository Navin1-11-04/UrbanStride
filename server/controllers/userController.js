const User = require('../models/userModel');
const bcrypt = require('bcrypt');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const jwtToken = process.env.JWT_TOKEN;

exports.createUser = async (req , res) =>{
    const {username ,email,password} = req.body;
    const existingUser = await User.findOne({email});

    if(existingUser){
      return res.status(409).json("Email already exists");
    }
    try{
        const user = new User(
            {username,email,password}
        );
    await user.save();
    res.status(200).json("user created successfully");
  }
  catch(err){  
    res.status(404).json("Cannot create user :" + err);
  }
}

exports.login = async (req,res)=>{
  const {email , password } = req.body;
  try{
  const user = await User.findOne({email});
  if(!user){
    return res.status(404).json("Invalid Username");
  }

  const isMatch = await bcrypt.compare(password,user.password);

  if(!isMatch){
    return res.status(404).json("Invalid Password");
  }
  const token = jwt.sign({user_id : user._id,name:user.username,email:user.email},jwtToken,{expiresIn:"1h"});
    res.status(200).json(token);
  }catch(err){
      console.error(err);
  }
}

exports.getUser = async (req , res)=>{
    try {
        const users = await User.find();
        res.send(users);
      } catch (err) {
        res.status(404).json("No user found :" + err);
      }
}