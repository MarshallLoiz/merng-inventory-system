const mongoose = require('mongoose')

const salesSchema = mongoose.Schema({
  staffId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  salesDates: {
    type: String,
    required: true,
  },
  salesValue: {
    type: Number,
    required: true,
  },
  salesCommissions: {
    type: Number,
    required: true,
  },
})

const Sales = mongoose.model('Sales', salesSchema)

module.exports = Sales
