const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  title: String,
  institution: String,
  duration: String,
  image: String
});

module.exports = mongoose.model('Education', educationSchema);