"use client"

import { use } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Package, Truck, MapPin, Home } from 'lucide-react'

interface OrderPageProps {
  params: Promise<{ id: string }>
}

const orderSteps = [
  { id: 'confirmed', label: 'Confirmado', icon: Check },
  { id: 'preparing', label: 'Preparando', icon: Package },
  { id: 'shipped', label: 'Enviado', icon: Truck },
  { id: 'delivered', label: 'Entregado', icon: Home },
]

export default function OrderPage({ params }: OrderPageProps) {
  const { id } = use(params)
  const currentStatus = 0 // Confirmed

  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-16">
      <div className="mx-auto px-[var(--page-px)] max-w-2xl text-center">
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="w-20 h-20 mx-auto mb-6 bg-rose rounded-full flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Check className="w-10 h-10 text-white" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="font-serif text-4xl text-charcoal mb-3">
            Gracias por tu compra
          </h1>
          <p className="font-sans text-sm text-charcoal-mid mb-2">
            Tu pedido fue confirmado exitosamente
          </p>
          <p className="font-serif text-xl text-rose-deep">
            Pedido #{id}
          </p>
        </motion.div>

        {/* Order Status Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-white p-8 rounded-sm border border-rose-pale"
        >
          <h2 className="font-serif text-xl text-charcoal mb-8">Estado del pedido</h2>

          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-rose-pale" />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(currentStatus / (orderSteps.length - 1)) * 100}%` }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute top-6 left-0 h-0.5 bg-sage"
            />

            {/* Steps */}
            <div className="relative flex justify-between">
              {orderSteps.map((step, index) => {
                const Icon = step.icon
                const isCompleted = index <= currentStatus
                const isCurrent = index === currentStatus

                return (
                  <div key={step.id} className="flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                        isCompleted
                          ? 'bg-sage text-white'
                          : 'bg-warm-white border border-rose-mid text-muted-color'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    <span
                      className={`mt-3 font-sans text-xs uppercase tracking-[0.1em] ${
                        isCurrent ? 'text-rose font-medium' : isCompleted ? 'text-charcoal' : 'text-muted-color'
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 p-6 bg-cream rounded-sm"
        >
          <p className="font-sans text-sm text-charcoal-mid">
            Te enviamos los detalles de tu compra por email.
            <br />
            Si tenes alguna consulta, escribinos por WhatsApp.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="px-8 py-3.5 bg-rose text-white font-sans text-[11px] font-medium uppercase tracking-[0.1em] rounded-sm hover:bg-rose-deep transition-colors"
          >
            Seguir comprando
          </Link>
          <a
            href="https://wa.link/cq2ipg"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-charcoal-mid text-charcoal-mid font-sans text-[11px] font-medium uppercase tracking-[0.1em] rounded-sm hover:border-rose hover:text-rose transition-colors"
          >
            Consultar por WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  )
}
