"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/collares', label: 'Collares' },
  { href: '/pulseras', label: 'Pulseras' },
  { href: '/tobilleras', label: 'Tobilleras' },
  { href: '/novedades', label: 'Novedades' },
  { href: '/nosotras', label: 'Nosotras' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { openCart, totalItems } = useCart()
  const itemCount = totalItems()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out',
          isScrolled
            ? 'bg-warm-white/92 backdrop-blur-[24px] border-b border-rose-mid/20'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto px-[var(--page-px)] h-16 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-serif text-[22px] tracking-[0.05em] text-charcoal hover:text-rose transition-colors"
          >
            Be Happy
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative font-sans text-[11px] font-medium uppercase tracking-[0.12em] transition-colors',
                  pathname === link.href
                    ? 'text-rose'
                    : 'text-charcoal-mid hover:text-rose'
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-1/2 -translate-x-1/2 h-[1px] bg-rose transition-all duration-300',
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-4">
            <button
              className="p-2 text-charcoal-mid hover:text-rose transition-colors"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/favoritos"
              className="p-2 text-charcoal-mid hover:text-rose transition-colors hidden sm:block"
              aria-label="Favoritos"
            >
              <Heart className="w-5 h-5" />
            </Link>
            <button
              onClick={openCart}
              className="relative p-2 text-charcoal-mid hover:text-rose transition-colors"
              aria-label="Carrito"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <motion.span
                  key={itemCount}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-rose text-white text-[10px] font-medium rounded-full flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              )}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-charcoal-mid hover:text-rose transition-colors md:hidden"
              aria-label={isMobileMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-40 bg-warm-white border-b border-rose-mid/20 md:hidden"
          >
            <nav className="flex flex-col py-4 px-[var(--page-px)]">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'block py-3 font-sans text-[13px] font-medium uppercase tracking-[0.1em] border-b border-rose-pale/50 transition-colors',
                      pathname === link.href
                        ? 'text-rose'
                        : 'text-charcoal-mid hover:text-rose'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Link
                  href="/favoritos"
                  className="flex items-center gap-2 py-3 font-sans text-[13px] font-medium uppercase tracking-[0.1em] text-charcoal-mid hover:text-rose transition-colors"
                >
                  <Heart className="w-4 h-4" />
                  Favoritos
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
