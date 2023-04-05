import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import PostComponent from '../../components/PostComponent/PostComponent'
import { IPost } from '../../core/interface/IPost.interface'

const Posts = () => {
  const data = useLoaderData() as IPost[]

  return (
    <div>
      {data.map((p, index) => (
        <PostComponent
          imgUrl={`https://picsum.photos/id/${index % 5}/100/100/`}
          key={p.id}
          title={p.title}
          body={p.body}
          id={p.id}
        />
      ))}
      <Outlet />
    </div>
  )
}

export default Posts
