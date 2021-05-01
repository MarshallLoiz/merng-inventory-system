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
  storeAddress: {
    type: String,
    required: true,
  },
  otherDetails: String,
})

storeSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()

  const salt = await bcrypt.genSalt(10)

  this.password = await bcrypt.hash(this.password, salt)

  this.confirmPassword = undefined
  next()
})

storeSchema.methods.matchPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password)
}

const Store = mongoose.model('Store', storeSchema)

module.exports = Store
