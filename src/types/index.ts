export interface Cake {
    id: number
    name: string
    category: Category
    description: string
    price: number
    image: string
    flavors?: string[]
    sizes?: string[]
    flavorProfile?: string
    ingredients?: string[]
    occasion?: string
    servings?: string
}

export type Category = 'all' | 'birthday' | 'wedding' | 'cupcakes' | 'custom' | 'seasonal' | 'specialty'

export interface CartItem {
    cake: Cake
    quantity: number
    selectedFlavor?: string
    selectedSize?: string
}

export interface Testimonial {
    id: number
    name: string
    photo: string
    rating: number
    date: string
    text: string
}

export interface GalleryImage {
    id: number
    src: string
    alt: string
}
