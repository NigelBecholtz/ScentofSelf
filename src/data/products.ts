export interface Product {
  id: string
  name: string
  price: number
  description: string
  longDescription: string
  sizes: string[]
  images: string[]
  featured: boolean
}

export const products: Product[] = [
  {
    id: 'silky-eau-de-parfum',
    name: 'SILKY EAU DE PARFUM',
    price: 49.95,
    description: 'A luxurious fragrance that embodies elegance and sophistication',
    longDescription: 'Silky Eau de Parfum is a captivating fragrance that combines delicate floral notes with warm, sensual undertones. Crafted with the finest ingredients, this perfume reflects your unique personality and leaves a lasting impression. The scent evolves throughout the day, revealing different layers of complexity that perfectly complement your individual style.',
    sizes: ['30ml', '50ml', '100ml'],
    images: [
      '/images/silky-1.webp',
      '/images/silky-2.webp',
      '/images/silky-3.webp',
    ],
    featured: true,
  },
]

