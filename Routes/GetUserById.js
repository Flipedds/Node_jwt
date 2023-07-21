const express = require('express');
const router = express.Router();
const User = require('../models/User');
const controller = require('../Controllers/getUserByIdController');

const checkToken = require('../Middlewares/checkToken');

// Private rote
router.get('/:id', checkToken, controller.get);

module.exports = router;