import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import NotFound from './pages/Notfound'
import Mypage from './pages/Auth/Mypage'

import Main from './pages/Main'
import Explore from './pages/Explore/Explore'
import Spaces from './pages/Spaces/Spaces'
import SpacesDetail from './pages/Spaces/SpacesDetail'
import ExploreDetail from './pages/Explore/ExploreDetail'
import SpaceCreatePage from './pages/Spaces/SpaceCreate'
import ExploreCreatePage from './pages/Explore/ExploreCreate'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'my',
        element: <Mypage />,
      },
      {
        path: 'explore',
        element: <Explore />,
      },
      {
        path: 'spaces',
        element: <Spaces />,
      },
      {
        path: 'spaces/:id',
        element: <SpacesDetail />,
      },
      {
        path: 'explore/:id',
        element: <ExploreDetail />,
      },
      {
        path: 'spaces/new',
        element: <SpaceCreatePage />,
      },
      {
        path: 'explore/new',
        element: <ExploreCreatePage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
