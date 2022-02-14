const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
  firstname: {
    type: 'String',
    required: true,
    trim: true,
  },
  lastname: {
    type: 'String',
    required: [true, 'Please enter a name'],
    trim: true,
  },
  email: {
    type: 'String',
    required: [true, 'This field cannot be empty'],
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
    unique: true,
  },
  password: {
    type: 'String',
    required: true,
    minlength: 8,
  },
  passwordConfirm: {
    type: 'String',
    required: true,
    validate: {
      validator(el) {
        return el === this.password;
      },
    },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
