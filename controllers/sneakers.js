const Sneaker = require('../models/sneaker');

const index = async (req, res) => {
  const sneakers = await Sneaker.find({});
  res.render('sneakers/index', {
    sneakers,
    title: 'Sneakers'
  })
}

const newSneaker = (req, res) => {
  res.render('sneakers/new', {
    errorMsg: '',
    title: 'Add New Sneaker'
  })
};

const create = async (req, res) => {
  try {
    await Sneaker.create(req.body);
    res.redirect('/sneakers')
  } catch (err) {
    console.log(err);
    res.render('sneakers/new', {
      errorMsg: err.message,
      title: 'Add New Sneaker'
    });
  };
};

const show = (req, res) => {
  Sneaker.findById(req.params.id).then((sneaker) => {
    res.render('sneakers/show', {
      sneaker,
      title: "Sneaker Details"
    });
  });
};

const edit =(req, res) => {
  Sneaker.findById(req.params.id).then((sneaker) => {
    res.render('sneakers/edit', {
      sneaker,
      title: "Edit Sneaker"
    });
  });
};

const update = async (req, res) => {
  try {
    await Sneaker.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.redirect(`/sneakers/${req.params.id}`);
  } catch (err) {
    res.render(`/sneakers/${req.params.id}/edit`, {
      errorMsg: err.message,
      title: 'Edit Sneaker'
    });
  };
};

const deleteSneaker = async (req, res) => {
  try {
    await Sneaker.findByIdAndRemove(req.params.id);
    res.redirect('/sneakers');
  } catch (err) {
    res.render(`/sneakers/${req.params.id}`, {
      errorMsg: err.message,
      title: 'Sneaker Details'
    });
  };
};


module.exports = {
  index,
  new: newSneaker,
  create,
  show,
  edit,
  update,
  delete: deleteSneaker
}