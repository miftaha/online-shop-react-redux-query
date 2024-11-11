import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  console.log(error)
  if (error.status === 404) {
    return (
      <main className="min-h-[100vh] grid place-items-center px-8">
        <div className="text-center">
          <h1 className="text-9xl font-semibold text-primary">404</h1>
          <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl capitalize">
            page not found
          </h3>
          <p className="mt-6 text-lg leading-7 ">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <Link to="/" className="btn btn-primary capitalize mt-10">
            back to home
          </Link>
        </div>
      </main>
    )
  }
  return (
    <main className="grid min-h-[100vh] place-items-center px-8 ">
      <h4 className="text-center font-bold text-4xl">there was an error... </h4>
    </main>
  )
}
export default Error
