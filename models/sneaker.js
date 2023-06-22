const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
  model: String,
  name: String,
  color: String,
  year: Date,
  retail: Number,
  image: String,
  sku: String
});

module.exports = mongoose.model('Sneakers', sneakerSchema);