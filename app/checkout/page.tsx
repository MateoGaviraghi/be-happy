"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronLeft, MapPin, CreditCard, Building2, MessageCircle } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { formatPrice } from '@/lib/products'
import { cn } from '@/lib/utils'

type Step = 1 | 2 | 3

interface FormData {
  name: string
  email: string
  phone: string
  shippingMethod: 'pickup' | 'shipping' | 'whatsapp'
  address: string
  city: string
  province: string
  postalCode: string
  paymentMethod: 'mercadopago' | 'transfer'
}

const steps = [
  { number: 1, label: 'Tus datos' },
  { number: 2, label: 'Envio' },
  { number: 3, label: 'Pago' },
]

export default function CheckoutPage() {
  const router = useRouter()
  const { items, subtotal, clearCart } = useCart()
  const [currentStep, setCurrentStep] = useState<Step>(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    shippingMethod: 'pickup',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    paymentMethod: 'mercadopago',
  })

  const total = subtotal()

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((currentStep + 1) as Step)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as Step)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    // Simulate order creation
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    // Generate order ID
    const orderId = `BH-${Date.now().toString(36).toUpperCase()}`
    
    // Clear cart and redirect
    clearCart()
    router.push(`/orden/${orderId}`)
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm-white">
        <div className="text-center">
          <p className="font-serif text-xl text-charcoal mb-4">Tu bolso esta vacio</p>
          <Link
            href="/"
            className="font-sans text-sm text-rose hover:text-rose-deep transition-colors underline"
          >
            Volver a la tienda
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-warm-white pt-24 pb-16">
      <div className="mx-auto px-[var(--page-px)] max-w-6xl">
        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      'w-8 h-8 rounded-full flex items-center justify-center font-sans text-xs font-medium transition-colors',
                      currentStep > step.number
                        ? 'bg-sage text-white'
                        : currentStep === step.number
                          ? 'bg-rose text-white'
                          : 'border border-rose-mid bg-white text-charcoal-mid'
                    )}
                  >
                    {currentStep > step.number ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <span
                    className={cn(
                      'font-sans text-xs uppercase tracking-[0.1em] hidden sm:inline',
                      currentStep >= step.number ? 'text-charcoal' : 'text-muted-color'
                    )}
                  >
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      'w-12 md:w-20 h-px ml-4',
                      currentStep > step.number ? 'bg-sage' : 'bg-rose-mid'
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form Section */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {/* Step 1: Customer Data */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white p-6 md:p-8 rounded-sm border border-rose-pale"
                >
                  <h2 className="font-serif text-2xl text-charcoal mb-6">Tus datos</h2>
                  
                  <div className="space-y-5">
                    <div>
                      <label className="block font-sans text-[10px] uppercase tracking-[0.15em] text-muted-color mb-2">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateFormData('name', e.target.value)}
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
                        onChange={(e) => updateFormData('email', e.target.value)}
                        className="w-full px-4 py-3 border border-rose-mid rounded-sm font-sans text-sm text-charcoal bg-warm-white focus:outline-none focus:border-rose transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-sans text-[10px] uppercase tracking-[0.15em] text-muted-color mb-2">
                        Telefono
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-rose-mid rounded-sm font-sans text-sm text-charcoal bg-warm-white focus:outline-none focus:border-rose transition-colors"
                        placeholder="+54 9 342 123 4567"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleNext}
                    disabled={!formData.name || !formData.email || !formData.phone}
                    className="mt-8 w-full py-4 bg-rose text-white font-sans text-[11px] font-medium uppercase tracking-[0.1em] rounded-sm hover:bg-rose-deep transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continuar
                  </button>
                </motion.div>
              )}

              {/* Step 2: Shipping */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white p-6 md:p-8 rounded-sm border border-rose-pale"
                >
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-1 font-sans text-xs text-muted-color hover:text-rose transition-colors mb-4"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Volver
                  </button>
                  
                  <h2 className="font-serif text-2xl text-charcoal mb-6">Metodo de envio</h2>
                  
                  <div className="space-y-4">
                    {/* Pickup Option */}
                    <label
                      className={cn(
                        'flex items-start gap-4 p-4 border rounded-sm cursor-pointer transition-colors',
                        formData.shippingMethod === 'pickup'
                          ? 'border-rose bg-rose-pale/30'
                          : 'border-rose-mid hover:border-rose'
                      )}
                    >
                      <input
                        type="radio"
                        name="shipping"
                        checked={formData.shippingMethod === 'pickup'}
                        onChange={() => updateFormData('shippingMethod', 'pickup')}
                        className="sr-only"
                      />
                      <div className={cn(
                        'w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5',
                        formData.shippingMethod === 'pickup' ? 'border-rose' : 'border-rose-mid'
                      )}>
                        {formData.shippingMethod === 'pickup' && (
                          <div className="w-2.5 h-2.5 rounded-full bg-rose" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-rose" />
                          <span className="font-sans text-sm font-medium text-charcoal">
                            Retiro en Santa Fe
                          </span>
                          <span className="font-sans text-xs text-sage font-medium">Gratis</span>
                        </div>
                        <p className="mt-1 font-sans text-xs text-muted-color">
                          Coordinamos punto de encuentro en zona centro
                        </p>
                      </div>
                    </label>

                    {/* Shipping Option */}
                    <label
                      className={cn(
                        'flex items-start gap-4 p-4 border rounded-sm cursor-pointer transition-colors',
                        formData.shippingMethod === 'shipping'
                          ? 'border-rose bg-rose-pale/30'
                          : 'border-rose-mid hover:border-rose'
                      )}
                    >
                      <input
                        type="radio"
                        name="shipping"
                        checked={formData.shippingMethod === 'shipping'}
                        onChange={() => updateFormData('shippingMethod', 'shipping')}
                        className="sr-only"
                      />
                      <div className={cn(
                        'w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5',
                        formData.shippingMethod === 'shipping' ? 'border-rose' : 'border-rose-mid'
                      )}>
                        {formData.shippingMethod === 'shipping' && (
                          <div className="w-2.5 h-2.5 rounded-full bg-rose" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-rose" />
                          <span className="font-sans text-sm font-medium text-charcoal">
                            Envio por correo
                          </span>
                        </div>
                        <p className="mt-1 font-sans text-xs text-muted-color">
                          Costo segun destino (desde $2.500)
                        </p>
                      </div>
                    </label>

                    {/* WhatsApp Option */}
                    <label
                      className={cn(
                        'flex items-start gap-4 p-4 border rounded-sm cursor-pointer transition-colors',
                        formData.shippingMethod === 'whatsapp'
                          ? 'border-rose bg-rose-pale/30'
                          : 'border-rose-mid hover:border-rose'
                      )}
                    >
                      <input
                        type="radio"
                        name="shipping"
                        checked={formData.shippingMethod === 'whatsapp'}
                        onChange={() => updateFormData('shippingMethod', 'whatsapp')}
                        className="sr-only"
                      />
                      <div className={cn(
                        'w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5',
                        formData.shippingMethod === 'whatsapp' ? 'border-rose' : 'border-rose-mid'
                      )}>
                        {formData.shippingMethod === 'whatsapp' && (
                          <div className="w-2.5 h-2.5 rounded-full bg-rose" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <MessageCircle className="w-4 h-4 text-rose" />
                          <span className="font-sans text-sm font-medium text-charcoal">
                            Coordinar por WhatsApp
                          </span>
                        </div>
                        <p className="mt-1 font-sans text-xs text-muted-color">
                          Te contactamos para definir la mejor opcion
                        </p>
                      </div>
                    </label>
                  </div>

                  {/* Address Fields */}
                  {formData.shippingMethod === 'shipping' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-6 space-y-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block font-sans text-[10px] uppercase tracking-[0.15em] text-muted-color mb-2">
                            Direccion
                          </label>
                          <input
                            type="text"
                            value={formData.address}
                            onChange={(e) => updateFormData('address', e.target.value)}
                            className="w-full px-4 py-3 border border-rose-mid rounded-sm font-sans text-sm text-charcoal bg-warm-white focus:outline-none focus:border-rose transition-colors"
                            placeholder="Calle y numero"
                          />
                        </div>
                        <div>
                          <label className="block font-sans text-[10px] uppercase tracking-[0.15em] text-muted-color mb-2">
                            Ciudad
                          </label>
                          <input
                            type="text"
                            value={formData.city}
                            onChange={(e) => updateFormData('city', e.target.value)}
                            className="w-full px-4 py-3 border border-rose-mid rounded-sm font-sans text-sm text-charcoal bg-warm-white focus:outline-none focus:border-rose transition-colors"
                            placeholder="Tu ciudad"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block font-sans text-[10px] uppercase tracking-[0.15em] text-muted-color mb-2">
                            Provincia
                          </label>
                          <input
                            type="text"
                            value={formData.province}
                            onChange={(e) => updateFormData('province', e.target.value)}
                            className="w-full px-4 py-3 border border-rose-mid rounded-sm font-sans text-sm text-charcoal bg-warm-white focus:outline-none focus:border-rose transition-colors"
                            placeholder="Provincia"
                          />
                        </div>
                        <div>
                          <label className="block font-sans text-[10px] uppercase tracking-[0.15em] text-muted-color mb-2">
                            Codigo Postal
                          </label>
                          <input
                            type="text"
                            value={formData.postalCode}
                            onChange={(e) => updateFormData('postalCode', e.target.value)}
                            className="w-full px-4 py-3 border border-rose-mid rounded-sm font-sans text-sm text-charcoal bg-warm-white focus:outline-none focus:border-rose transition-colors"
                            placeholder="CP"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <button
                    onClick={handleNext}
                    className="mt-8 w-full py-4 bg-rose text-white font-sans text-[11px] font-medium uppercase tracking-[0.1em] rounded-sm hover:bg-rose-deep transition-colors"
                  >
                    Continuar
                  </button>
                </motion.div>
              )}

              {/* Step 3: Payment */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white p-6 md:p-8 rounded-sm border border-rose-pale"
                >
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-1 font-sans text-xs text-muted-color hover:text-rose transition-colors mb-4"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Volver
                  </button>
                  
                  <h2 className="font-serif text-2xl text-charcoal mb-6">Metodo de pago</h2>
                  
                  <div className="space-y-4">
                    {/* Mercado Pago Option */}
                    <label
                      className={cn(
                        'flex items-start gap-4 p-4 border rounded-sm cursor-pointer transition-colors',
                        formData.paymentMethod === 'mercadopago'
                          ? 'border-rose bg-rose-pale/30'
                          : 'border-rose-mid hover:border-rose'
                      )}
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={formData.paymentMethod === 'mercadopago'}
                        onChange={() => updateFormData('paymentMethod', 'mercadopago')}
                        className="sr-only"
                      />
                      <div className={cn(
                        'w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5',
                        formData.paymentMethod === 'mercadopago' ? 'border-rose' : 'border-rose-mid'
                      )}>
                        {formData.paymentMethod === 'mercadopago' && (
                          <div className="w-2.5 h-2.5 rounded-full bg-rose" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4 text-[#00B1EA]" />
                          <span className="font-sans text-sm font-medium text-charcoal">
                            Mercado Pago
                          </span>
                        </div>
                        <p className="mt-1 font-sans text-xs text-muted-color">
                          Tarjeta de credito, debito o dinero en cuenta
                        </p>
                      </div>
                    </label>

                    {/* Transfer Option */}
                    <label
                      className={cn(
                        'flex items-start gap-4 p-4 border rounded-sm cursor-pointer transition-colors',
                        formData.paymentMethod === 'transfer'
                          ? 'border-rose bg-rose-pale/30'
                          : 'border-rose-mid hover:border-rose'
                      )}
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={formData.paymentMethod === 'transfer'}
                        onChange={() => updateFormData('paymentMethod', 'transfer')}
                        className="sr-only"
                      />
                      <div className={cn(
                        'w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5',
                        formData.paymentMethod === 'transfer' ? 'border-rose' : 'border-rose-mid'
                      )}>
                        {formData.paymentMethod === 'transfer' && (
                          <div className="w-2.5 h-2.5 rounded-full bg-rose" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-sage" />
                          <span className="font-sans text-sm font-medium text-charcoal">
                            Transferencia bancaria
                          </span>
                        </div>
                        <p className="mt-1 font-sans text-xs text-muted-color">
                          CBU o Alias
                        </p>
                      </div>
                    </label>
                  </div>

                  {/* Transfer Details */}
                  {formData.paymentMethod === 'transfer' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-6 p-4 bg-cream rounded-sm"
                    >
                      <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-muted-color mb-3">
                        Datos para transferencia
                      </p>
                      <div className="space-y-2 font-sans text-sm text-charcoal">
                        <p><span className="text-muted-color">Banco:</span> Banco Nacion</p>
                        <p><span className="text-muted-color">Alias:</span> behappy.accesorios</p>
                        <p><span className="text-muted-color">CBU:</span> 0110012345678901234567</p>
                        <p><span className="text-muted-color">Titular:</span> Be Happy Accesorios</p>
                      </div>
                    </motion.div>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="mt-8 w-full py-4 bg-rose text-white font-sans text-[11px] font-medium uppercase tracking-[0.1em] rounded-sm hover:bg-rose-deep transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Procesando...
                      </>
                    ) : formData.paymentMethod === 'mercadopago' ? (
                      'Pagar con Mercado Pago'
                    ) : (
                      'Ya transferi, confirmar pedido'
                    )}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-cream p-6 rounded-sm sticky top-24">
              <h3 className="font-serif text-lg text-charcoal mb-4">Tu pedido</h3>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative w-16 h-16 bg-rose-pale rounded-sm overflow-hidden shrink-0">
                      <Image
                        src={item.image || '/images/placeholder.jpg'}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-sm text-charcoal truncate">{item.name}</p>
                      <p className="font-sans text-xs text-muted-color">Cant: {item.quantity}</p>
                      <p className="font-serif text-sm font-semibold text-rose-deep mt-1">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-rose-pale pt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm text-charcoal-mid">Subtotal</span>
                  <span className="font-sans text-sm text-charcoal">{formatPrice(total)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm text-charcoal-mid">Envio</span>
                  <span className="font-sans text-sm text-muted-color">
                    {formData.shippingMethod === 'pickup' ? 'Gratis' : 'A calcular'}
                  </span>
                </div>
                <div className="pt-2 border-t border-rose-pale flex items-center justify-between">
                  <span className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-charcoal">
                    Total
                  </span>
                  <span className="font-serif text-2xl font-semibold text-charcoal">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
