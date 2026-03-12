"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Plus, Check } from "lucide-react";
import { Product, categoryLabels } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    addItem({
      id: product.id,
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0] || "/images/placeholder.jpg",
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <Link href={`/producto/${product.slug}`} className="block">
        <motion.div
          animate={{
            y: isHovered ? -5 : 0,
            boxShadow: isHovered
              ? "0 16px 48px rgba(196, 127, 114, 0.14)"
              : "0 0 0 rgba(196, 127, 114, 0)",
          }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-warm-white rounded-sm overflow-hidden"
        >
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-rose-pale">
            <motion.div
              animate={{ scale: isHovered ? 1.06 : 1 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0"
            >
              <Image
                src={product.images[0] || "/images/placeholder.jpg"}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>

            {/* New Badge */}
            {product.isNew && (
              <span className="absolute top-3 left-3 px-2 py-0.5 bg-terracota text-white font-sans text-[10px] font-medium uppercase tracking-wider rounded-sm">
                Nuevo
              </span>
            )}

            {/* Wishlist Button */}
            <motion.button
              onClick={handleWishlist}
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered || isWishlisted ? 1 : 0 }}
              transition={{ duration: 0.25 }}
              className={cn(
                "absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                isWishlisted
                  ? "bg-rose text-white"
                  : "bg-white/90 text-charcoal-mid hover:text-rose",
              )}
              aria-label={
                isWishlisted ? "Quitar de favoritos" : "Agregar a favoritos"
              }
            >
              <Heart
                className={cn("w-4 h-4", isWishlisted && "fill-current")}
              />
            </motion.button>
          </div>

          {/* Info */}
          <div className="p-4">
            {/* Category Tag */}
            <span className="font-sans text-[10px] uppercase tracking-[0.12em] text-sage">
              {categoryLabels[product.category]}
            </span>

            {/* Name */}
            <h3 className="mt-1 font-serif text-[17px] text-charcoal leading-tight line-clamp-2">
              {product.name}
            </h3>

            {/* Price & Add Button */}
            <div className="flex items-center justify-between mt-3">
              <span className="font-serif text-[19px] font-semibold text-rose-deep">
                {formatPrice(product.price)}
              </span>

              <motion.button
                onClick={handleAddToCart}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "w-[30px] h-[30px] rounded-full flex items-center justify-center transition-colors",
                  isAdded
                    ? "bg-sage text-white"
                    : "bg-rose text-white hover:bg-rose-deep",
                )}
                aria-label="Agregar al carrito"
              >
                {isAdded ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
}
