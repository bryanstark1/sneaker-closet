const express = require('express');
const router = express.Router();
const sneakersCtrl = require('../controllers/sneakers');

// GET /sneakers
router.get('/', sneakersCtrl.index);

module.exports = router;
