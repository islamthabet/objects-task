import { FC } from 'react'
import { Link } from 'react-router-dom'
interface IPostComponent {
  title: string
  body: string
  id: number
  imgUrl: string
}

const PostComponent: FC<IPostComponent> = ({ title, body, id, imgUrl }) => {
  return (
    <Link
      to={id + ''}
      className="mx-2 mb-2 flex flex-row items-center justify-center gap-4 border-b pb-2 hover:bg-slate-200"
    >
      <img src={imgUrl} alt={title} className=" w-14 rounded-full" />
      <div className=" w-[400px]">
        <h3 className=" text-md font-medium">{title}</h3>
        <h6 className="text-sm text-gray-700">{body}</h6>
      </div>
    </Link>
  )
}

export default PostComponent
