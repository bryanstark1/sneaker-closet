const express = require('express');
const router = express.Router();
const sneakersCtrl = require('../controllers/sneakers');

// GET /sneakers
router.get('/', sneakersCtrl.index);
// GET /sneakers/new
router.get('/new', sneakersCtrl.new);
// GET /sneakers/:id
router.get('/:id', sneakersCtrl.show);
// GET /sneakers/:id/edit
router.get('/:id/edit', sneakersCtrl.edit);
// POST /sneakers
router.post('/', sneakersCtrl.create);
// PUT /sneakers/:id
router.put('/:id', sneakersCtrl.update);
// DELETE /sneakers/:id
router.delete('/:id', sneakersCtrl.delete);


module.exports = router;
