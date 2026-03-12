"use client"

import { useEffect } from 'react'
import { useCart } from '@/lib/cart'

// Redirect to checkout or open cart drawer
export default function CarritoPage() {
  const { openCart, items } = useCart()

  useEffect(() => {
    openCart()
    // If you want to redirect to checkout instead:
    // if (items.length > 0) {
    //   router.push('/checkout')
    // }
  }, [openCart])

  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-white pt-24">
      <div className="text-center">
        <p className="font-serif text-xl text-charcoal mb-2">
          {items.length > 0 ? 'Abriendo tu bolso...' : 'Tu bolso esta vacio'}
        </p>
        <p className="font-sans text-sm text-muted-color">
          Usa el icono del carrito en el header para ver tu bolso
        </p>
      </div>
    </div>
  )
}
