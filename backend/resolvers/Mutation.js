const Mutation = {
  async createStaff(parent, { data }, { Staff }, info) {
    const staff = await Staff.create(data)

    return staff
  },
  async createStore(parent, { data }, { Store }, info) {
    const store = await Store.create(data)

    return store
  },
}

module.exports = Mutation
