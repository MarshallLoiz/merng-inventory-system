const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const storeSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please Confirm your password'],
    validate: {
      validator: function (el) {
        return el === this.password
      },
      message: 'Password is not the same',
    },
  },
  areaCode: {
    type: Number,
    required: true,
  },
  storeName: {
    type: String,
    required: true,
  },
  storeLocation: {
    type: String,
    required: true,
  },
  storeAddress: {
    type: String,
    required: true,
  },
  otherDetails: String,
})

storeSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()

  this.password = await bcrypt.hash(this.password, 12)

  this.confirmPassword = undefined
  next()
})

const Store = mongoose.model('Store', storeSchema)

module.exports = Store
