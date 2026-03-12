"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Instagram, Heart } from 'lucide-react'

// Mock Instagram posts - in production this would come from Instagram API
const instagramPosts = [
  { id: '1', image: '/images/instagram/post-1.jpg', likes: 124 },
  { id: '2', image: '/images/instagram/post-2.jpg', likes: 89 },
  { id: '3', image: '/images/instagram/post-3.jpg', likes: 156 },
  { id: '4', image: '/images/instagram/post-4.jpg', likes: 203 },
  { id: '5', image: '/images/instagram/post-5.jpg', likes: 78 },
  { id: '6', image: '/images/instagram/post-6.jpg', likes: 142 },
]

export function InstagramFeed() {
  return (
    <section className="py-[var(--section-py)] bg-warm-white">
      <div className="mx-auto px-[var(--page-px)]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-muted-color">
            Seguinos en
          </span>
          <h2 className="mt-2 font-serif text-3xl font-light text-charcoal">
            @accesoriosbehappy
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/accesoriosbehappy"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden"
            >
              <Image
                src={post.image}
                alt="Instagram post"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-4">
                  <Instagram className="w-6 h-6 text-white" />
                  <span className="flex items-center gap-1 text-white text-sm">
                    <Heart className="w-4 h-4 fill-white" />
                    {post.likes}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <a
            href="https://instagram.com/accesoriosbehappy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.1em] text-rose hover:text-rose-deep transition-colors"
          >
            <Instagram className="w-4 h-4" />
            Seguir en Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
