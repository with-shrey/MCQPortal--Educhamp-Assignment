const mongoose = require('mongoose');
const Questions = require('../models').Questions
var id = mongoose.Types.ObjectId;

const ques = [
  {
    _id:id(),
    question:"How many numbers can be formed from 1, 2, 3, 4, 5 (without repetition), when the digit at the unit’s place must be greater than that in the ten’s place?",
    choices:[ "54",
    "60",
    "17",
    "2 × 4!"],
    tag:"Permutation And Combination",
    answer:"60"
  },{
    _id:id(),
    question:"A man has 9 friends, 4 boys and 5 girls. In how many ways can he invite them, if there have to be exactly 3girls in the invitees?",
    choices:["320",
    "160",
    "80",
    "200"],
    tag:"Permutation And Combination",
    answer:"160"
  },{
    _id:id(),
    question:"A five-digit number is formed using digits 1, 3, 5, 7 and 9 without repeating any one of them. What is the sum of all such possible numbers?",
    choices:[ "6666600",
    "6666660",
    "6666666",
    "None of these"],
    tag:"Permutation And Combination",
    answer:"6666600"
  },{
    _id:id(),
    question:"How many numbers can be made with digits 0, 7, 8 which are greater than 0 and less than a million?",
    choices:[
      "496",
      "486",
      "1084",
      "728"
    ],
    tag:"Permutation And Combination",
    answer:"728"
  },
]

mongoose.connect(process.env.MONGO_URI,(err) => {
  if ( err ){
    console.log(err);
    throw err;
  }else{
    Questions.find().exec((err,questions)=>{
      if ( err ){
        throw err;
      }
      if (questions && questions.length === 0 ){
        Questions.create(ques[0]).then(value => {
        
        }).catch(err => {
          console.log(err)
          throw err;
        })
      }
    })
  }
});

