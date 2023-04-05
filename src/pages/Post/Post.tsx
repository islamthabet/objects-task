import { Link, useLoaderData } from 'react-router-dom'
import { IPost } from '../../core/interface/IPost.interface'
import { IComments } from '../../core/interface/IComment'
import Comments from '../../components/Comments/Comments'
import { IoIosArrowBack } from 'react-icons/io'

const Post = () => {
  const { posts, comments } = useLoaderData() as {
    posts: IPost
    comments: IComments[]
  }

  return (
    <>
      <Link to="/" className="mb-4 flex flex-row items-center gap-2">
        <IoIosArrowBack />
        <span>Posts</span>
      </Link>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:items-start md:justify-start">
        <img
          className="rounded-md shadow-md"
          src={`https://picsum.photos/id/${posts.id}/200`}
          alt={posts.title}
        />
        <div>
          <div className="border-b pb-2 text-base font-medium">
            {posts.title}
          </div>
          <p className="mt-2 text-gray-600">{posts.body}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        {comments.map((comment, index) => (
          <Comments
            key={comment.id}
            name={comment.name}
            email={comment.email}
            body={comment.body}
            imageUrl={`https://picsum.photos/id/${index}/50`}
          />
        ))}
      </div>
    </>
  )
}

export default Post
