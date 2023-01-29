const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const { nanoid } = require('nanoid');

const router = express.Router({ mergeParams: true });

router.use('/auth', require('./auth.routes'));
router.use('/experience', require('./experience.routes'));
router.use('/daw', require('./daw.routes'));
router.use('/workformat', require('./workFormat.routes'));
router.use('/style', require('./style.routes'));
router.use('/album', require('./album.routes'));
router.use('/user', require('./user.routes'));
router.use('/comment', require('./comment.routes'));
router.use('/track', require('./track.routes'));
router.use('/uploadTrack', require('./uploadTrack.routes'));

module.exports = router;
