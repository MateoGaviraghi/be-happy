"use client"

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FilterBar } from '@/components/product/filter-bar'
import { ProductGrid } from '@/components/product/product-grid'
import { getNewProducts } from '@/lib/products'

export default function NovedadesPage() {
  const allProducts = getNewProducts()
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState('newest')

  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts]

    if (selectedMaterial) {
      filtered = filtered.filter((p) => p.material === selectedMaterial)
    }

    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        break
      case 'price_asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price_desc':
        filtered.sort((a, b) => b.price - a.price)
        break
    }

    return filtered
  }, [allProducts, selectedMaterial, sortBy])

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-terracota/10 to-cream">
        <div className="mx-auto px-[var(--page-px)] text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-[10px] uppercase tracking-[0.15em] text-terracota"
          >
            Recien llegadas
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 font-serif text-5xl md:text-6xl font-light text-charcoal"
          >
            Novedades
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 font-sans text-sm text-charcoal-mid max-w-md mx-auto"
          >
            Las ultimas piezas que agregamos a nuestra coleccion.
          </motion.p>
          
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 inline-block font-sans text-xs text-muted-color"
          >
            {allProducts.length} piezas nuevas
          </motion.span>
        </div>
      </section>

      <FilterBar
        selectedMaterial={selectedMaterial}
        onMaterialChange={setSelectedMaterial}
        sortBy={sortBy}
        onSortChange={setSortBy}
        totalProducts={allProducts.length}
        filteredCount={filteredProducts.length}
      />

      <section className="py-8 bg-warm-white">
        <div className="mx-auto px-[var(--page-px)]">
          <ProductGrid products={filteredProducts} />
        </div>
      </section>
    </>
  )
}
