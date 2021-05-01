const generateToken = require('../utils/generateToken')
const getUserId = require('../utils/getUserId')
const createSendCookie = require('../utils/createSendCookie')

const Mutation = {
  async createStore(parent, { data }, { StoreDocument, request }, info) {
    const store = await StoreDocument.create(data)

    const token = generateToken(store._id)

    createSendCookie(request, token)

    return {
      store,
      token,
    }
  },

  async loginStore(parent, { data }, { StoreDocument, request }, info) {
    const storeUser = await StoreDocument.findOne({ email: data.email })

    if (storeUser && (await storeUser.matchPassword(data.password))) {
      const token = generateToken(storeUser._id)

      createSendCookie(request, token)

      return {
        store: storeUser,
        token,
      }
    } else {
      throw new Error('Invalid email or password')
    }
  },

  async createStaff(parent, { data }, { StaffDocument, request }, info) {
    getUserId(request)

    const staff = await StaffDocument.create(data)

    return staff
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

  async updateStaff(parent, { data }, { StaffDocument, request }, info) {
    const id = getUserId(request)

    const isStoreOwner = id === data.storeId

    if (!isStoreOwner) {
      throw new Error('This staff is not registered on your store')
    }

    const updateStaff = await StaffDocument.findByIdAndUpdate(
      data.staffId,
      data,
      {
        new: true,
        runValidators: true,
      }
    )

    return updateStaff
  },

  async deleteStaff(parent, { data }, { StaffDocument, request }, info) {
    const id = getUserId(request)

    const isStoreOwner = id === data.storeId

    if (!isStoreOwner) {
      throw new Error('This staff is not registered on your store')
    }

    await StaffDocument.findByIdAndRemove(data.id)

    return 'Staff Deleted'
  },
}

module.exports = Mutation
