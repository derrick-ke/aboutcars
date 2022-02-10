const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' });
require('../db/db');
const Car = require('../models/Car');

const url = path.join(__dirname, 'data.json');

const importData = () => {
  fs.readFileSync(url, async (err, data) => {
    console.log(JSON.parse(data));

    await Car.save(data);
  });
  console.log('Data has been imported successfully');
  process.exit();
};

const deleteData = async () => {
  await Car.deleteMany();
  console.log('Data has been deleted successfully');
  process.exit();
};

if (process.argv[2] === 'delete') {
  deleteData();
} else if (process.argv[2] === 'import') {
  importData();
}
