const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  otherProductDetails: String,
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
