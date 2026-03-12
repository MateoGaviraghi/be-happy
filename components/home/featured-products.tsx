"use client"

import { motion } from 'framer-motion'
import { ProductCard } from '@/components/product/product-card'
import { getFeaturedProducts } from '@/lib/products'

export function FeaturedProducts() {
  const products = getFeaturedProducts(4)

  return (
    <section className="py-[var(--section-py)] bg-warm-white">
      <div className="mx-auto px-[var(--page-px)]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl font-light text-charcoal">
            Lo mas amado
          </h2>
          <p className="mt-3 font-sans text-sm font-light italic text-charcoal-mid">
            Las piezas favoritas de nuestras clientas
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
