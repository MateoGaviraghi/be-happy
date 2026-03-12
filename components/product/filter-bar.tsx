"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react'
import { materials, type Material } from '@/lib/products'
import { cn } from '@/lib/utils'

interface FilterBarProps {
  selectedMaterial: string | null
  onMaterialChange: (material: string | null) => void
  sortBy: string
  onSortChange: (sort: string) => void
  totalProducts: number
  filteredCount: number
}

const sortOptions = [
  { value: 'newest', label: 'Mas nuevo' },
  { value: 'price_asc', label: 'Precio ↑' },
  { value: 'price_desc', label: 'Precio ↓' },
  { value: 'popular', label: 'Mas vendido' },
]

export function FilterBar({
  selectedMaterial,
  onMaterialChange,
  sortBy,
  onSortChange,
  totalProducts,
  filteredCount,
}: FilterBarProps) {
  const [isSortOpen, setIsSortOpen] = useState(false)

  const currentSort = sortOptions.find((s) => s.value === sortBy)

  return (
    <div className="sticky top-16 z-30 bg-warm-white border-b border-rose-mid/30 backdrop-blur-sm">
      <div className="mx-auto px-[var(--page-px)] h-[52px] flex items-center justify-between gap-4">
        {/* Left: Filters */}
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
          <span className="flex items-center gap-1.5 text-charcoal-mid shrink-0">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="font-sans text-[11px] font-medium uppercase tracking-[0.1em] hidden sm:inline">
              Filtrar
            </span>
          </span>

          {/* All Materials Button */}
          <button
            onClick={() => onMaterialChange(null)}
            className={cn(
              'shrink-0 px-3 py-1.5 rounded-sm font-sans text-[11px] uppercase tracking-[0.08em] transition-colors border',
              !selectedMaterial
                ? 'bg-rose text-white border-rose'
                : 'bg-white text-charcoal-mid border-rose-mid/50 hover:border-rose hover:text-rose'
            )}
          >
            Todos
          </button>

          {/* Material Chips */}
          {materials.map((material) => (
            <motion.button
              key={material}
              onClick={() => onMaterialChange(selectedMaterial === material ? null : material)}
              layout
              className={cn(
                'shrink-0 px-3 py-1.5 rounded-sm font-sans text-[11px] uppercase tracking-[0.08em] transition-colors border',
                selectedMaterial === material
                  ? 'bg-rose text-white border-rose'
                  : 'bg-white text-charcoal-mid border-rose-mid/50 hover:border-rose hover:text-rose'
              )}
            >
              {material}
            </motion.button>
          ))}

          {/* Clear Filter */}
          <AnimatePresence>
            {selectedMaterial && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => onMaterialChange(null)}
                className="shrink-0 p-1.5 text-muted-color hover:text-rose transition-colors"
                aria-label="Limpiar filtros"
              >
                <X className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Right: Sort & Count */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Results Count */}
          <span className="font-sans text-xs text-muted-color hidden md:block">
            Mostrando {filteredCount} de {totalProducts} accesorios
          </span>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-1.5 font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-charcoal-mid hover:text-rose transition-colors"
            >
              {currentSort?.label}
              <ChevronDown className={cn('w-4 h-4 transition-transform', isSortOpen && 'rotate-180')} />
            </button>

            <AnimatePresence>
              {isSortOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-40"
                    onClick={() => setIsSortOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute right-0 top-full mt-2 w-40 bg-white border border-rose-pale rounded-sm shadow-lg z-50 overflow-hidden"
                  >
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          onSortChange(option.value)
                          setIsSortOpen(false)
                        }}
                        className={cn(
                          'w-full px-4 py-2.5 text-left font-sans text-xs transition-colors',
                          sortBy === option.value
                            ? 'bg-rose-pale/50 text-rose'
                            : 'text-charcoal-mid hover:bg-cream'
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
