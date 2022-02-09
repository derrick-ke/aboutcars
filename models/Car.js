const mongoose = require('mongoose');

const engineSchema = mongoose.Schema({
  engineSize: {
    type: 'String',
    trim: true,
  },
  cylinders: {
    type: 'Number',
    trim: true,
  },
  valves: {
    type: 'Number',
    trim: true,
  },
  fuel: {
    type: 'String',
    trim: true,
  },
  transmission: {
    type: 'String',
    trim: true,
  },
  drivetrain: {
    type: 'String',
    trim: true,
  },
});

const carSchema = mongoose.Schema({
  make: {
    type: 'String',
    trim: true,
    required: true,
  },
  model: {
    type: 'String',
    trim: true,
    required: true,
  },
  year: {
    type: 'Number',
    trim: true,
    required: true,
  },
  trim: {
    type: 'String',
  },
  engine: {
    type: engineSchema,
  },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
