import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import { IPost } from '../../core/api/api'

const Posts = () => {
  const data = useLoaderData() as IPost[]
  console.log(data)
  return (
    <div>
      Posts
      <Outlet />
    </div>
  )
}

export default Posts
