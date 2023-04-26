const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/api/data', (req, res) => {
  const data = {
    message: 'Hello from server!',
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
