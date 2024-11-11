import { Outlet } from 'react-router-dom'
const HomeLayout = () => {
  return (
    <>
      <h1 className="capitalize text-primary">navbar</h1>
      <Outlet />
    </>
  )
}
export default HomeLayout
