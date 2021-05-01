const createSendCookie = (request, token) => {
  const options = {
    maxAge: 1000 * 60 * 60 * 24,
    secure:
      request.request.secure ||
      request.request.headers['x-forwarded-proto'] === 'https',
  }

  const cookie = request.response.cookie('jwt', token, options)

  return cookie
}

module.exports = createSendCookie
