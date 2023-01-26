const express = require('express');
const Track = require('../models/Track');
const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
  try {
    const list = await Track.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json({
      message: 'На сервере произошла ошибка... Попробуйте позже...',
    });
  }
});

module.exports = router;
