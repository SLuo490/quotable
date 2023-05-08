const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Routers
const quotes = require('./routes/quotes');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api', quotes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
