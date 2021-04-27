const Store = {
  async staffs(parent, args, { StaffDocument }, info) {
    const staffs = await StaffDocument.find({ storeId: parent.id })

    return staffs
  },
}

module.exports = Store
