const mongoose = require('mongoose')

const storeSchema = mongoose.Schema({
  areaCode: {
    type: Number,
    required: true,
  },
  storeManagerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Staff',
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

const Store = mongoose.model('Store', storeSchema)

module.exports = Store
