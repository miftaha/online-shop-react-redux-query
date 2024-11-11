import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        <div className="flex justify-center items-center gap-x-6">
          <Link
            to="/login"
            className="capitalize link link-hover link-primary text-md sm:text-lg"
          >
            sign in
          </Link>
          <Link
            to="/register"
            className="capitalize link link-hover link-primary text-md sm:text-lg"
          >
            Create an Account
          </Link>
        </div>
      </div>
    </header>
  )
}
export default Header
