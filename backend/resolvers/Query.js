const Query = {
  async staffs(parent, args, { Staff }, info) {
    const staffs = await Staff.find()

    return staffs
  },
}

module.exports = Query
