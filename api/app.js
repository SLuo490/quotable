const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/api/test', (req, res) => {
  res.send({ message: 'Hello from server!' });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});