const express = require('express');
const router = express.Router(); 

router.get('/quotes/:category', (req, res) => {
  const category = req.params.category;
  const data = {
    message: category,
  };
  res.json(data);
});

module.exports = router; 