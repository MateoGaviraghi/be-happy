"use client"

import { motion } from 'framer-motion'
import { Category, categoryLabels } from '@/lib/products'
import { cn } from '@/lib/utils'

interface CategoryHeroProps {
  category: Category
  productCount: number
}

const categoryGradients: Record<Category, string> = {
  COLLAR: 'from-blush-light to-cream',
  PULSERA: 'from-rose-pale/50 to-warm-white',
  TOBILLERA: 'from-sage-light/50 to-cream',
}

const categoryDescriptions: Record<Category, string> = {
  COLLAR: 'Piezas que enmarcan tu rostro y expresan tu estilo unico.',
  PULSERA: 'Complementos delicados para acompanar tus manos.',
  TOBILLERA: 'Detalles sutiles que completan tu look de verano.',
}

export function CategoryHero({ category, productCount }: CategoryHeroProps) {
  return (
    <section className={cn('pt-24 pb-12 bg-gradient-to-br', categoryGradients[category])}>
      <div className="mx-auto px-[var(--page-px)] text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-sans text-[10px] uppercase tracking-[0.15em] text-muted-color"
        >
          Coleccion
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 font-serif text-5xl md:text-6xl font-light text-charcoal"
        >
          {categoryLabels[category]}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 font-sans text-sm text-charcoal-mid max-w-md mx-auto"
        >
          {categoryDescriptions[category]}
        </motion.p>
        
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 inline-block font-sans text-xs text-muted-color"
        >
          {productCount} piezas
        </motion.span>
      </div>
    </section>
  )
}
