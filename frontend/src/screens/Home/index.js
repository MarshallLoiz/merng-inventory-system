import React, { useLayoutEffect } from 'react'
import { useHistory } from 'react-router-dom'
import cookieChecker from '../../utils/cookieChecker'

const Home = () => {
  const history = useHistory()

  useLayoutEffect(() => {
    if (!cookieChecker()) {
      history.push('/login')
    }
  })

  return <div>Hello My MERN-G APP!</div>
}

export default Home
