import './Landing.scss'
import { BsMouse } from 'react-icons/bs'
import { FeaturedProducts } from '../FeaturedProducts/FeaturedProducts'

export function Landing() {
  return (
    <>
      <section className="landing">
        <div className="landing__welcome">
          <h1 className="landing__welcome__title">Welcome to Ecommerce</h1>
          <h3 className="landing__welcome__subtitle">FIND AMAZING PRODUCTS</h3>
          <a href="#featured" className="landing__welcome__scroll">
            Scroll <BsMouse />
          </a>
        </div>
      </section>
      <FeaturedProducts />
    </>
  )
}
