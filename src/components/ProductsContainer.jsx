import { useLoaderData } from 'react-router-dom'
import ProductsGrid from './ProductsGrid'
import ProductsList from './ProductsList'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import { useState } from 'react'

const ProductsContainer = () => {
  const [layout, setLayout] = useState('grid')
  const { meta } = useLoaderData()
  const { total } = meta.pagination

  const setActiveClass = (pattern) => {
    return `btn btn-circle btn-sm ${
      pattern === layout
        ? 'btn-primary text-primary-content'
        : 'btn-ghost text-base-content'
    }`
  }
  return (
    <div>
      <div className="flex justify-between border-b border-base-300 pb-5">
        <h3>
          {total} product{total > 1 && 's'}
        </h3>
        <div className="flex gap-x-4">
          <button
            onClick={() => setLayout('grid')}
            className={setActiveClass('grid')}
          >
            <BsFillGridFill />
          </button>
          <button
            onClick={() => setLayout('list')}
            className={setActiveClass('list')}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div>{layout === 'grid' ? <ProductsGrid /> : <ProductsList />}</div>
    </div>
  )
}
export default ProductsContainer
