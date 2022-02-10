const sanitizeBody = require('../utils/sanitizeBody');
const catchAsync = require('../utils/catchAsync');
const Car = require('../models/Car');

exports.getAllCars = catchAsync(async (req, res) => {
  const queryObj = { ...req.query };
  const excludedFields = ['sort', 'page', 'limit'];
  excludedFields.forEach((field) => delete queryObj[field]);

  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(/\b(gte|lte|gt|lt)\b/g, (match) => `$${match}`);

  let query = Car.find(JSON.parse(queryStr));

  if (req.query.sort) {
    query = query.sort(req.query.sort);
  } else {
    query = query.sort('createdAt');
  }

  if (req.query.page && req.query.limit) {
    const page = req.query.page - 1;
    const limit = req.query.limit;
    const skip = page * limit;

    query = query.skip(skip).limit(limit);
  } else {
    query = query.limit(10);
  }

  // Filter results
  const cars = await query;

  res.status(200).json({
    status: 'success',
    results: cars.length,
    data: cars,
  });
});

exports.getCar = catchAsync(async (req, res) => {
  const car = await Car.findById(req.params.id);

  if (!car) {
    throw new Error('Car not found');
  }

  res.status(200).json({
    status: 'success',
    data: car,
  });
});

exports.createCar = catchAsync(async (req, res) => {
  const bodyParams = sanitizeBody(req.body);

  const car = await Car.create(bodyParams);

  res.status(200).json({
    status: 'success',
    data: car,
  });
});

exports.updateCar = catchAsync(async (req, res) => {
  const bodyParams = sanitizeBody(req.body);

  const car = await Car.findByIdAndUpdate(req.params.id, bodyParams, {
    new: true,
    runValidators: true,
  });

  if (!car) {
    throw new Error('Car not found');
  }

  res.status(200).json({
    status: 'success',
    data: car,
  });
});

exports.deleteCar = catchAsync(async (req, res) => {
  await Car.deleteOne(req.params.id);

  res.status(204).json({
    status: 'success',
  });
});
