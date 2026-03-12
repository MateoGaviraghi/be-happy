import { Product, Category } from "./types";
export type { Product, Category };

// Mock products data - in production this would come from Supabase/Prisma
export const products: Product[] = [
  // COLLARES
  {
    id: "1",
    slug: "collar-luna-plata",
    name: "Collar Luna de Plata",
    description:
      "Delicado collar con dije de luna creciente en plata 925. Cadena de 42cm ajustable. Cada pieza es hecha a mano con dedicacion.",
    category: "COLLAR",
    price: 8500,
    images: [
      "/images/products/collar-luna-1.jpg",
      "/images/products/collar-luna-2.jpg",
    ],
    material: "Plata",
    isNew: true,
    stock: 5,
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    slug: "collar-perlas-naturales",
    name: "Collar Perlas Naturales",
    description:
      "Collar con perlas de rio naturales en tonos crema. Cierre en plata. Largo ajustable de 40 a 45cm.",
    category: "COLLAR",
    price: 12000,
    images: [
      "/images/products/collar-perlas-1.jpg",
      "/images/products/collar-perlas-2.jpg",
    ],
    material: "Plata",
    isNew: false,
    stock: 3,
    createdAt: new Date("2024-01-10"),
  },
  {
    id: "3",
    slug: "collar-cristales-rosa",
    name: "Collar Cristales Rosa",
    description:
      "Collar con cristales facetados en rosa cuarzo. Cadena dorada de 45cm. Ideal para ocasiones especiales.",
    category: "COLLAR",
    price: 7200,
    images: ["/images/products/collar-cristales-1.jpg"],
    material: "Cristal",
    isNew: true,
    stock: 8,
    createdAt: new Date("2024-01-20"),
  },
  {
    id: "4",
    slug: "collar-macrame-natural",
    name: "Collar Macrame Natural",
    description:
      "Collar artesanal en macrame con piedra natural. Hilo encerado color arena. Ajustable.",
    category: "COLLAR",
    price: 5500,
    images: ["/images/products/collar-macrame-1.jpg"],
    material: "Macrame",
    isNew: false,
    stock: 6,
    createdAt: new Date("2024-01-05"),
  },
  {
    id: "5",
    slug: "collar-corazon-dorado",
    name: "Collar Corazon Dorado",
    description:
      "Delicado collar con dije de corazon en acero dorado. Cadena de 40cm. Resistente al agua.",
    category: "COLLAR",
    price: 6800,
    images: ["/images/products/collar-corazon-1.jpg"],
    material: "Dorado",
    isNew: false,
    stock: 10,
    createdAt: new Date("2024-01-08"),
  },
  {
    id: "6",
    slug: "collar-cascada-plata",
    name: "Collar Cascada Plata",
    description:
      "Elegante collar multihilos en plata 925. Efecto cascada con cadenas de diferentes largos.",
    category: "COLLAR",
    price: 15000,
    images: ["/images/products/collar-cascada-1.jpg"],
    material: "Plata",
    isNew: true,
    stock: 2,
    createdAt: new Date("2024-01-22"),
  },

  // PULSERAS
  {
    id: "7",
    slug: "pulsera-infinito-plata",
    name: "Pulsera Infinito Plata",
    description:
      "Pulsera con simbolo infinito en plata 925. Cadena delicada de 18cm con extension.",
    category: "PULSERA",
    price: 4500,
    images: ["/images/products/pulsera-infinito-1.jpg"],
    material: "Plata",
    isNew: false,
    stock: 12,
    createdAt: new Date("2024-01-12"),
  },
  {
    id: "8",
    slug: "pulsera-piedras-naturales",
    name: "Pulsera Piedras Naturales",
    description:
      "Pulsera elastica con piedras naturales en tonos tierra. Cada piedra es unica.",
    category: "PULSERA",
    price: 3800,
    images: ["/images/products/pulsera-piedras-1.jpg"],
    material: "Cristal",
    isNew: true,
    stock: 15,
    createdAt: new Date("2024-01-18"),
  },
  {
    id: "9",
    slug: "pulsera-macrame-turquesa",
    name: "Pulsera Macrame Turquesa",
    description:
      "Pulsera tejida en macrame con piedra turquesa natural. Cierre corredizo ajustable.",
    category: "PULSERA",
    price: 3200,
    images: ["/images/products/pulsera-macrame-1.jpg"],
    material: "Macrame",
    isNew: false,
    stock: 8,
    createdAt: new Date("2024-01-03"),
  },
  {
    id: "10",
    slug: "pulsera-charm-dorada",
    name: "Pulsera Charm Dorada",
    description:
      "Pulsera con dijes variados en acero dorado. Incluye estrella, luna y corazon.",
    category: "PULSERA",
    price: 5200,
    images: ["/images/products/pulsera-charm-1.jpg"],
    material: "Dorado",
    isNew: true,
    stock: 7,
    createdAt: new Date("2024-01-25"),
  },
  {
    id: "11",
    slug: "pulsera-tejida-colores",
    name: "Pulsera Tejida Colores",
    description:
      "Pulsera tejida a mano con hilos de colores vibrantes. Cierre con broche.",
    category: "PULSERA",
    price: 2500,
    images: ["/images/products/pulsera-tejida-1.jpg"],
    material: "Tela",
    isNew: false,
    stock: 20,
    createdAt: new Date("2024-01-01"),
  },
  {
    id: "12",
    slug: "pulsera-perlas-mini",
    name: "Pulsera Perlas Mini",
    description:
      "Delicada pulsera con mini perlas de agua dulce. Cadena en plata 925.",
    category: "PULSERA",
    price: 6500,
    images: ["/images/products/pulsera-perlas-1.jpg"],
    material: "Plata",
    isNew: true,
    stock: 4,
    createdAt: new Date("2024-01-28"),
  },

  // TOBILLERAS
  {
    id: "13",
    slug: "tobillera-cadena-dorada",
    name: "Tobillera Cadena Dorada",
    description:
      "Tobillera simple en cadena dorada. Largo de 24cm con extension de 5cm.",
    category: "TOBILLERA",
    price: 3500,
    images: ["/images/products/tobillera-dorada-1.jpg"],
    material: "Dorado",
    isNew: false,
    stock: 10,
    createdAt: new Date("2024-01-14"),
  },
  {
    id: "14",
    slug: "tobillera-plata-estrella",
    name: "Tobillera Plata con Estrella",
    description:
      "Tobillera en plata 925 con dije de estrella. Perfecta para el verano.",
    category: "TOBILLERA",
    price: 4200,
    images: ["/images/products/tobillera-estrella-1.jpg"],
    material: "Plata",
    isNew: true,
    stock: 6,
    createdAt: new Date("2024-01-19"),
  },
  {
    id: "15",
    slug: "tobillera-cristales-multi",
    name: "Tobillera Cristales Multicolor",
    description:
      "Tobillera con pequenos cristales en colores del arcoiris. Cadena ajustable.",
    category: "TOBILLERA",
    price: 3800,
    images: ["/images/products/tobillera-cristales-1.jpg"],
    material: "Cristal",
    isNew: false,
    stock: 9,
    createdAt: new Date("2024-01-07"),
  },
  {
    id: "16",
    slug: "tobillera-macrame-concha",
    name: "Tobillera Macrame con Concha",
    description:
      "Tobillera artesanal en macrame con concha natural. Perfecta para la playa.",
    category: "TOBILLERA",
    price: 2800,
    images: ["/images/products/tobillera-macrame-1.jpg"],
    material: "Macrame",
    isNew: true,
    stock: 11,
    createdAt: new Date("2024-01-24"),
  },
  {
    id: "17",
    slug: "tobillera-doble-cadena",
    name: "Tobillera Doble Cadena",
    description:
      "Elegante tobillera de doble cadena en plata. Dos hilos que se unen en el cierre.",
    category: "TOBILLERA",
    price: 5000,
    images: ["/images/products/tobillera-doble-1.jpg"],
    material: "Plata",
    isNew: false,
    stock: 5,
    createdAt: new Date("2024-01-11"),
  },
  {
    id: "18",
    slug: "tobillera-charm-mar",
    name: "Tobillera Charm del Mar",
    description:
      "Tobillera con dijes marinos: estrella de mar, concha y perla. Acero inoxidable dorado.",
    category: "TOBILLERA",
    price: 4500,
    images: ["/images/products/tobillera-charm-1.jpg"],
    material: "Dorado",
    isNew: true,
    stock: 7,
    createdAt: new Date("2024-01-27"),
  },
];

// Helper functions
export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew);
}

export function getFeaturedProducts(limit = 4): Product[] {
  return [...products]
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, limit);
}

export function getRelatedProducts(
  currentSlug: string,
  category: Category,
  limit = 4,
): Product[] {
  return products
    .filter((p) => p.category === category && p.slug !== currentSlug)
    .slice(0, limit);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export const materials = [
  "Plata",
  "Dorado",
  "Cristal",
  "Tela",
  "Macrame",
] as const;
export type Material = (typeof materials)[number];

export const categoryLabels: Record<Category, string> = {
  COLLAR: "Collares",
  PULSERA: "Pulseras",
  TOBILLERA: "Tobilleras",
};

export const categorySlugMap: Record<string, Category> = {
  collares: "COLLAR",
  pulseras: "PULSERA",
  tobilleras: "TOBILLERA",
};
