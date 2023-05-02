const express = require('express');
const router = express.Router();

router.get('/quotes', (req, res) => {
  const data = {
    message: 'Hello from server!',
  };
  res.json(data);
});

router.get('/quotes/:category', (req, res) => {
  const { category } = req.params;
  
  const data = {
    message: category,
  };
  res.json(data);
});

module.exports = router;
