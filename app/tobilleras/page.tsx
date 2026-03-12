import { Metadata } from 'next'
import { CatalogPage } from '@/components/product/catalog-page'
import { getProductsByCategory } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Tobilleras',
  description: 'Tobilleras artesanales perfectas para el verano. Hechas a mano con cadenas, macrame y piedras naturales.',
}

export default function TobillerasPage() {
  const products = getProductsByCategory('TOBILLERA')
  
  return <CatalogPage category="TOBILLERA" products={products} />
}
