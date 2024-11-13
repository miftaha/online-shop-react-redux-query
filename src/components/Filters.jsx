import { Form, useLoaderData } from 'react-router-dom'
import FormInput from './FormInput'
import { FormSelector } from '../components'
import FormRange from './FormRange'
import FormCheckbox from './FormCheckbox'

const Filters = () => {
  const { meta } = useLoaderData()
  console.log(meta)
  return (
    <Form className="rounded-lg bg-base-200 px-8 py-4 grid items-center  gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <FormInput
        label="search product"
        type="search"
        name="search"
        size="input-sm"
      />
      {/* Category */}
      <FormSelector
        label="select category"
        list={meta.companies}
        size="select-sm"
      />
      {/* Company */}
      <FormSelector
        label="select company"
        list={meta.categories}
        size="select-sm"
      />
      {/* Order */}
      <FormSelector
        label="sort by"
        list={['a-z', 'z-a', 'high', 'low']}
        size="select-sm"
      />
      {/* price */}

      <FormRange label="select price" name="price" size="range-sm" />
      {/* shipping */}
      <FormCheckbox
        label="free shipping"
        type="checkbox"
        name="shipping"
        size="checkbox-sm"
      />
      {/* BUTTON */}
      <button type="submit" className="btn btn-primary btn-sm uppercase">
        search
      </button>
      <button className="btn btn-accent btn-sm uppercase">reset</button>
    </Form>
  )
}
export default Filters
