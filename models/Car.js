const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
  make: {
    type: 'String',
  },
  model: {
    type: 'String',
  },
  year: {
    type: 'Number',
  },
  transmission: {
    type: 'String',
    enum: ['Automatic, Manual'],
  },
  fuel: {
    type: 'String',
  },
  engine: {
    type: 'String',
  },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
