import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import FloatingActionManager from '../Component/Button/FloatingButton'

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <FloatingActionManager />
    </div>
  )
}
