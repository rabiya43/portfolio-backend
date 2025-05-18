const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  type: String,
  media: String
});

module.exports = mongoose.model('Project', projectSchema);