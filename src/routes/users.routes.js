const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');
const { catchExceptions } = require('../lib/error-middleware');

router.get('/', catchExceptions(usersController.discoverForm));
router.post('/', catchExceptions(usersController.discover));

module.exports = router;
