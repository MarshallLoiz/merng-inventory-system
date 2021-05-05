import React, { useLayoutEffect } from 'react'
import { useHistory } from 'react-router-dom'
import cookieChecker from '../../utils/cookieChecker'
import Header from '../../components/Header'

const Home = () => {
  const history = useHistory()

  useLayoutEffect(() => {
    if (!cookieChecker()) {
      history.push('/login')
    }
  })

  return <Header></Header>
}

export default Home
