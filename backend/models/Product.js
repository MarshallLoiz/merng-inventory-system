const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Store',
  },
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  nationalProductPrice: {
    type: Number,
    required: true,
  },
  nationalReorderQuantity: {
    type: Number,
    required: true,
  },
  otherProductDetails: String,
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
