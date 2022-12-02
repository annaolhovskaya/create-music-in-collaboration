const express = require('express');
const Format = require('../models/Format');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const list = await Format.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json('На сервере произошла ошибка. Попробуйте позже.');
  }
});

module.exports = router;
