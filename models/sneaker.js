const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// To be populated with data from https://thesneakerdatabase.com/sneakers

const sneakerSchema = new Schema({
  model: {
    type: String,
    default: 'Model'
  },
  name: {
    type: String,
    default: 'Name'
  },
  color: {
    type: String,
    default: 'Colorway'
  },
  release: {
    type: Date,
    default: '4/1/1985'
  },
  retail: {
    type: Number,
    default: '0'
  },
  image: {
    type: String, 
    default: 'https://img.freepik.com/premium-vector/outline-cool-sneakers-shoes-sneaker-outline-drawing-vector-sneakers-drawn-sketch-style_681139-284.jpg'
  },
  sku: {
    type: String,
    default: 'SKU#'
  }
});

module.exports = mongoose.model('Sneakers', sneakerSchema);