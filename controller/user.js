const User = require("../models").Users;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var mongoose = require('mongoose');
var id = mongoose.Types.ObjectId;

const UserController = {
  register : (req,res) => {
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    var data = req.body;
    data.password = hashedPassword
    data._id= id()
    
      User.create(data,
      function (err, user) {
        if (err) throw err;
        // create a token
        var token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.status(200).send({ auth: true, token: token });
  
      })
  },
  login: (req,res) => {
    User.findOne({email: req.body.email},(err,user)=>{
      if ( err ) throw  err
      else{
        bcrypt.compare(req.body.password,user.password,
          (err,loggedin) => {
              if ( err ) throw  err;
              else{
                if ( loggedin ){
                  var token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                    expiresIn: 86400 // expires in 24 hours
                  });
                  res.status(200).send({ auth: true, token: token });
                } else {
                  res.status(200).send({auth:false});
                }
              }
          })
      }
    })
  }
}

module.exports = UserController