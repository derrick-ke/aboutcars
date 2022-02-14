const express = require('express');
const morgan = require('morgan');

const carRouter = require('./routes/carRouter');
const userRouter = require('./routes/userRouter');

const app = express();

if (process.env.ENVIRONMENT === 'development') {
  app.use(morgan('tiny'));
}

app.use(express.json());

app.use('/api/v1/cars', carRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
