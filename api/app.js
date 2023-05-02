const express = require('express');
const cors = require('cors');

// Routers
const quotes = require('./routes/quotes');

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api', quotes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
