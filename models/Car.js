const mongoose = require('mongoose');

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
  // ENGINE
  engineSize: {
    type: 'String',
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
  createdAt: {
    type: 'Date',
    default: new Date(Date.now()),
  },
  // DIMENSIONS
  fuelCapacity: {
    type: 'String',
  },
  weight: {
    type: 'String',
  },
  length: {
    type: 'String',
  },
  width: {
    type: 'String',
  },
  height: {
    type: 'String',
  },
  wheelbase: {
    type: 'String',
  },
  // PERFORMANCE
  power: {
    type: 'String',
  },
  topSpeed: {
    type: 'String',
  },
  // CABIN & LUGGAGE
  doors: {
    type: 'String',
  },
  seats: {
    type: 'String',
  },
  features: [],
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
