import React, { useLayoutEffect } from 'react'
import { useHistory } from 'react-router-dom'
import cookieChecker from '../../utils/cookieChecker'
import Header from '../../components/Header'
import DashboardTable from '../../components/DashboardTable'

const Home = () => {
  const history = useHistory()

  useLayoutEffect(() => {
    if (!cookieChecker()) {
      history.push('/login')
    }
  })

  return (
    <>
      <Header headerState='Staffs' />
      <DashboardTable />
    </>
  )
}

export default Home
