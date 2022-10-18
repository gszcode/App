import './Landing.scss'
import { BsMouse } from 'react-icons/bs'

export default function Landing() {
  return (
    <section className="landing">
      <div className="landing__welcome">
        <h1 className="landing__welcome--title">Welcome to Ecommerce</h1>
        <h3 className="landing__welcome--subtitle">FIND AMAZING PRODUCTS</h3>
        <a href="#features" className="landing__welcome--scroll">
          Scroll <BsMouse />
        </a>
      </div>
    </section>
  )
}
