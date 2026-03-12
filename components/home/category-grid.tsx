"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    name: 'Collares',
    slug: 'collares',
    image: '/images/categories/collares.jpg',
    count: 12,
  },
  {
    name: 'Pulseras',
    slug: 'pulseras',
    image: '/images/categories/pulseras.jpg',
    count: 15,
  },
  {
    name: 'Tobilleras',
    slug: 'tobilleras',
    image: '/images/categories/tobilleras.jpg',
    count: 8,
  },
]

export function CategoryGrid() {
  return (
    <section className="py-[var(--section-py)] bg-cream">
      <div className="mx-auto px-[var(--page-px)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.article
              key={category.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/${category.slug}`} className="group block">
                <div className="relative aspect-square overflow-hidden rounded-sm">
                  {/* Image */}
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-rose-pale/0 group-hover:bg-rose-pale/30 transition-colors duration-300" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <h3 className="font-serif text-2xl text-charcoal">
                      {category.name}
                    </h3>
                    <span className="mt-2 font-sans text-xs text-muted-color">
                      {category.count} piezas
                    </span>
                    <span className="mt-4 inline-flex items-center gap-1 font-sans text-xs text-rose group-hover:gap-2 transition-all">
                      Ver todo <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
