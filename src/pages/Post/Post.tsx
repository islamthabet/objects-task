import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Post = () => {
  const data = useLoaderData()
  return <div>Post</div>
}

export default Post
