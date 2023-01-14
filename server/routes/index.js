const express = require('express');
const router = express.Router({ mergeParams: true });

router.use('/auth', require('./auth.routes'));
router.use('/experience', require('./experience.routes'));
router.use('/daw', require('./daw.routes'));
router.use('/workformat', require('./workFormat.routes'));
router.use('/style', require('./style.routes'));
router.use('/user', require('./user.routes'));
router.use('/comment', require('./comment.routes'));

module.exports = router;
