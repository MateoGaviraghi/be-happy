import { Metadata } from 'next'
import { CatalogPage } from '@/components/product/catalog-page'
import { getProductsByCategory } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Collares',
  description: 'Descubri nuestra coleccion de collares artesanales hechos a mano en Santa Fe. Piezas unicas en plata, cristal y macrame.',
}

export default function CollaresPage() {
  const products = getProductsByCategory('COLLAR')
  
  return <CatalogPage category="COLLAR" products={products} />
}
