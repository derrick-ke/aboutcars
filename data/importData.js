const fs = require('fs');
require('dotenv').config({ path: './config.env' });
require('../db/db');
const Car = require('../models/Car');

const cars = JSON.parse(fs.readFileSync(`${__dirname}/cars.json`, 'utf8'));

const importData = async () => {
  try {
    await Car.create(cars);
    console.log('Data has been imported successfully');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Car.deleteMany();
    console.log('Data has been deleted successfully');
    process.exit();
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === 'delete') {
  deleteData();
} else if (process.argv[2] === 'import') {
  importData();
}
