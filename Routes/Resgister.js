const express = require('express');
const router = express.Router();
const controller = require('../Controllers/RegisterController');

// Register User
router.post('/', controller.post);

module.exports = router;