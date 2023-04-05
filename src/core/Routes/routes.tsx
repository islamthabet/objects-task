import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <>Home</>,
  },
  {
    path: '/create',
    element: <>create</>,
  },
  {
    path: '/:id',
    element: <>post</>,
  },
  {
    path: '*',
    element: <>Notfound</>,
  },
])

export default router
