import { Link } from 'react-router-dom'
import { TProduct } from '../../types'

import style from './ProductItem.module.scss'

const ProductItem = ({
  id,
  category,
  image,
  price,
  rating,
  title 
}: TProduct) => {
  return (
    <li className={style.productItem}>
      <Link to={`/products/${id}`}>
        <p>{category}</p>
        <p>{title}</p>
        <img src={image} alt={title} />
        <span>${price}</span>
        <span>{rating.rate}</span>
      </Link>
    </li>
  )
}

export default ProductItem