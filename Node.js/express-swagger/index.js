const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();

const port = process.env.PORT || 3000;

const swaggerSpec = swaggerJsDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Library API',
      version: '1.0.0',
      description: 'A simple Express Library API',
      contact: {
        name: 'Ian Lan',
        url: 'https://github.com/awdr74100',
        email: 'a78945612385238@gmail.com',
      },
    },
    servers: [
      { url: `http://localhost:${port}`, description: 'Development server' },
    ],
  },
  apis: ['./controllers/*.js'],
});

mongoose
  .connect('mongodb://localhost:27017/shop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('connected to db'))
  .catch((err) => console.log(err));

app.use(morgan('dev'));
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use('/api', routes);

app.listen(port, () => console.log(`start localhost ${port}`));
