import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { fetcher, queryKeys } from '../../queryClient'
import { TProduct } from '../../types'

import style from './ProductDetail.module.scss'

const ProductDetail = () => {
  const { id } = useParams()

  const { data, status } = useQuery<TProduct>([queryKeys.PRODUCTS, id], () => fetcher({
    method: 'GET',
    path: `/products/${id}`
  }))

  if (status !== 'success') {
    return (
      <div>로딩중 혹은 에러</div>
    )
  }

  const {
    category,
    image,
    price,
    rating,
    title,
    description 
  } = data

  return (
    <div className={style.productItem}>
      <p>{category}</p>
      <p>{title}</p>
      <img src={image} alt={title} />
      <span>${price}</span>
      <span>{rating.rate}</span>
      <span>${description}</span>
    </div>
  )
}

export default ProductDetail
