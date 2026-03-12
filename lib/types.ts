export type Category = 'COLLAR' | 'PULSERA' | 'TOBILLERA'

export type OrderStatus = 'PENDING' | 'PREPARING' | 'SHIPPED' | 'DELIVERED'

export interface Variant {
  id: string
  productId: string
  label: string
  stock: number
}

export interface Product {
  id: string
  slug: string
  name: string
  description: string
  category: Category
  price: number
  images: string[]
  material?: string
  isNew: boolean
  stock: number
  variants?: Variant[]
  createdAt: Date
}

export interface OrderItem {
  id: string
  orderId: string
  productId: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface Order {
  id: string
  status: OrderStatus
  items: OrderItem[]
  customerName: string
  email: string
  phone: string
  shippingMethod: string
  address?: string
  total: number
  paymentMethod: string
  createdAt: Date
}

export interface FilterState {
  material: string | null
  priceRange: [number, number]
  sortBy: 'newest' | 'price_asc' | 'price_desc' | 'popular'
}
