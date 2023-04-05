import { LoaderFunction, createBrowserRouter } from 'react-router-dom'
import Posts from '../../pages/Posts/Posts'
import Post from '../../pages/Post/Post'
import CreatePost from '../../pages/CreatePost/CreatePost'
import Home from '../../pages/Home/Home'
import { getPost, getPosts } from '../api/api'
import Error from '../../components/Error/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Posts />,
        loader: getPosts,
        children: [{ path: 'create', element: <CreatePost /> }],
      },
      {
        path: ':id',
        element: <Post />,
        loader: getPost as LoaderFunction,
      },
    ],
  },
  {
    path: '*',
    element: <>Notfound</>,
  },
])

export default router
