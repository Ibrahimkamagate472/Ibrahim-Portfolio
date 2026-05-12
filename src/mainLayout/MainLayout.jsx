import { Outlet } from 'react-router-dom'
import { Nav, Footer } from './index'
const MainLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}
export default MainLayout
