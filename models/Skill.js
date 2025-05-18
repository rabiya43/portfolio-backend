const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: String,
  level: String,
  img: String
});

module.exports = mongoose.model('Skill', skillSchema);