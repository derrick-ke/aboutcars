const User = require('../models/User');
const catchAsync = require('../utils/catchAsync');

exports.signup = catchAsync(async (req, res) => {
  // create user using selected data from bodyParams

  const userData = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  };

  const user = await User.create(userData);

  res.status(201).json({
    status: 'success',
    data: user,
  });
  // validate the password and password confirm are equal
  // send the information to the browser without password field
});
