import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductDetail } from '@/components/product/product-detail'
import { getProductBySlug, products, formatPrice } from '@/lib/products'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return { title: 'Producto no encontrado' }
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Be Happy`,
      description: product.description,
      images: product.images[0] ? [product.images[0]] : [],
    },
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}
