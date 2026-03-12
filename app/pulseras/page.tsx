import { Metadata } from 'next'
import { CatalogPage } from '@/components/product/catalog-page'
import { getProductsByCategory } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Pulseras',
  description: 'Explora nuestra seleccion de pulseras artesanales. Piezas hechas a mano con amor en Santa Fe, Argentina.',
}

export default function PulserasPage() {
  const products = getProductsByCategory('PULSERA')
  
  return <CatalogPage category="PULSERA" products={products} />
}
