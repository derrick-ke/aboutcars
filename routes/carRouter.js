const express = require('express');
const CarController = require('../controllers/carController');

const router = express.Router();

router.route('/').get(CarController.getAllCars).post(CarController.createCar);

router.route('/:id').get(CarController.getCar).patch(CarController.updateCar);

module.exports = router;
