import { Link } from 'react-router-dom'
import './FeaturedProducts.scss'

export const Product = ({ id, img, name, rating, reviews, price }) => {
  return (
    <Link to={`/products/${id}`}>
      <article className="featured__product">
        <img className="featured__product__img" src={img} alt={name} />
        <h3 className="featured__product__title">{name}</h3>
        <p className="featured__product__rating">
          {rating} ({reviews} reviews)
        </p>
        <span className="featured__product__price">{price}</span>
      </article>
    </Link>
  )
}
