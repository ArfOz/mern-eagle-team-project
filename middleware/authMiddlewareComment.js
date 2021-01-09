const jwt = require("jsonwebtoken");

const authMiddlewareComment = (req, res, next) => {
    //get Token
    const token = req.header("token");
  
    //Return error if token doesn't exist
    if (!token) {
      return res.status(401).json({ msg: "No Token" });
    };
  
        next();
     
    
  };
  
  module.exports = authMiddlewareComment;
  