const express = require('express');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
const router = express.Router();
require('dotenv').config();

// fetch data from https://api.api-ninjas.com/v1/quotes?category={category}&limit=5
router.get('/quotes/:category', async (req, res) => {
  const { category } = req.params;

  const response = await fetch(
    `https://api.api-ninjas.com/v1/quotes?category=${category}&limit=6`,
    {
      headers: {
        'X-Api-Key': process.env.API_KEY,
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await response.json();
  res.json(data);
});

module.exports = router;
