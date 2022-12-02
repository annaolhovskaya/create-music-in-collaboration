const express = require('express');
const Daw = require('../models/Daw');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const list = await Daw.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже',
    });
  }
});

module.exports = router;
