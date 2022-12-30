const express = require('express');
const router = express.Router();

router.use('/', require('./users.routes'));

module.exports = router;
