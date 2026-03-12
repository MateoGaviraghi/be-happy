"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, Minus, Plus, Check, Package, Share2, Leaf, Sparkles } from 'lucide-react'
import { Product, categoryLabels, formatPrice, getRelatedProducts } from '@/lib/products'
import { useCart } from '@/lib/cart'
import { ProductCard } from './product-card'
import { cn } from '@/lib/utils'

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { addItem } = useCart()

  const relatedProducts = getRelatedProducts(product.slug, product.category, 4)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0] || '/images/placeholder.jpg',
      })
    }
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1500)
  }

  const categorySlug = product.category === 'COLLAR' 
    ? 'collares' 
    : product.category === 'PULSERA' 
      ? 'pulseras' 
      : 'tobilleras'

  return (
    <>
      {/* Main Product Section */}
      <section className="pt-24 pb-16 bg-warm-white">
        <div className="mx-auto px-[var(--page-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Image */}
              <div className="relative aspect-square overflow-hidden rounded-sm bg-rose-pale group">
                <Image
                  src={product.images[selectedImage] || '/images/placeholder.jpg'}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3 mt-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={cn(
                        'relative w-20 h-20 overflow-hidden rounded-sm border-2 transition-colors',
                        selectedImage === index
                          ? 'border-rose'
                          : 'border-transparent hover:border-rose-mid'
                      )}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} - Vista ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 font-sans text-[11px] text-muted-color mb-4">
                <Link href="/" className="hover:text-rose transition-colors">Inicio</Link>
                <span className="text-rose-mid">/</span>
                <Link href={`/${categorySlug}`} className="hover:text-rose transition-colors">
                  {categoryLabels[product.category]}
                </Link>
                <span className="text-rose-mid">/</span>
                <span className="text-charcoal-mid">{product.name}</span>
              </nav>

              {/* Badges */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-sage-light text-sage font-sans text-[10px] uppercase tracking-wider rounded-sm">
                  <Leaf className="w-3 h-3" />
                  Hecho a mano
                </span>
                {product.isNew && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-rose-pale text-terracota font-sans text-[10px] uppercase tracking-wider rounded-sm">
                    <Sparkles className="w-3 h-3" />
                    Nuevo
                  </span>
                )}
              </div>

              {/* Name & Price */}
              <h1 className="font-serif text-3xl md:text-4xl text-charcoal">
                {product.name}
              </h1>
              <p className="mt-3 font-serif text-3xl font-semibold text-rose-deep">
                {formatPrice(product.price)}
              </p>

              {/* Separator */}
              <div className="my-6 h-px bg-rose-pale" />

              {/* Description */}
              <p className="font-sans text-sm font-light leading-relaxed text-charcoal-mid">
                {product.description}
              </p>

              {/* Material Badge */}
              {product.material && (
                <p className="mt-4 font-sans text-xs text-muted-color">
                  Material: <span className="text-charcoal-mid">{product.material}</span>
                </p>
              )}

              {/* Quantity Selector */}
              <div className="mt-8">
                <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-muted-color mb-2 block">
                  Cantidad
                </span>
                <div className="inline-flex items-center gap-3 border border-rose-mid rounded-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-charcoal-mid hover:text-rose transition-colors"
                    aria-label="Reducir cantidad"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-sans text-sm text-charcoal">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-charcoal-mid hover:text-rose transition-colors"
                    aria-label="Aumentar cantidad"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <motion.button
                onClick={handleAddToCart}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  'mt-6 w-full py-4 font-sans text-[11px] font-medium uppercase tracking-[0.1em] rounded-sm flex items-center justify-center gap-2 transition-colors',
                  isAdded
                    ? 'bg-sage text-white'
                    : 'bg-rose text-white hover:bg-rose-deep'
                )}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    Agregado al bolso
                  </>
                ) : (
                  'Agregar al bolso'
                )}
              </motion.button>

              {/* Wishlist */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={cn(
                  'mt-3 w-full py-3 border rounded-sm font-sans text-[11px] font-medium uppercase tracking-[0.1em] flex items-center justify-center gap-2 transition-colors',
                  isWishlisted
                    ? 'border-rose bg-rose-pale/50 text-rose'
                    : 'border-charcoal-mid text-charcoal-mid hover:border-rose hover:text-rose'
                )}
              >
                <Heart className={cn('w-4 h-4', isWishlisted && 'fill-current')} />
                {isWishlisted ? 'Guardado en favoritos' : 'Guardar en favoritos'}
              </button>

              {/* Shipping Info */}
              <div className="mt-8 p-4 bg-cream rounded-sm">
                <div className="flex items-start gap-3">
                  <Package className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  <div>
                    <p className="font-sans text-sm text-charcoal">
                      Envios a todo el pais · Retiro en Santa Fe
                    </p>
                    <Link
                      href="/envios"
                      className="font-sans text-xs text-rose hover:text-rose-deep transition-colors"
                    >
                      Ver mas info sobre envios
                    </Link>
                  </div>
                </div>
              </div>

              {/* Share */}
              <div className="mt-6 flex items-center gap-3">
                <span className="font-sans text-xs text-muted-color">Compartir:</span>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`Mira este accesorio de Be Happy: ${product.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-charcoal-mid hover:text-rose transition-colors"
                  aria-label="Compartir en WhatsApp"
                >
                  <Share2 className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-cream">
          <div className="mx-auto px-[var(--page-px)]">
            <h2 className="font-serif text-3xl font-light text-charcoal text-center mb-10">
              Tambien te puede gustar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
