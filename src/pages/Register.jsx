import { SubmitBtn, FormInput } from '../components'
import { Link, Form } from 'react-router-dom'
const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-200 flex flex-col gap-y-4 shadow-lg"
      >
        <h4 className="text-3xl font-bold text-center capitalize">register</h4>
        <FormInput type="text" name="username" label="username" />
        <FormInput type="email" name="email" label="email" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="Register" />
        </div>
        <p className="capitalize text-center">
          Already a member?
          <Link to="/login" className="ml-2 link link-hover link-primary">
            Login
          </Link>
        </p>
      </Form>
    </section>
  )
}
export default Register
