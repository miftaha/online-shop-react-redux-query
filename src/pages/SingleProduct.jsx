import { Link, useLoaderData } from 'react-router-dom'
import { customFetch, formatPrice, generateAmountOptions } from '../utils'
import { useState } from 'react'

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`)
  const product = response.data.data
  return { product }
}

const SingleProduct = () => {
  const { product } = useLoaderData()
  const { title, image, company, price, description, colors } =
    product.attributes

  const [productColor, setProductColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value))
  }

  const dollarAmount = formatPrice(price)

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-8 grid lg:grid-cols-2 gap-20">
        <div>
          <img
            src={image}
            alt={title}
            className="w-96 h-96 rounded-lg lg:w-full object-cover"
          />
        </div>
        <div>
          <h1 className="capitalize text-4xl font-bold">{title}</h1>
          <h3 className="mt-4 capitalize font-medium text-2xl">{company}</h3>
          <p className="mt-4 font-semibold">{dollarAmount}</p>
          <p className="leading-8 mt-8">{description}</p>
          <div className="mt-4">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            {colors.map((color) => {
              return (
                <button
                  className={` badge badge-lg mr-2 w-6 h-6${
                    color === productColor && 'border-8 border-secondary'
                  }`}
                  key={color}
                  style={{ backgroundColor: color }}
                  onClick={() => setProductColor(color)}
                ></button>
              )
            })}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <h4 className="text-md font-medium tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              className="select select-bordered"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(25)}
            </select>
          </div>
          <div className="mt-6">
            <button className="btn btn-secondary uppercase">Add to bag</button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SingleProduct
