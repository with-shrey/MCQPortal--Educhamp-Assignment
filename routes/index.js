var express = require('express');
var jwt = require('jsonwebtoken');
var async = require('async');
const _ = require('lodash');
var router = express.Router();
var Question = require('../models').Questions;
var User = require('../models').Users;
var Score = require('../models').Scores;
/* GET users listing. */
router.use('/', require('./users'));

router.get('/questions', (req,res)=> {
  Question.find(function ( err,questions ) {
    if ( err ) {
      console.error(err);
    }
    else{
      res.json(questions);
    }
  })
});
router.post('/submit',(req,res) => {
  var decoded = jwt.verify( req.token, process.env.JWT_SECRET );
  User.findById(decoded.id,(err,user) => {
    if ( err ) next(err)
    else{
      if ( user ){
        async.every(req.body,(submittion,callback) => {
          Question.findById(submittion.question,(err,question) => {
            if ( err ) throw err;
            else {
              if ( question ){
                const score = new Score({
                  question:question._id,
                  tag:question.tag,
                  right:req.body.answer == question.answer
                })
                user.score.push(score)
              }
            }
            callback(null);
          })
        })
        user.save((err) => {
          if ( err ){
            throw err
          } else {
            res.send({success : true, stat:  _.chain(user.score)
                .groupBy("tag").map((score,tag) => {
                  const l = _.filter(score,'right').length;
                  return { tag,correct: l, wrong: score.length - l }
                }).value()})
          }
        })
       
        
      }else{
        res.send({success:false,auth:false})
      }
     
    }
  })
})
router.use((err,req,res,next) => {
  console.error(err);
})

module.exports = router;
