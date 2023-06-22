const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
  model: {
    type: String
  },
  name: {
    type: String
  },
  color: {
    type: String
  },
  release: {
    type: Date
  },
  retail: {
    type: Number
  },
  image: {
    type: String
  },
  sku: {
    type: String
  }
});

module.exports = mongoose.model('Sneakers', sneakerSchema);