const generateToken = require('../utils/generateToken')
const getUserId = require('../utils/getUserId')

const Mutation = {
  async createStore(parent, { data }, { Store }, info) {
    const store = await Store.create(data)

    return {
      store,
      token: generateToken(store._id),
    }
  },

  async loginStore(parent, { data }, { Store }, info) {
    const storeUser = await Store.findOne({ email: data.email })

    if (storeUser && (await storeUser.matchPassword(data.password))) {
      return {
        store: storeUser,
        token: generateToken(storeUser._id),
      }
    } else {
      throw new Error('Invalid email or password')
    }
  },

  async createStaff(parent, { data }, { Staff, request }, info) {
    getUserId(request)

    const staff = await Staff.create(data)

    return {
      staff,
      token: generateToken(staff._id),
    }
  },

  async loginStaff(parent, { data }, { Staff }, info) {
    const staff = await Staff.findOne({ email: data.email })

    if (staff && (await staff.matchPassword(data.password))) {
      return {
        staff,
        token: generateToken(staff._id),
      }
    } else {
      throw new Error('Invalid email or password')
    }
  },
}

module.exports = Mutation
