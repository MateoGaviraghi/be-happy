import Link from 'next/link'
import { Instagram, MessageCircle, MapPin, Heart } from 'lucide-react'

const navLinks = [
  { href: '/collares', label: 'Collares' },
  { href: '/pulseras', label: 'Pulseras' },
  { href: '/tobilleras', label: 'Tobilleras' },
  { href: '/novedades', label: 'Novedades' },
]

const infoLinks = [
  { href: '/envios', label: 'Envios' },
  { href: '/preguntas-frecuentes', label: 'Preguntas frecuentes' },
  { href: '/politica-cambios', label: 'Politica de cambios' },
]

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto px-[var(--page-px)] py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link href="/" className="font-serif text-2xl tracking-[0.05em] text-white">
              Be Happy
            </Link>
            <p className="mt-4 font-sans text-sm text-white/70 leading-relaxed">
              Accesorios hechos a mano con amor en Santa Fe, Argentina. Piezas unicas que cuentan tu historia.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com/accesoriosbehappy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-rose transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.link/cq2ipg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-rose transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-white/50 mb-4">
              Tienda
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/80 hover:text-rose transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-white/50 mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose mt-0.5 shrink-0" />
                <span className="font-sans text-sm text-white/80">
                  Santa Fe, Santa Fe<br />Argentina
                </span>
              </li>
              <li>
                <a
                  href="https://wa.link/cq2ipg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans text-sm text-white/80 hover:text-rose transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-rose shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/accesoriosbehappy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans text-sm text-white/80 hover:text-rose transition-colors"
                >
                  <Instagram className="w-4 h-4 text-rose shrink-0" />
                  @accesoriosbehappy
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-white/50 mb-4">
              Informacion
            </h4>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/80 hover:text-rose transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/50">
            © {new Date().getFullYear()} Be Happy — Accesorios y Deco. Todos los derechos reservados.
          </p>
          <p className="font-sans text-xs text-white/50 flex items-center gap-1">
            Hecho con <Heart className="w-3 h-3 text-rose fill-rose" /> en Santa Fe
          </p>
        </div>
      </div>
    </footer>
  )
}
