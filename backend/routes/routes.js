const express = require('express');
const router = express.Router();

router.use('/anime', require('./anime'));
router.use('/users', require('./users'));
router.use('/reviews', require('./reviews'));

module.exports = router;
