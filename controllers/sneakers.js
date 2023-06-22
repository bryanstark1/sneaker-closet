const Sneaker = require('../models/sneaker');

const index = async (req, res) => {
  const sneakers = await Sneaker.find({});
  res.render('sneakers/index', {sneakers, title: 'Sneakers'})
}

const newSneaker = (req, res) => {
  res.render('sneakers/new', {errorMsg: '', title: 'Add New Sneaker'})
};

const create = async (req, res) => {
  try {
    await Sneaker.create(req.body);
    res.redirect('/sneakers')
  } catch (err) {
    console.log(err);
    res.render('sneakers/new', {errorMsg: err.message, title: 'Add New Sneaker'});
  };
};


module.exports = {
  index,
  new: newSneaker,
  create
}