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

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     const destPath = path.join(__dirname, 'public', 'tracks');
//     cb(null, destPath);
//   },
//   filename: function (req, file, cb) {
//     console.log('req.body in filename: ', req.body);
//     cb(null, nanoid() + '.mp3');
//   },
// });

// const upload = multer({ storage: storage });

// router.post('/uploadTrack', upload.single('file'), (req, res) => {
//   console.log('file: ', req.file.filename);
//   console.log('title: ', req.body.title);
//   res.send('uploaded');
// });

module.exports = router;
