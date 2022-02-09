const express = require('express');
const morgan = require('morgan');

const CarRouter = require('./routes/carRouter');

const app = express();

if (process.env.ENVIRONMENT === 'development') {
  app.use(morgan('tiny'));
}

app.use(express.json());

app.use('/api/v1/cars', CarRouter);

module.exports = app;
