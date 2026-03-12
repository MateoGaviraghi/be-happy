"use client"

import { ProductCard } from './product-card'
import { Product } from '@/lib/types'

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="font-serif text-xl text-charcoal-mid">
          No encontramos accesorios con esos filtros
        </p>
        <p className="mt-2 font-sans text-sm text-muted-color">
          Proba cambiando los filtros para ver mas opciones
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rose-pale/30">
      {products.map((product, index) => (
        <div key={product.id} className="bg-warm-white p-4">
          <ProductCard product={product} index={index} />
        </div>
      ))}
    </div>
  )
}
