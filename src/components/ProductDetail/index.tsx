import { Link } from 'react-router-dom'
import { TProduct } from '../../types'

import style from './ProductDetail.module.scss'

const ProductDetail = ({
  item: {  
    id,
    category,
    image,
    price,
    rating,
    title 
  },
}: {
  item: TProduct
}) => {
  return (
    <div className={style.productItem}>
      <p>{category}</p>
      <p>{title}</p>
      <img src={image} alt={title} />
      <span>${price}</span>
      <span>{rating.rate}</span>
    </div>
  )
}

export default ProductDetail