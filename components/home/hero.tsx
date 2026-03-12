"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown, Leaf } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blush-light to-cream overflow-hidden">
      <div className="mx-auto w-full px-[var(--page-px)] py-24 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Text Content - 60% */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-3 text-center lg:text-left"
          >
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block font-sans text-[10px] uppercase tracking-[0.15em] text-sage"
            >
              — Hecho a mano · Santa Fe, Argentina
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1] text-charcoal text-balance"
            >
              Piezas que
              <br />
              cuentan tu
              <br />
              historia.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 font-serif text-xl italic text-rose"
            >
              Collares, pulseras y tobilleras unicos para vos.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-4 font-sans text-sm font-light leading-relaxed text-charcoal-mid max-w-md mx-auto lg:mx-0"
            >
              Cada accesorio Be Happy esta hecho a mano con amor en Santa Fe.
              Encontra la pieza que te represente.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/collares"
                className="px-8 py-3.5 bg-rose text-white font-sans text-[11px] font-medium uppercase tracking-[0.1em] rounded-sm hover:bg-rose-deep transition-colors"
              >
                Ver coleccion
              </Link>
              <Link
                href="/novedades"
                className="px-8 py-3.5 border border-charcoal-mid text-charcoal-mid font-sans text-[11px] font-medium uppercase tracking-[0.1em] rounded-sm hover:border-rose hover:text-rose transition-colors"
              >
                Novedades →
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Content - 40% */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-2 relative"
          >
            {/* Main Image Container - Organic Shape */}
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <div 
                className="absolute inset-0 rounded-[40%_60%_65%_35%/55%_45%_55%_45%] overflow-hidden shadow-[0_24px_64px_rgba(196,127,114,0.25)]"
              >
                <Image
                  src="/images/hero-be-happy.jpg"
                  alt="Collar artesanal Be Happy sobre hoja verde"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 md:bottom-8 md:left-0 bg-white border border-rose-pale rounded-lg px-4 py-3 shadow-md flex items-center gap-2"
              >
                <Leaf className="w-4 h-4 text-sage" />
                <span className="font-sans text-xs text-charcoal">100% hecho a mano</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-rose-mid" />
        </motion.div>
      </motion.div>
    </section>
  )
}
