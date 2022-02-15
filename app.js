const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const carRouter = require('./routes/carRouter');
const userRouter = require('./routes/userRouter');

const app = express();

if (process.env.ENVIRONMENT === 'development') {
  app.use(morgan('tiny'));
}

app.use(express.json());

app.use('/api/v1/cars', carRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
