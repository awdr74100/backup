const express = require('express');
const controller = require('../controllers/index');

const router = express.Router();

router.get('/', controller.renderHomePage);

router.get('/about', controller.renderAboutPage);

module.exports = router;
