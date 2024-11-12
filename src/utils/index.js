import axios from 'axios'

const url = 'https://strapi-store-server.onrender.com/api'

export const customFetch = axios.create({
  baseURL: url,
})

export const formatPrice = (price) => {
  const dollarAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2))
  return dollarAmount
}
