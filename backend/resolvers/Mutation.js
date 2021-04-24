const Mutation = {
  async createStaff(parent, { data }, { Staff }, info) {
    const newStaff = new Staff(data)

    await newStaff.save()

    return newStaff
  },
}

module.exports = Mutation
