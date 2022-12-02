const express = require('express');
const router = express.Router({ mergeParams: true });

router.use('/auth', require('./auth.routes'));
router.use('/daw', require('./daw.routes'));
router.use('/format', require('./format.routes'));
router.use('/style', require('./style.routes'));
router.use('/user', require('./user.routes'));

module.exports = router;
