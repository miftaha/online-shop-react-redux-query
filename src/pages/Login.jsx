import { SubmitBtn, FormInput } from '../components'
import { Link, Form } from 'react-router-dom'
const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-200 flex flex-col gap-y-4 shadow-lg"
      >
        <h4 className="text-3xl font-bold text-center capitalize">login</h4>
        <FormInput
          type="email"
          name="identifier"
          defaultValue="test@test.com"
          label="email"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button type="button" className="btn btn-secondary btn-block uppercase">
          gust user
        </button>

        <p className="capitalize text-center">
          not a member yet?
          <Link to="/register" className="ml-2 link link-hover link-primary">
            Register
          </Link>
        </p>
      </Form>
    </section>
  )
}
export default Login
