"use client"

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { formatPrice } from '@/lib/products'
import { cn } from '@/lib/utils'

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, totalItems } = useCart()
  const total = subtotal()
  const count = totalItems()

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [closeCart])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-charcoal"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-[420px] bg-warm-white shadow-[-4px_0_32px_rgba(46,40,37,0.08)] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-rose-pale">
              <div>
                <h2 className="font-serif text-[22px] text-charcoal">Mi Bolso</h2>
                <p className="font-sans text-xs text-muted-color mt-0.5">
                  {count} {count === 1 ? 'articulo' : 'articulos'}
                </p>
              </div>
              <button
                onClick={closeCart}
                className="p-2 text-charcoal-mid hover:text-rose transition-colors"
                aria-label="Cerrar carrito"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-12 h-12 text-rose-pale mb-4" />
                  <p className="font-serif text-lg text-charcoal mb-2">Tu bolso esta vacio</p>
                  <p className="font-sans text-sm text-muted-color mb-6">
                    Descubri nuestras piezas unicas
                  </p>
                  <button
                    onClick={closeCart}
                    className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-rose hover:text-rose-deep transition-colors"
                  >
                    Seguir comprando
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={item.id} className="flex gap-4 pb-6 border-b border-blush-light last:border-0">
                      {/* Image */}
                      <div className="relative w-[72px] h-[72px] bg-rose-pale rounded-sm overflow-hidden shrink-0">
                        <Image
                          src={item.image || '/images/placeholder.jpg'}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-[15px] text-charcoal truncate">
                          {item.name}
                        </h3>
                        {item.variant && (
                          <p className="font-sans text-xs text-muted-color mt-0.5">
                            {item.variant}
                          </p>
                        )}
                        
                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity Control */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 rounded-full border border-rose-mid flex items-center justify-center text-charcoal-mid hover:border-rose hover:text-rose transition-colors"
                              aria-label="Reducir cantidad"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-sans text-sm text-charcoal w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 rounded-full border border-rose-mid flex items-center justify-center text-charcoal-mid hover:border-rose hover:text-rose transition-colors"
                              aria-label="Aumentar cantidad"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Price */}
                          <span className="font-serif text-[17px] font-semibold text-rose-deep">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 text-muted-color hover:text-rose transition-colors self-start"
                        aria-label="Eliminar"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-rose-pale bg-cream">
                {/* Summary */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[13px] text-charcoal-mid">Subtotal</span>
                    <span className="font-sans text-[13px] text-charcoal">{formatPrice(total)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[13px] text-charcoal-mid">Envio</span>
                    <span className="font-sans text-[13px] text-muted-color">A coordinar</span>
                  </div>
                  <div className="pt-2 border-t border-rose-pale flex items-center justify-between">
                    <span className="font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal">
                      Total
                    </span>
                    <span className="font-serif text-2xl font-semibold text-charcoal">
                      {formatPrice(total)}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className={cn(
                    'w-full py-3.5 bg-rose text-white font-sans text-[11px] font-medium uppercase tracking-[0.1em]',
                    'flex items-center justify-center rounded-sm',
                    'hover:bg-rose-deep transition-colors',
                    'active:scale-[0.98]'
                  )}
                >
                  Finalizar compra
                </Link>
                <button
                  onClick={closeCart}
                  className="w-full mt-3 py-2 font-sans text-xs text-muted-color hover:text-rose transition-colors underline underline-offset-2 text-center"
                >
                  Seguir comprando
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
