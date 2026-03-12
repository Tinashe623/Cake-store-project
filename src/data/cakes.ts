import { Cake, Testimonial, GalleryImage, Category } from '../types'

export const cakesData: Cake[] = [
    {
        id: 1,
        name: "Chocolate Dream",
        category: "birthday",
        description: "Rich chocolate cake layered with silky ganache and topped with chocolate shavings. A chocolate lover's paradise.",
        price: 45,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
        flavors: ["Chocolate", "Dark Chocolate", "Milk Chocolate"],
        sizes: ["6 inch (serves 8)", "8 inch (serves 16)", "10 inch (serves 24)"]
    },
    {
        id: 2,
        name: "Vanilla Bliss",
        category: "birthday",
        description: "Light and fluffy vanilla cake with Madagascar vanilla buttercream. Classic and elegant.",
        price: 40,
        image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=400&h=300&fit=crop",
        flavors: ["Vanilla", "Madagascar Vanilla", "French Vanilla"],
        sizes: ["6 inch (serves 8)", "8 inch (serves 16)", "10 inch (serves 24)"]
    },
    {
        id: 3,
        name: "Red Velvet Romance",
        category: "birthday",
        description: "Traditional red velvet cake with cream cheese frosting. A timeless favorite for celebrations.",
        price: 50,
        image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=400&h=300&fit=crop",
        flavors: ["Classic Red Velvet", "Red Velvet with Chocolate"],
        sizes: ["6 inch (serves 8)", "8 inch (serves 16)", "10 inch (serves 24)"]
    },
    {
        id: 4,
        name: "Classic White Wedding",
        category: "wedding",
        description: "Elegant three-tier white cake with delicate sugar flowers. Perfect for your special day.",
        price: 250,
        image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=400&h=300&fit=crop",
        flavors: ["Vanilla", "White Chocolate", "Almond"],
        sizes: ["2 Tier", "3 Tier", "4 Tier"]
    },
    {
        id: 5,
        name: "Rustic Naked Cake",
        category: "wedding",
        description: "Semi-naked cake with fresh flowers and berries. Natural beauty for modern weddings.",
        price: 200,
        image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=400&h=300&fit=crop",
        flavors: ["Vanilla", "Lemon", "Carrot"],
        sizes: ["2 Tier", "3 Tier"]
    },
    {
        id: 6,
        name: "Gold Drip Wedding",
        category: "wedding",
        description: "Stunning white cake with gold drip effect and edible gold leaf accents.",
        price: 300,
        image: "https://images.unsplash.com/photo-1563729768-6af58466dfd9?w=400&h=300&fit=crop",
        flavors: ["White Chocolate", "Champagne", "Vanilla"],
        sizes: ["3 Tier", "4 Tier"]
    },
    {
        id: 7,
        name: "Chocolate Cupcakes (12pc)",
        category: "cupcakes",
        description: "Decadent chocolate cupcakes with chocolate buttercream. Sold per dozen.",
        price: 30,
        image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=300&fit=crop",
        flavors: ["Chocolate", "Double Chocolate", "Chocolate Mint"],
        sizes: ["Regular", "Mini", "Jumbo"]
    },
    {
        id: 8,
        name: "Vanilla Cupcakes (12pc)",
        category: "cupcakes",
        description: "Classic vanilla cupcakes with vanilla buttercream. Light and delicious.",
        price: 25,
        image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=300&fit=crop",
        flavors: ["Vanilla", "Vanilla Bean", "French Vanilla"],
        sizes: ["Regular", "Mini", "Jumbo"]
    },
    {
        id: 9,
        name: "Rainbow Cupcakes (12pc)",
        category: "cupcakes",
        description: "Colorful vanilla cupcakes with rainbow sprinkles. Fun for parties!",
        price: 35,
        image: "https://images.unsplash.com/photo-1599785209707-306a98893304?w=400&h=300&fit=crop",
        flavors: ["Confetti", "Birthday Cake", "Funfetti"],
        sizes: ["Regular", "Mini"]
    },
    {
        id: 10,
        name: "Strawberry Dream",
        category: "seasonal",
        description: "Fresh strawberry cake with strawberry cream cheese frosting. Perfect for summer!",
        price: 55,
        image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop",
        flavors: ["Fresh Strawberry", "Strawberry Vanilla"],
        sizes: ["6 inch (serves 8)", "8 inch (serves 16)"]
    },
    {
        id: 11,
        name: "Pumpkin Spice",
        category: "seasonal",
        description: "Warm pumpkin cake with cinnamon cream cheese frosting. Cozy autumn flavors.",
        price: 48,
        image: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=400&h=300&fit=crop",
        flavors: ["Pumpkin Spice", "Pumpkin Chocolate"],
        sizes: ["6 inch (serves 8)", "8 inch (serves 16)"]
    },
    {
        id: 12,
        name: "Custom Celebration",
        category: "custom",
        description: "Your dream cake, designed exactly as you imagine. Let's create something unique!",
        price: 80,
        image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=400&h=300&fit=crop",
        flavors: ["Custom Selection"],
        sizes: ["Custom Size"]
    }
]

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

export const galleryImages: GalleryImage[] = [
    { id: 1, src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop", alt: "Chocolate Dream Cake" },
    { id: 2, src: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=400&h=300&fit=crop", alt: "White Wedding Cake" },
    { id: 3, src: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=400&h=300&fit=crop", alt: "Vanilla Birthday Cake" },
    { id: 4, src: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=400&h=300&fit=crop", alt: "Rustic Naked Cake" },
    { id: 5, src: "https://images.unsplash.com/photo-1563729768-6af58466dfd9?w=400&h=300&fit=crop", alt: "Gold Drip Wedding" },
    { id: 6, src: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=300&fit=crop", alt: "Chocolate Cupcakes" },
]
