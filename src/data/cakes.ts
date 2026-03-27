import { Cake, Testimonial, GalleryImage, Category } from '../types'
import { getAvailableImages, getImageCount } from '../utils/imageLoader'

interface CakeTemplate {
    id: number
    name: string
    category: Category
    description: string
    price: number
    flavors: string[]
    sizes: string[]
    flavorProfile: string
    ingredients: string[]
    occasion: string
    servings: string
}

const CAKE_TEMPLATES: CakeTemplate[] = [
    {
        id: 1,
        name: "Chocolate Dream",
        category: "birthday",
        description: "Rich chocolate cake layered with silky ganache and topped with chocolate shavings. A chocolate lover's paradise.",
        price: 45,
        flavors: ["Chocolate", "Dark Chocolate", "Milk Chocolate"],
        sizes: ["6 inch (serves 8)", "8 inch (serves 16)", "10 inch (serves 24)"],
        flavorProfile: "Deep, bittersweet cocoa with velvety ganache undertones and a hint of espresso",
        ingredients: ["Belgian dark chocolate", "Dutch cocoa powder", "free-range eggs", "Madagascar vanilla", "heavy cream ganache"],
        occasion: "Birthdays, anniversaries, chocolate lovers' celebrations",
        servings: "8–24 guests"
    },
    {
        id: 2,
        name: "Vanilla Bliss",
        category: "birthday",
        description: "Light and fluffy vanilla cake with Madagascar vanilla buttercream. Classic and elegant.",
        price: 40,
        flavors: ["Vanilla", "Madagascar Vanilla", "French Vanilla"],
        sizes: ["6 inch (serves 8)", "8 inch (serves 16)", "10 inch (serves 24)"],
        flavorProfile: "Delicate, fragrant vanilla with buttery sweetness and a light floral finish",
        ingredients: ["Madagascar vanilla beans", "European-style butter", "cake flour", "free-range eggs", "pure cane sugar"],
        occasion: "Birthdays, tea parties, elegant afternoon gatherings",
        servings: "8–24 guests"
    },
    {
        id: 3,
        name: "Red Velvet Romance",
        category: "birthday",
        description: "Traditional red velvet cake with cream cheese frosting. A timeless favorite for celebrations.",
        price: 50,
        flavors: ["Classic Red Velvet", "Red Velvet with Chocolate"],
        sizes: ["6 inch (serves 8)", "8 inch (serves 16)", "10 inch (serves 24)"],
        flavorProfile: "Subtle cocoa with a tangy buttermilk richness, balanced by sweet cream cheese",
        ingredients: ["buttermilk", "Dutch cocoa", "cream cheese", "natural red coloring", "white vinegar", "pure vanilla"],
        occasion: "Valentine's Day, romantic celebrations, birthdays, weddings",
        servings: "8–24 guests"
    },
    {
        id: 4,
        name: "Classic White Wedding",
        category: "wedding",
        description: "Elegant three-tier white cake with delicate sugar flowers. Perfect for your special day.",
        price: 250,
        flavors: ["Vanilla", "White Chocolate", "Almond"],
        sizes: ["2 Tier", "3 Tier", "4 Tier"],
        flavorProfile: "Light, ethereal vanilla with almond undertones and a whisper of white chocolate",
        ingredients: ["egg whites", "cake flour", "vanilla bean paste", "white chocolate", "almond extract", "Swiss meringue buttercream"],
        occasion: "Weddings, engagement parties, formal receptions",
        servings: "50–150 guests"
    },
    {
        id: 5,
        name: "Rustic Naked Cake",
        category: "wedding",
        description: "Semi-naked cake with fresh flowers and berries. Natural beauty for modern weddings.",
        price: 200,
        flavors: ["Vanilla", "Lemon", "Carrot"],
        sizes: ["2 Tier", "3 Tier"],
        flavorProfile: "Fresh, natural flavors with seasonal fruit accents and delicate buttercream",
        ingredients: ["seasonal berries", "fresh edible flowers", "vanilla sponge", "Swiss meringue buttercream", "citrus zest"],
        occasion: "Rustic weddings, garden parties, bohemian celebrations",
        servings: "30–80 guests"
    },
    {
        id: 6,
        name: "Gold Drip Wedding",
        category: "wedding",
        description: "Stunning white cake with gold drip effect and edible gold leaf accents.",
        price: 300,
        flavors: ["White Chocolate", "Champagne", "Vanilla"],
        sizes: ["3 Tier", "4 Tier"],
        flavorProfile: "Luxurious champagne-infused sponge with white chocolate and a hint of elderflower",
        ingredients: ["champagne reduction", "white chocolate", "elderflower syrup", "edible 24k gold leaf", "vanilla bean", "mascarpone"],
        occasion: "Luxury weddings, milestone anniversaries, gala events",
        servings: "80–200 guests"
    },
    {
        id: 7,
        name: "Chocolate Cupcakes (12pc)",
        category: "cupcakes",
        description: "Decadent chocolate cupcakes with chocolate buttercream. Sold per dozen.",
        price: 30,
        flavors: ["Chocolate", "Double Chocolate", "Chocolate Mint"],
        sizes: ["Regular", "Mini", "Jumbo"],
        flavorProfile: "Intense chocolate with a moist, tender crumb and rich buttercream crown",
        ingredients: ["Dutch cocoa", "dark chocolate chips", "brown butter", "espresso powder", "chocolate buttercream"],
        occasion: "Birthday parties, office celebrations, dessert tables",
        servings: "12 pieces"
    },
    {
        id: 8,
        name: "Vanilla Cupcakes (12pc)",
        category: "cupcakes",
        description: "Classic vanilla cupcakes with vanilla buttercream. Light and delicious.",
        price: 25,
        flavors: ["Vanilla", "Vanilla Bean", "French Vanilla"],
        sizes: ["Regular", "Mini", "Jumbo"],
        flavorProfile: "Pure, classic vanilla with a cloud-like texture and silky buttercream",
        ingredients: ["Madagascar vanilla", "European butter", "cake flour", "buttermilk", "vanilla buttercream"],
        occasion: "Baby showers, kids' parties, afternoon tea",
        servings: "12 pieces"
    },
    {
        id: 9,
        name: "Rainbow Cupcakes (12pc)",
        category: "cupcakes",
        description: "Colorful vanilla cupcakes with rainbow sprinkles. Fun for parties!",
        price: 35,
        flavors: ["Confetti", "Birthday Cake", "Funfetti"],
        sizes: ["Regular", "Mini"],
        flavorProfile: "Sweet vanilla birthday cake flavor with colorful sprinkle crunch",
        ingredients: ["rainbow sprinkles", "vanilla extract", "butter", "cake flour", "funfetti buttercream"],
        occasion: "Children's birthdays, pride celebrations, festive parties",
        servings: "12 pieces"
    },
    {
        id: 10,
        name: "Strawberry Dream",
        category: "seasonal",
        description: "Fresh strawberry cake with strawberry cream cheese frosting. Perfect for summer!",
        price: 55,
        flavors: ["Fresh Strawberry", "Strawberry Vanilla"],
        sizes: ["6 inch (serves 8)", "8 inch (serves 16)"],
        flavorProfile: "Bright, fruity strawberry with a tangy cream cheese finish and fresh berry aroma",
        ingredients: ["fresh strawberries", "strawberry purée", "cream cheese", "vanilla", "lemon zest"],
        occasion: "Summer parties, Valentine's Day, garden events, bridal showers",
        servings: "8–16 guests"
    },
    {
        id: 11,
        name: "Pumpkin Spice",
        category: "seasonal",
        description: "Warm pumpkin cake with cinnamon cream cheese frosting. Cozy autumn flavors.",
        price: 48,
        flavors: ["Pumpkin Spice", "Pumpkin Chocolate"],
        sizes: ["6 inch (serves 8)", "8 inch (serves 16)"],
        flavorProfile: "Warm, spiced pumpkin with cinnamon, nutmeg, and a velvety cream cheese swirl",
        ingredients: ["real pumpkin purée", "cinnamon", "nutmeg", "ginger", "cream cheese", "maple syrup"],
        occasion: "Autumn celebrations, Thanksgiving, harvest festivals, cozy gatherings",
        servings: "8–16 guests"
    },
    {
        id: 12,
        name: "Custom Celebration",
        category: "custom",
        description: "Your dream cake, designed exactly as you imagine. Let's create something unique!",
        price: 80,
        flavors: ["Custom Selection"],
        sizes: ["Custom Size"],
        flavorProfile: "Bespoke flavor combinations tailored to your personal taste and vision",
        ingredients: ["custom-selected premium ingredients", "your choice of fillings", "personalized decorations"],
        occasion: "Any occasion — from intimate dinners to grand celebrations",
        servings: "Custom sizing"
    }
]

// Dynamically maps available local images to cakes — no repetition, auto-adapts
const buildCakesData = (): Cake[] => {
    const images = getAvailableImages()

    return CAKE_TEMPLATES.map((cake, index) => {
        const imageIndex = index % Math.max(images.length, 1)
        const image = images[imageIndex]

        return {
            ...cake,
            image: image?.url || (images[0]?.url ?? ''),
        }
    }).slice(0, Math.max(images.length, CAKE_TEMPLATES.length))
}

export const cakesData: Cake[] = buildCakesData()

export const getCakeById = (id: number): Cake | undefined => {
    return cakesData.find((cake) => cake.id === id)
}

export const getCakesByCategory = (category: Category): Cake[] => {
    return category === 'all'
        ? cakesData
        : cakesData.filter((cake) => cake.category === category)
}

export const TOTAL_AVAILABLE_IMAGES = (): number => getImageCount()

export const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'All Cakes' },
    { id: 'birthday', label: 'Birthday' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'cupcakes', label: 'Cupcakes' },
    { id: 'custom', label: 'Custom' },
    { id: 'seasonal', label: 'Seasonal' },
]

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah M.",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        rating: 5,
        date: "December 2024",
        text: "The most beautiful wedding cake ever! Tarie exceeded all my expectations. Everyone at the wedding couldn't stop raving about it!"
    },
    {
        id: 2,
        name: "John D.",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        rating: 5,
        date: "November 2024",
        text: "Ordered cupcakes for my daughter's birthday. They were not only delicious but looked absolutely stunning. Will definitely order again!"
    },
    {
        id: 3,
        name: "Emily R.",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        rating: 5,
        date: "October 2024",
        text: "The custom cake for my mom's 50th was perfect! Tarie really understood what I wanted and delivered beyond my expectations."
    },
    {
        id: 4,
        name: "Michael T.",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
        rating: 5,
        date: "September 2024",
        text: "Best cakes in Harare! I've ordered multiple times and every single time the quality is outstanding. Highly recommend!"
    }
]

// Gallery images dynamically mapped from local images
const buildGalleryImages = (): GalleryImage[] => {
    const images = getAvailableImages()

    const galleryAlts = [
        "Chocolate Dream", "White Wedding", "Vanilla Birthday", "Rustic Naked",
        "Gold Drip", "Chocolate Cupcakes", "Vanilla Cupcakes", "Rainbow Cupcakes",
        "Strawberry Dream", "Pumpkin Spice", "Custom Celebration", "Master Baker"
    ]

    return images.map((img, index) => ({
        id: index + 1,
        src: img.url,
        alt: img.name || galleryAlts[index] || `Cake ${index + 1}`,
    }))
}

export const galleryImages: GalleryImage[] = buildGalleryImages()
