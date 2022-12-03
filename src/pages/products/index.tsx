import { useQuery } from '@tanstack/react-query'
import ProductItem from '../../components/ProductItem'

import { fetcher, queryKeys } from '../../queryClient'
import { TProduct } from '../../types'

import style from './Products.module.scss'

const ProductList = () => {
  const { data, status } = useQuery<TProduct[]>([queryKeys.PRODUCTS], () => fetcher({
    method: 'GET',
    path: '/products'
  }))

  /*
  category: "men's clothing"
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
  id: 1
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  price: 109.95
  rating: {rate: 3.9, count: 120}
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
  */

  if (status !== 'success') {
    return (
      <div>로딩중 혹은 에러</div>
    )
  }

  return (
    <div>
      <ul className={style.products}>
        {data.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </div>
  )
}

export default ProductList
