const express = require('express');
const controller = require('../controllers/index');
const router = express.Router();

/* Controladores */

//Home
router.get('/', controller.home);

//Search
router.get('/search', controller.search)

module.exports = router;