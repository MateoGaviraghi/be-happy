"use client"

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function ContactBanner() {
  return (
    <section className="py-16 bg-beige">
      <div className="mx-auto px-[var(--page-px)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="w-12 h-12 mx-auto mb-4 bg-sage/10 rounded-full flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-sage" />
          </div>
          
          <h2 className="font-serif text-2xl md:text-3xl font-light text-charcoal">
            Tenes dudas o queres encargar algo especial?
          </h2>
          
          <p className="mt-3 font-sans text-sm text-charcoal-mid max-w-md mx-auto">
            Escribinos y te ayudamos a encontrar la pieza perfecta para vos.
          </p>
          
          <a
            href="https://wa.link/cq2ipg"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 bg-rose text-white font-sans text-[11px] font-medium uppercase tracking-[0.1em] rounded-sm hover:bg-rose-deep transition-colors"
          >
            Escribinos →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
