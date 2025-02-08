import { fetchProductByID } from '@/api/products'
import ProductListItem from '../productListItems'

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const product = await fetchProductByID(Number(id))

  return (
    <div className='max-w-screen-xl mx-auto w-full'>
      <ProductListItem product={product} />
    </div>
  )
}
