const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtToken = process.env.JWT_TOKEN;

const auth = (req,res,next) =>{
    const token = req.header("Authorization").split(" ")[1];
    if(!token) {
        return res.status(401).json({error : "No Token,authorization denied"});
    }
    try{
        const decoded = jwt.verify(token,jwtToken);
        req.user = decoded;
        next();
    }catch(err){
        res.status(401).json({error : "Token is not valid"});
    }
};

module.exports = auth;