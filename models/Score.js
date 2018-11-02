var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var {ObjectId,String} = Schema.Types;

module.exports.Name = "Scores"
module.exports.Schema = new Schema({
  question:{ type: Schema.Types.ObjectId, ref: require('./Question').Name },
  right:Boolean,
  tag:String
});