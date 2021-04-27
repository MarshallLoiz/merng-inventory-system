const Staff = {
  async store(parent, args, { StoreDocument }, info) {
    const store = await StoreDocument.findById(parent.storeId)

    return store
  },
}

module.exports = Staff
