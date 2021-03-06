const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')

const staffSchema = mongoose.Schema({
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Store',
  },
  email: {
    type: String,
    required: true,
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
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
  officePhone: {
    type: Number,
    required: true,
  },
  dateOfJoin: {
    type: Date,
    required: true,
  },
  dateOfLeft: Date,
  dateOfBirth: {
    type: Date,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  commisionPercentage: Number,
  otherDetails: String,
  address: {
    type: String,
    required: true,
  },
  otherAddressDetails: String,
})

staffSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()

  const salt = await bcrypt.genSalt(10)

  this.password = await bcrypt.hash(this.password, salt)

  this.confirmPassword = undefined
  next()
})

staffSchema.methods.matchPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password)
}

const Staff = mongoose.model('Staff', staffSchema)

module.exports = Staff
