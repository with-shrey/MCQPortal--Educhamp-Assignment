const mongoose = require('mongoose');
const UserModel = require('./User');
const QuestionModel = require('./Question');
const ScoreModel = require('./Score');

const Models = {
  Users: mongoose.model(UserModel.Name,UserModel.Schema),
  Questions: mongoose.model(QuestionModel.Name,QuestionModel.Schema),
  Scores: mongoose.model(ScoreModel.Name,ScoreModel.Schema),
  mongoose
}

module.exports = Models;
