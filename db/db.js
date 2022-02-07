const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL.replace(
  '<password>',
  process.env.DB_PASSWORD
);

const db = mongoose
  .connect(DB_URL)
  .then(() => {
    console.log('Database running');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = db;
