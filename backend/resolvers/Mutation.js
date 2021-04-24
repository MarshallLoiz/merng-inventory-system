const Mutation = {
  async createStaff(parent, { data }, { Staff }, info) {
    const newStaff = new Staff(data)

    await newStaff.save()

    return newStaff
  },
  async createStore(parent, { data }, { Store }, info) {
    const newStore = new Store(data)

    await newStore.save()

    return newStore
  },
}

module.exports = Mutation
