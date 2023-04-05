import { RouterProvider } from 'react-router-dom'
import Header from './components/Header/Header'
import router from './core/Routes/routes'

function App() {
  return (
    <>
      <Header />
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
