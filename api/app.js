const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/api/quotes/:category', (req, res) => {
  const category = req.params.category;
  const data = {
    message: category,
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
