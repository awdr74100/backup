const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
// app.use(
//   cors({
//     origin: ['http://localhost:9000'],
//     credentials: true,
//   }),
// );
app.use('*', (req, res, next) => {
  // res.header('Access-Control-Allow-Origin', req.headers.origin);
  // res.header(
  //   'Access-Control-Allow-Headers',
  //   'Content-Type, Authorization, Accept, X-Requested-With, x-csrf-token',
  // );
  // res.header(
  //   'Access-Control-Allow-Methods',
  //   'GET, HEAD, POST, OPTIONS, PUT, PATCH, DELETE',
  // );
  // res.header('Access-Control-Allow-Credentials', true);
  // if (req.method === 'OPTIONS') {
  //   console.log(req.headers);
  // }
  next();
});

// Express

app.options('*', (req, res) => {
  res.sendStatus(204);
});

const port = process.env.PORT || 4000;

app.get('/api/products', (req, res) => {
  console.log('API Active', new Date().toLocaleString());
  console.log(req.body);
  const { name = 'unknown' } = req.body;
  res.cookie('access_token', '1234', { maxAge: 1000 * 10 });
  res.send({
    method: req.method,
    name: req.body.name || 'unknown',
    token: req.headers.authorization || 'unknown',
  });
});

app.use((req, res, next) => {
  console.log('last middleware active');
  next();
});

app.listen(port, () => console.log(`start ${port} port localhost`));
