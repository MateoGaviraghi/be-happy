import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, Leaf, Sparkles, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nosotras',
  description: 'Conoce la historia de Be Happy. Accesorios hechos a mano con amor en Santa Fe, Argentina.',
}

const values = [
  {
    icon: Heart,
    title: 'Hecho con amor',
    description: 'Cada pieza es creada con dedicacion y atencion al detalle.',
  },
  {
    icon: Leaf,
    title: 'Materiales naturales',
    description: 'Usamos piedras, cristales y materiales de origen responsable.',
  },
  {
    icon: Sparkles,
    title: 'Piezas unicas',
    description: 'Disenos exclusivos que no encontraras en otro lugar.',
  },
  {
    icon: MapPin,
    title: 'Santa Fe',
    description: 'Orgullosamente locales, con envios a todo el pais.',
  },
]

export default function NosotrasPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blush-light to-cream">
        <div className="mx-auto px-[var(--page-px)] max-w-4xl text-center">
          <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-sage">
            Nuestra historia
          </span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl font-light text-charcoal">
            Conoce Be Happy
          </h1>
          <p className="mt-6 font-sans text-sm font-light leading-relaxed text-charcoal-mid max-w-xl mx-auto">
            Somos un emprendimiento nacido en Santa Fe, con la mision de crear 
            accesorios unicos que acompanen tus momentos especiales.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-[var(--section-py)] bg-warm-white">
        <div className="mx-auto px-[var(--page-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="/images/about-be-happy.jpg"
                alt="Creando accesorios artesanales"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <div className="w-12 h-px bg-gold mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal leading-tight">
                Piezas con alma,
                <br />
                nacidas en Santa Fe.
              </h2>
              <div className="mt-6 space-y-4 font-sans text-sm font-light leading-relaxed text-charcoal-mid">
                <p>
                  Be Happy nacio de la pasion por lo artesanal y la conviccion de 
                  que cada accesorio cuenta una historia. Detras de cada collar, 
                  pulsera y tobillera hay horas de dedicacion, amor y creatividad.
                </p>
                <p>
                  Empezamos como un pequeno proyecto personal, compartiendo 
                  nuestras creaciones en Instagram. Hoy, gracias a ustedes, 
                  llegamos a todo el pais con piezas que se convierten en 
                  companeras de momentos unicos.
                </p>
                <p>
                  Trabajamos con materiales de calidad: plata, piedras naturales, 
                  cristales y macrame. Cada material es seleccionado cuidadosamente 
                  para crear accesorios que perduren en el tiempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-[var(--section-py)] bg-cream">
        <div className="mx-auto px-[var(--page-px)]">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-light text-charcoal">
              Nuestros valores
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-rose-pale/50 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-rose" />
                  </div>
                  <h3 className="font-serif text-lg text-charcoal mb-2">
                    {value.title}
                  </h3>
                  <p className="font-sans text-xs text-charcoal-mid leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-beige">
        <div className="mx-auto px-[var(--page-px)] text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-charcoal mb-4">
            Encontra tu pieza perfecta
          </h2>
          <p className="font-sans text-sm text-charcoal-mid mb-8 max-w-md mx-auto">
            Explora nuestra coleccion de accesorios hechos a mano con amor.
          </p>
          <Link
            href="/collares"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-rose text-white font-sans text-[11px] font-medium uppercase tracking-[0.1em] rounded-sm hover:bg-rose-deep transition-colors"
          >
            Ver coleccion
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
