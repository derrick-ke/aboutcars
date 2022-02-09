const Car = require('../models/Car');

const sanitizeBody = (body) => {
  const params = {
    make: body.make,
    model: body.model,
    year: body.year,
    trim: body.trim,
    engine: {
      fuel: body.fuel,
      engineSize: body.engineSize,
      cylinders: body.cylinders,
      valves: body.valves,
      transmission: body.transmission,
      gearBox: body.gearBox,
      drivetrain: body.drivetrain,
    },
  };
  return params;
};

exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json({
      status: 'success',
      data: cars,
    });
  } catch (error) {
    res.status(404).json({
      status: 'error',
      message: error,
    });
  }
};

exports.getCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);

    if (!car) {
      throw new Error('Car not found');
    }

    res.status(200).json({
      status: 'success',
      data: car,
    });
  } catch (error) {
    res.status(404).json({
      status: 'error',
      message: error,
    });
  }
};

exports.createCar = async (req, res) => {
  try {
    const params = sanitizeBody(req.body);

    const car = await Car.create(params);

    res.status(200).json({
      status: 'success',
      data: car,
    });
  } catch (error) {
    res.status(404).json({
      status: 'error',
      message: error,
    });
  }
};

exports.updateCar = async (req, res) => {
  try {
    const params = sanitizeBody(req.body);

    const car = await Car.findByIdAndUpdate(
      req.params.id,
      params,
      {
        new: true,
        runValidators: true,
      },
      { $elemMatch: { '$engine.$_id': params.engine.id } }
    );

    if (!car) {
      throw new Error('Car not found');
    }

    res.status(200).json({
      status: 'success',
      data: car,
    });
  } catch (error) {
    res.status(404).json({
      status: 'error',
      message: error,
    });
  }
};
