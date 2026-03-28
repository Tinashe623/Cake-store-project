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
        id: 21,
        name: "Tiramisu Cake",
        category: "specialty",
        description: "Espresso-soaked sponge layers with mascarpone cream, cocoa dusting, and coffee liqueur.",
        price: 62,
        flavors: ["Classic Tiramisu", "Chocolate Tiramisu"],
        sizes: ["6 inch (serves 10)", "8 inch (serves 20)"],
        flavorProfile: "Bold espresso and mascarpone with cocoa bitterness and a hint of coffee liqueur",
        ingredients: ["espresso", "mascarpone", "cocoa powder", "coffee liqueur", "ladyfinger crumbs", "egg yolks"],
        occasion: "Italian-themed dinners, after-dinner dessert, adult celebrations",
        servings: "10–20 guests"
    },
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
    },
    {
        id: 13,
        name: "Birthday Cake",
        category: "birthday",
        description: "Classic birthday cake with colorful buttercream and festive sprinkles. The perfect centerpiece for any celebration.",
        price: 42,
        flavors: ["Vanilla", "Funfetti", "Chocolate"],
        sizes: ["6 inch (serves 8)", "8 inch (serves 16)", "10 inch (serves 24)"],
        flavorProfile: "Buttery vanilla sponge with sweet buttercream and a playful sprinkle crunch",
        ingredients: ["cake flour", "butter", "vanilla extract", "buttercream frosting", "rainbow sprinkles"],
        occasion: "Birthday parties, kids' celebrations, office parties",
        servings: "8–24 guests"
    },
    {
        id: 14,
        name: "Lemon Drizzle",
        category: "birthday",
        description: "Zesty lemon sponge soaked in lemon syrup with a tangy glaze. Bright and refreshing.",
        price: 38,
        flavors: ["Classic Lemon", "Lemon Poppy Seed"],
        sizes: ["6 inch (serves 8)", "8 inch (serves 16)"],
        flavorProfile: "Tangy, citrus-forward lemon with a moist crumb and sweet-tart glaze",
        ingredients: ["fresh lemons", "lemon zest", "caster sugar", "eggs", "butter", "lemon syrup"],
        occasion: "Spring gatherings, afternoon tea, summer birthdays",
        servings: "8–16 guests"
    },
    {
        id: 15,
        name: "Opera Cake",
        category: "specialty",
        description: "Layered French opera cake with almond sponge, coffee buttercream, and dark chocolate ganache.",
        price: 65,
        flavors: ["Coffee & Chocolate", "Classic Opera"],
        sizes: ["6 inch (serves 10)", "8 inch (serves 20)"],
        flavorProfile: "Sophisticated layers of espresso, dark chocolate, and almond with a mirror glaze",
        ingredients: ["almond flour", "espresso", "dark chocolate", "French butter", "coffee extract"],
        occasion: "Formal dinners, anniversaries, French-themed events",
        servings: "10–20 guests"
    },
    {
        id: 16,
        name: "Matcha Delight",
        category: "specialty",
        description: "Japanese-inspired matcha cake with white chocolate cream and delicate green tea flavor.",
        price: 58,
        flavors: ["Pure Matcha", "Matcha & White Chocolate"],
        sizes: ["6 inch (serves 8)", "8 inch (serves 16)"],
        flavorProfile: "Earthy, umami-rich matcha balanced with creamy white chocolate sweetness",
        ingredients: ["ceremonial grade matcha", "white chocolate", "Japanese flour", "heavy cream", "vanilla"],
        occasion: "Tea ceremonies, zen-themed parties, Japanese celebrations",
        servings: "8–16 guests"
    },
    {
        id: 17,
        name: "Ferrero Rocher Tower",
        category: "birthday",
        description: "Chocolate hazelnut cake layered with praline cream and topped with Ferrero Rocher chocolates.",
        price: 52,
        flavors: ["Hazelnut Chocolate", "Praline"],
        sizes: ["6 inch (serves 8)", "8 inch (serves 16)", "10 inch (serves 24)"],
        flavorProfile: "Rich hazelnut praline with crunchy wafer bits and smooth chocolate ganache",
        ingredients: ["hazelnut praline", "dark chocolate", "wafer crumbs", "Ferrero Rocher", "hazelnut cream"],
        occasion: "Birthday celebrations, chocolate lovers' parties, milestone events",
        servings: "8–24 guests"
    },
    {
        id: 18,
        name: "Ombre Rose Cake",
        category: "wedding",
        description: "Stunning ombre buttercream rose cake graduating from deep to light pink. A visual masterpiece.",
        price: 275,
        flavors: ["Vanilla", "Strawberry", "Rose"],
        sizes: ["2 Tier", "3 Tier"],
        flavorProfile: "Delicate rose and vanilla with a light, airy buttercream finish",
        ingredients: ["rose water", "vanilla bean", "Swiss meringue buttercream", "natural food coloring"],
        occasion: "Weddings, bridal showers, garden parties, Valentine's Day",
        servings: "40–100 guests"
    },
    {
        id: 19,
        name: "Salted Caramel Indulgence",
        category: "birthday",
        description: "Moist caramel sponge layered with salted caramel sauce and toffee buttercream.",
        price: 46,
        flavors: ["Salted Caramel", "Toffee Caramel"],
        sizes: ["6 inch (serves 8)", "8 inch (serves 16)", "10 inch (serves 24)"],
        flavorProfile: "Buttery caramel with sea salt crystals and a luscious toffee finish",
        ingredients: ["brown sugar", "salted caramel sauce", "toffee bits", "sea salt", "butter", "cream"],
        occasion: "Birthday celebrations, dessert tables, autumn parties",
        servings: "8–24 guests"
    },
    {
        id: 20,
        name: "Mango Passion Cake",
        category: "seasonal",
        description: "Tropical mango sponge with passion fruit curd filling and coconut cream frosting.",
        price: 56,
        flavors: ["Mango & Passion Fruit", "Coconut Mango"],
        sizes: ["6 inch (serves 8)", "8 inch (serves 16)"],
        flavorProfile: "Sweet tropical mango with tangy passion fruit and creamy coconut undertones",
        ingredients: ["fresh mango purée", "passion fruit curd", "coconut cream", "vanilla", "lime zest"],
        occasion: "Summer parties, tropical themed events, destination weddings",
        servings: "8–16 guests"
    },
    {
        id: 22,
        name: "Arsenal Themed Cake",
        category: "custom",
        description: "Custom-designed cake featuring the Arsenal Football Club crest and colors. Perfect for dedicated fans.",
        price: 95,
        flavors: ["Vanilla", "Chocolate", "Red Velvet"],
        sizes: ["8 inch (serves 16)", "10 inch (serves 24)"],
        flavorProfile: "Your choice of flavor with themed decorations in red and white",
        ingredients: ["your choice of base", "fondant", "edible printing", "buttercream", "food coloring"],
        occasion: "Match day celebrations, birthdays, football viewing parties",
        servings: "16–24 guests"
    },
    {
        id: 23,
        name: "Honey Lavender Cake",
        category: "specialty",
        description: "Fragrant lavender sponge sweetened with local honey and topped with cream cheese frosting.",
        price: 54,
        flavors: ["Honey Lavender", "Earl Grey Lavender"],
        sizes: ["6 inch (serves 8)", "8 inch (serves 16)"],
        flavorProfile: "Floral lavender with warm honey sweetness and a hint of herbal complexity",
        ingredients: ["culinary lavender", "local honey", "cream cheese", "vanilla", "lemon zest"],
        occasion: "Garden parties, bridal showers, spring celebrations, tea parties",
        servings: "8–16 guests"
    },
]

// Dynamically maps available local images to cakes — no repetition, auto-adapts
const buildCakesData = (): Cake[] => {
    const images = getAvailableImages()

    // Filter out non-cake images (about, hero, feature photos, nav images)
    const cakeImages = images.filter(img =>
        img.filename.startsWith('cake') || img.filename === 'birthdayCake.jpg'
    )

    return CAKE_TEMPLATES.map((cake, index) => {
        const image = cakeImages[index]

        return {
            ...cake,
            image: image?.url || (cakeImages[0]?.url ?? ''),
        }
    }).slice(0, cakeImages.length)
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
    { id: 'specialty', label: 'Specialty' },
]

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah M.",
        photo: "",
        rating: 5,
        date: "December 2024",
        text: "The most beautiful wedding cake ever! Tarie exceeded all my expectations. Everyone at the wedding couldn't stop raving about it!"
    },
    {
        id: 2,
        name: "Mrs Mundieta.",
        photo: "",
        rating: 5,
        date: "November 2025",
        text: "Ordered Birthday cake for my Grand Child's birthday. They were not only delicious but looked absolutely stunning. Will definitely order again!"
    },
    {
        id: 3,
        name: "Emily R.",
        photo: "",
        rating: 5,
        date: "October 2024",
        text: "The custom cake for my mom's 50th was perfect! Tarie really understood what I wanted and delivered beyond my expectations."
    },
    {
        id: 4,
        name: "Michael T.",
        photo: "",
        rating: 5,
        date: "September 2024",
        text: "Best cakes in Mutare! I've ordered multiple times and every single time the quality is outstanding. Highly recommend!"
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
