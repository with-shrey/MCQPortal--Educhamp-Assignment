var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var {ObjectId,String,Array} = Schema.Types;

module.exports.Name = "Questions"
module.exports.Schema = new Schema({
  _id: ObjectId,
  question:String,
  choices:Array,
  tag:String,
  answer:String
});