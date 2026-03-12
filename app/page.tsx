import { Hero } from '@/components/home/hero'
import { CategoryGrid } from '@/components/home/category-grid'
import { FeaturedProducts } from '@/components/home/featured-products'
import { AboutSection } from '@/components/home/about-section'
import { ContactBanner } from '@/components/home/contact-banner'
import { InstagramFeed } from '@/components/home/instagram-feed'

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <AboutSection />
      <ContactBanner />
      <InstagramFeed />
    </>
  )
}
