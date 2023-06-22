const express = require('express');
const router = express.Router();
const sneakersCtrl = require('../controllers/sneakers');

// GET /sneakers
router.get('/', sneakersCtrl.index);
// GET /sneakers/new
router.get('/new', sneakersCtrl.new);
// GET /sneakers/:id
router.get('/:id', sneakersCtrl.show);
// POST /sneakers
router.post('/', sneakersCtrl.create);

module.exports = router;
