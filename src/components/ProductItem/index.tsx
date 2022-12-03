import { TProduct } from '../../types'

import style from './ProductItem.module.scss'

const ProductItem = ({
  category,
  image,
  price,
  rating,
  title 
}: TProduct) => {
  return (
    <li className={style.productItem}>
      <p>{category}</p>
      <p>{title}</p>
      <img src={image} alt={title} />
      <span>${price}</span>
      <span>{rating.rate}</span>
    </li>
  )
}

export default ProductItem