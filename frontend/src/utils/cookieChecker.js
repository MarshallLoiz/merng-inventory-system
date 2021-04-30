import Cookies from 'js-cookie'

const cookieChecker = () => {
  const cookie = Cookies.get('jwt')

  return cookie
}

export default cookieChecker
