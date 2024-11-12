import { Link } from 'react-router-dom'
import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'
const carouselImages = [hero1, hero2, hero3, hero4]
console.log(carouselImages)
const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-24">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl">
          We’re changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl leading-8 text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <div className="mt-10">
          <Link to="/products" className="capitalize btn btn-primary">
            our products
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image) => {
          return (
            <div className="carousel-item" key={image}>
              <img
                src={image}
                className="h-full w-80 rounded-box object-cover"
                alt="hero"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Hero
