const express = require('express');
const multer = require('multer');
const path = require('path');
const { nanoid } = require('nanoid');
const cors = require('cors');
const auth = require('../middleware/auth.middleware');

const router = express.Router({ mergeParams: true });

router.use(cors());
router.use(express.static('public'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const destPath = path.join(__dirname, '..', 'public', 'tracks');
    cb(null, destPath);
  },
  filename: function (req, file, cb) {
    cb(null, nanoid() + '.mp3');
  },
});

const upload = multer({ storage: storage });

router.post('/', auth, upload.single('file'), async (req, res) => {
  try {
    res.send(req.file.filename);
  } catch (error) {
    res.status(500).json({
      message: 'На сервере произошла ошибка... Попробуйте позже...',
    });
  }
});

router.delete('/:trackLink', async (req, res) => {
  const { trackLink } = req.body;
  console.log('req removedTrack', req.body);
  console.log('trackLink', trackLink);
});

module.exports = router;
