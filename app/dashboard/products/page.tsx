import { listProducts } from '@/api/products'
import ProductListItem from './productListItems'

export default async function ProductsPage() {
  const products = await listProducts()
  return (
    <div className=' flex flex-row flex-wrap gap-4'>
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </div>
  )
}
