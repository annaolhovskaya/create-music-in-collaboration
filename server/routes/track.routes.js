const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth.middleware');
const Track = require('../models/Track');
const { generateTrackData } = require('../utils/helpers');
const router = express.Router({ mergeParams: true });

router.get('/', auth, async (req, res) => {
  try {
    const list = await Track.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json({
      message: 'На сервере произошла ошибка... Попробуйте позже...',
    });
  }
});

router.post('/', auth, [
  check('title', 'Обязательно для заполнения').exists(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: 'INVALID_DATA',
            code: 400,
            errors: errors.array(),
          },
        });
      }

      const newTrack = await Track.create({
        ...generateTrackData(),
        ...req.body,
      });
      res.status(201).send(newTrack);
    } catch (error) {
      res.status(500).json({
        message: 'На сервере произошла ошибка... Попробуйте позже...',
      });
    }
  },
]);

router.patch('/:trackId', auth, async (req, res) => {
  try {
    const { trackId } = req.params;
    const updatedTrack = await Track.findByIdAndUpdate(trackId, req.body, {
      new: true,
    });
    res.status(200).send(updatedTrack);
  } catch (error) {
    res.status(500).json({
      message: 'На сервере произошла ошибка... Попробуйте позже...',
    });
  }
});

router.delete('/:trackId', auth, async (req, res) => {
  try {
    const { trackId } = req.params;
    const removedTrack = await Track.findById(trackId);
    if (removedTrack.userId.toString() === req.user._id) {
      await removedTrack.remove();
      return res.status(200).send(null);
    }
  } catch (error) {
    res.status(500).json({
      message: 'На сервере произошла ошибка... Попробуйте позже...',
    });
  }
});

module.exports = router;
