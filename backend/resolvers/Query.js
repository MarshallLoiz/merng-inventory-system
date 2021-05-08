const getUserId = require('../utils/getUserId')

const Query = {
  async currentStoreLogin(parent, args, { StoreDocument, request }, info) {
    const currentStoreId = getUserId(request)

    const store = await StoreDocument.findById(currentStoreId)

    return store
  },

  async staffs(parent, args, { StaffDocument, request }, info) {
    const storeId = getUserId(request)

    const staffs = await StaffDocument.find({ storeId })

    return staffs
  },

  async staff(parent, args, { StaffDocument, request }, info) {
    getUserId(request)

    const staff = await StaffDocument.findById(args.id)

    if (!staff) {
      throw new Error('Staff not found')
    }

    return staff
  },

  async stores(parent, args, { StoreDocument, request }, info) {
    getUserId(request)

    const stores = await StoreDocument.find()

    return stores
  },

  async store(parent, args, { StoreDocument, request }, info) {
    getUserId(request)

    const store = await StoreDocument.findById(args.id)

    if (!store) {
      throw new Error('Store not found')
    }
    return store
  },
}

module.exports = Query
