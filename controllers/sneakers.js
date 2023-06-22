const Sneaker = require('../models/sneaker');

const index = async (req, res) => {
  const sneakers = await Sneaker.find({});
  res.render('sneakers/index', {sneakers, title: 'Sneakers'})
}


module.exports = {
  index
}