const jwt = require('jsonwebtoken')

const getUserId = (request) => {
  const header = request.request.headers.authorization

  if (!header) {
    throw new Error('Authentication required')
  }

  const token = header.replace('Bearer ', '')
  const decoded = jwt.verify(token, process.env.JWT_SECRET)

  return decoded.id
}

module.exports = getUserId
