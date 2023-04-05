import React, { FC } from 'react'
interface CommentProps {
  name: string
  email: string
  body: string
  imageUrl: string
}

const Comments: FC<CommentProps> = ({ name, email, body, imageUrl }) => {
  return (
    <div className="mb-4 flex flex-col border-b pb-2">
      <div className="flex flex-row gap-4">
        <div>
          <img src={imageUrl} alt={name} className=" rounded-full" />
        </div>
        <div>
          <div className=" text-base text-gray-900">{name}</div>
          <div className=" text-sm text-gray-400">{email}</div>
        </div>
      </div>
      <div className="mt-2">{body}</div>
    </div>
  )
}

export default Comments
