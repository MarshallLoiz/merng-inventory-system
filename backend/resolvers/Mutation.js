const generateToken = require('../utils/generateToken')
const getUserId = require('../utils/getUserId')

const Mutation = {
  async createStore(parent, { data }, { StoreDocument }, info) {
    const store = await StoreDocument.create(data)

    return {
      store,
      token: generateToken(store._id),
    }
  },

  async loginStore(parent, { data }, { StoreDocument }, info) {
    const storeUser = await StoreDocument.findOne({ email: data.email })

    if (storeUser && (await storeUser.matchPassword(data.password))) {
      return {
        store: storeUser,
        token: generateToken(storeUser._id),
      }
    } else {
      throw new Error('Invalid email or password')
    }
  },

  async createStaff(parent, { data }, { StaffDocument, request }, info) {
    getUserId(request)

    const staff = await StaffDocument.create(data)

    return {
      staff,
      token: generateToken(staff._id),
    }
  },

  async loginStaff(parent, { data }, { StaffDocument }, info) {
    const staff = await StaffDocument.findOne({ email: data.email })

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
