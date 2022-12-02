import { useQuery } from '@tanstack/react-query'
import { fetcher, queryKeys } from '../../queryClient'

const ProductList = () => {
  const { data, status } = useQuery([queryKeys.PRODUCTS], () => fetcher({
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
      <ul>
        {data.map((product) => (
          // <ProductItem key={product.id} {...product} />
          <li key={product.id}>
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
