const generateToken = require('../utils/generateToken')
const getUserId = require('../utils/getUserId')

const Mutation = {
  async createStaff(parent, { data }, { Staff, request }, info) {
    getUserId(request)

    const staff = await Staff.create(data)

    return staff
  },
  async createStore(parent, { data }, { Store }, info) {
    const store = await Store.create(data)

    return {
      store,
      token: generateToken(store._id),
    }
  },
}

module.exports = Mutation
