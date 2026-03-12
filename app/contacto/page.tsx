"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Instagram, MapPin, Mail, Send, Check } from 'lucide-react'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send the form data to an API
    setIsSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blush-light to-cream">
        <div className="mx-auto px-[var(--page-px)] max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-[10px] uppercase tracking-[0.15em] text-sage"
          >
            Contacto
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-serif text-5xl md:text-6xl font-light text-charcoal"
          >
            Hablemos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 font-sans text-sm font-light leading-relaxed text-charcoal-mid max-w-xl mx-auto"
          >
            Tenes alguna consulta, queres un pedido especial o simplemente saludarnos? 
            Estamos aca para ayudarte.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-[var(--section-py)] bg-warm-white">
        <div className="mx-auto px-[var(--page-px)] max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="font-serif text-2xl text-charcoal mb-8">
                Otras formas de contactarnos
              </h2>

              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href="https://wa.link/cq2ipg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 bg-cream rounded-sm hover:bg-beige/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-charcoal">WhatsApp</h3>
                    <p className="font-sans text-sm text-charcoal-mid mt-1">
                      La forma mas rapida de contactarnos. Respondemos en el dia.
                    </p>
                    <span className="inline-block mt-2 font-sans text-xs text-rose hover:text-rose-deep transition-colors">
                      Escribinos ahora →
                    </span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/accesoriosbehappy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 bg-cream rounded-sm hover:bg-beige/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-charcoal">Instagram</h3>
                    <p className="font-sans text-sm text-charcoal-mid mt-1">
                      Seguinos para ver nuestras ultimas creaciones y novedades.
                    </p>
                    <span className="inline-block mt-2 font-sans text-xs text-rose hover:text-rose-deep transition-colors">
                      @accesoriosbehappy →
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-5 bg-cream rounded-sm">
                  <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-sage" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-charcoal">Ubicacion</h3>
                    <p className="font-sans text-sm text-charcoal-mid mt-1">
                      Santa Fe, Santa Fe, Argentina
                    </p>
                    <span className="inline-block mt-2 font-sans text-xs text-muted-color">
                      Retiros en zona centro, coordinamos por WhatsApp
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-5 bg-cream rounded-sm">
                  <div className="w-12 h-12 bg-rose-pale rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-rose" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-charcoal">Email</h3>
                    <p className="font-sans text-sm text-charcoal-mid mt-1">
                      hola@behappyaccesorios.com
                    </p>
                    <span className="inline-block mt-2 font-sans text-xs text-muted-color">
                      Respondemos en 24-48 horas habiles
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-white p-8 rounded-sm border border-rose-pale">
                <h2 className="font-serif text-2xl text-charcoal mb-6">
                  Envianos un mensaje
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-sage rounded-full flex items-center justify-center">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-serif text-xl text-charcoal mb-2">
                      Mensaje enviado
                    </h3>
                    <p className="font-sans text-sm text-charcoal-mid">
                      Te responderemos a la brevedad. Gracias!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block font-sans text-[10px] uppercase tracking-[0.15em] text-muted-color mb-2">
                        Nombre
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 border border-rose-mid rounded-sm font-sans text-sm text-charcoal bg-warm-white focus:outline-none focus:border-rose transition-colors"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-[10px] uppercase tracking-[0.15em] text-muted-color mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 border border-rose-mid rounded-sm font-sans text-sm text-charcoal bg-warm-white focus:outline-none focus:border-rose transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-[10px] uppercase tracking-[0.15em] text-muted-color mb-2">
                        Mensaje
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-rose-mid rounded-sm font-sans text-sm text-charcoal bg-warm-white focus:outline-none focus:border-rose transition-colors resize-none"
                        placeholder="Escribi tu mensaje..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-rose text-white font-sans text-[11px] font-medium uppercase tracking-[0.1em] rounded-sm hover:bg-rose-deep transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Enviar mensaje
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
