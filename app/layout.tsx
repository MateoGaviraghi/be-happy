import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CartDrawer } from '@/components/layout/cart-drawer'
import { WhatsAppButton } from '@/components/layout/whatsapp-button'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Be Happy — Accesorios y Deco | Santa Fe, Argentina',
    template: '%s | Be Happy',
  },
  description: 'Collares, pulseras y tobilleras hechas a mano con amor en Santa Fe. Piezas unicas y artesanales para vos.',
  keywords: ['accesorios', 'collares', 'pulseras', 'tobilleras', 'hecho a mano', 'artesanal', 'Santa Fe', 'Argentina'],
  authors: [{ name: 'Be Happy Accesorios' }],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'Be Happy — Accesorios y Deco',
  },
}

export const viewport: Viewport = {
  themeColor: '#FDFAF6',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-warm-white text-charcoal">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CartDrawer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
