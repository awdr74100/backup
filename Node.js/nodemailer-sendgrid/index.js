const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`start localhost ${port}`);
});
