const express = require('express');
const morgan = require('morgan');

const app = express();

if (process.env.ENVIRONMENT === 'development') {
  app.use(morgan('tiny'));
}

app.use(express.json());

module.exports = app;
