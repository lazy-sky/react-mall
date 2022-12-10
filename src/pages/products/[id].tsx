import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import ProductDetail from '../../components/ProductDetail'
import { fetcher, queryKeys } from '../../queryClient'
import { TProduct } from '../../types'

const ProductDetailPage = () => {
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

  return (
    <>
      <h2>상품 상세</h2>
      <ProductDetail item={data} />
    </>
  )
}

export default ProductDetailPage
