const express = require('express');
const router = express.Router();
const controller = require('../Controllers/AuthController');

require('dotenv').config();

// Auth user
router.post("/", controller.post);

module.exports = router;