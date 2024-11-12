import { Hero } from '../components'
import { customFetch } from '../utils'
import Products from './Products'

const url = '/products?featured=true'

export const loader = async () => {
  const response = await customFetch(url)
  const products = response.data.data

  return { products }
}
const Landing = () => {
  return (
    <div>
      <Hero />
      <Products />
    </div>
  )
}
export default Landing
