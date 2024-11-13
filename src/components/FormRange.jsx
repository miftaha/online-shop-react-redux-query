/* eslint-disable react/prop-types */
import { useState } from 'react'
import { formatPrice } from '../utils'

const FormRange = ({ label, name, size }) => {
  const maxPrice = 100000
  const [price, setPrice] = useState(maxPrice)
  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(price)}</span>
      </label>
      <input
        type="range"
        min={0}
        name={name}
        max={maxPrice}
        step="1000"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className={`range range-primary ${size}`}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max : {formatPrice(maxPrice)}</span>
      </div>
    </div>
    // <div className="flex flex-col">
    //   <div className="mb-2 flex justify-between">
    //     <span>selected price</span>
    //     <span>${price}</span>
    //   </div>
    //   <div className="flex flex-col">
    //

    //     <div className="mt-2 flex justify-between">
    //       <span>0</span>
    //       <span>${maxPrice}</span>
    //     </div>
    //   </div>
    // </div>
  )
}
export default FormRange
