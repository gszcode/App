import img1 from '../../images/1.jpg'
import img2 from '../../images/top1.jpg'
import img3 from '../../images/camera1.jpg'
import img4 from '../../images/jeans1.jpg'
import img5 from '../../images/camera2.jpg'
import img6 from '../../images/mi8.jpeg'
import img7 from '../../images/attire1.webp'
import img8 from '../../images/hipster.jpg'
import './FeaturedProducts.scss'
import { Product } from './Product'

const products = [
  {
    id: 1,
    img: img1,
    name: 'Notebook ultima generaciíon',
    rating: 4,
    reviews: 1,
    price: '$2000'
  },
  {
    id: 2,
    img: img2,
    name: 'Notebook ultima generaciíon',
    rating: 4,
    reviews: 1,
    price: '$2000'
  },
  {
    id: 3,
    img: img3,
    name: 'Notebook ultima generaciíon',
    rating: 4,
    reviews: 1,
    price: '$2000'
  },
  {
    id: 4,
    img: img4,
    name: 'Notebook ultima generaciíon',
    rating: 4,
    reviews: 1,
    price: '$2000'
  },
  {
    id: 5,
    img: img5,
    name: 'Notebook ultima generaciíon',
    rating: 4,
    reviews: 1,
    price: '$2000'
  },
  {
    id: 6,
    img: img6,
    name: 'Notebook ultima generaciíon',
    rating: 4,
    reviews: 1,
    price: '$2000'
  },
  {
    id: 7,
    img: img7,
    name: 'Notebook ultima generaciíon',
    rating: 4,
    reviews: 1,
    price: '$2000'
  },
  {
    id: 8,
    img: img8,
    name: 'Notebook ultima generaciíon',
    rating: 4,
    reviews: 1,
    price: '$2000'
  }
]

export const FeaturedProducts = () => {
  return (
    <section id="featured" className="featured">
      <h2 className="featured__title">Featured Products</h2>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  )
}
