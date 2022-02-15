const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

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

// ENCRYPTING THE PASSWORD
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
