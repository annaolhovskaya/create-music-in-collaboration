const express = require('express');
const Style = require('../models/Style');
const { route } = require('./auth.routes');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const list = await Style.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json('На сервере произошла ошибка. Попробуйте позже.');
  }
});

module.exports = router;
