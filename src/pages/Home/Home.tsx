import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'

const Home = () => {
  return (
    <>
      <Header />
      <div className="p-4">
        <Outlet />
      </div>
    </>
  )
}

export default Home
