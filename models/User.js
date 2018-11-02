var mongoose = require('mongoose');
var Score = require('./Score').Schema;
var Schema = mongoose.Schema;
var {ObjectId,String} = Schema.Types;
module.exports.Name = "Users"
const model = new Schema({
  _id: ObjectId,
  name:String,
  email:String,
  password:String,
  score:[Score]
});
model.index({email: 1}, {unique: true});

module.exports.Schema = model;