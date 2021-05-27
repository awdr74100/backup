const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('connect db'))
  .catch((err) => console.log(err));

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`start localhost ${port}`);
});
