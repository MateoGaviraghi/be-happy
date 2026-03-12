"use client"

import { useState, useMemo } from 'react'
import { CategoryHero } from './category-hero'
import { FilterBar } from './filter-bar'
import { ProductGrid } from './product-grid'
import { Product, Category } from '@/lib/types'

interface CatalogPageProps {
  category: Category
  products: Product[]
}

export function CatalogPage({ category, products }: CatalogPageProps) {
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState('newest')

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    // Filter by material
    if (selectedMaterial) {
      filtered = filtered.filter((p) => p.material === selectedMaterial)
    }

    // Sort
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
      case 'popular':
        // In production, this would sort by sales/popularity
        filtered.sort((a, b) => b.stock - a.stock)
        break
    }

    return filtered
  }, [products, selectedMaterial, sortBy])

  return (
    <>
      <CategoryHero category={category} productCount={products.length} />
      <FilterBar
        selectedMaterial={selectedMaterial}
        onMaterialChange={setSelectedMaterial}
        sortBy={sortBy}
        onSortChange={setSortBy}
        totalProducts={products.length}
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
