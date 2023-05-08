const express = require('express');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
const router = express.Router();
require('dotenv').config();

router.get('/quotes', (req, res) => {
  const data = {
    message: 'Hello from server!',
  };
  res.json(data);
});

// fetch data from https://api.api-ninjas.com/v1/quotes?category={category}&limit=10
router.get('/quotes/:category', async (req, res) => {
  const { category } = req.params;

  const response = await fetch(
    `https://api.api-ninjas.com/v1/quotes?category=${category}&limit=10`,
    {
      headers: {
        'X-Api-Key': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await response.json();
  res.json(data);
});

module.exports = router;
