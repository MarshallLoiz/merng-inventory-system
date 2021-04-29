const getUserId = require('../utils/getUserId')

const Query = {
  async staffs(parent, args, { StaffDocument, request }, info) {
    const id = getUserId(request)

    const staffs = await StaffDocument.find({ storeId: id })

    return staffs
  },

  async staff(parent, args, { StaffDocument }, info) {
    getUserId(request)

    const staff = await StaffDocument.findById(args.id)

    if (!staff) {
      throw new Error('Staff not found')
    }

    return staff
  },

  async stores(parent, args, { StoreDocument }, info) {
    const stores = await StoreDocument.find()

    return stores
  },
  async store(parent, args, { StoreDocument }, info) {
    const store = await StoreDocument.findById(args.id)

    if (!store) {
      throw new Error('Store not found')
    }
    return store
  },
}

module.exports = Query
