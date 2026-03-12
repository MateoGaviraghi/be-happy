"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="py-[var(--section-py)] bg-blush-light">
      <div className="mx-auto px-[var(--page-px)]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Text Content - 60% */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 order-2 lg:order-1"
          >
            {/* Gold Line */}
            <div className="w-12 h-px bg-gold mb-6" />
            
            {/* Label */}
            <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-muted-color">
              Sobre Be Happy
            </span>

            {/* Title */}
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-light leading-tight text-charcoal">
              Piezas con alma,
              <br />
              nacidas en Santa Fe.
            </h2>

            {/* Body */}
            <p className="mt-6 font-sans text-sm font-light leading-relaxed text-charcoal-mid max-w-lg">
              Detras de cada accesorio hay manos que tejen, anudan y ensartan con 
              dedicacion. Be Happy nacio del amor por lo artesanal, de la conviccion 
              de que las piezas hechas a mano tienen un valor unico e irrepetible.
            </p>
            <p className="mt-4 font-sans text-sm font-light leading-relaxed text-charcoal-mid max-w-lg">
              Desde Santa Fe para todo el pais, creamos accesorios que acompanan 
              tus momentos especiales y te hacen sentir unica.
            </p>

            {/* CTA */}
            <Link
              href="/nosotras"
              className="mt-8 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.1em] text-rose hover:text-rose-deep transition-colors group"
            >
              Conoce nuestra historia
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Image - 40% */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] max-w-sm mx-auto lg:ml-auto rounded-sm overflow-hidden shadow-[0_16px_48px_rgba(196,127,114,0.12)]">
              <Image
                src="/images/about-be-happy.jpg"
                alt="Manos creando accesorios artesanales"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
