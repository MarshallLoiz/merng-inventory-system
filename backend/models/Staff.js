const mongoose = require('mongoose')

const staffSchema = mongoose.Schema({
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Store',
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
    enum: ['male', 'female'],
    required: true,
  },
  officePhone: {
    type: Number,
    required: true,
  },
  emailAddress: {
    type: String,
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
    line1: {
      type: String,
      required: true,
    },
    line2: {
      type: String,
    },
    line3: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    zipOrPasscode: {
      type: Number,
      required: true,
    },
    stateProvinceCountry: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    otherAddressDetails: String,
  },
})

const Staff = mongoose.model('Staff', staffSchema)

module.exports = Staff
