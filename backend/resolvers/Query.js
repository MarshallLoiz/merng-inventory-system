const Query = {
  async staffs(parent, args, { Staff }, info) {
    const staffs = await Staff.find()

    return staffs
  },
  async staff(parent, args, { Staff }, info) {
    const staff = await Staff.findById(args.id)

    return staff
  },
  async stores(parent, args, { Store }, info) {
    const stores = await Store.find()

    return stores
  },
  async store(parent, args, { Store }, info) {
    const store = await Store.findById(args.id)

    return store
  },
}

module.exports = Query
