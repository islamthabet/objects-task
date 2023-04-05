import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'

const Home = () => {
  return (
    <>
      <Header />
      <div className="h-[calc(100vh_-_65px)] overflow-auto p-4">
        <Outlet />
      </div>
    </>
  )
}

export default Home
