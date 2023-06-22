const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
  model: String,

});

module.exports = mongoose.model('Sneakers', sneakerSchema);