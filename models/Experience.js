const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: String,
  organization: String,
  year: String
});

module.exports = mongoose.model('Experience', experienceSchema);