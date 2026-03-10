/**
 * Tarie Cakes - JavaScript Functionality
 * Premium Version with Quick View, Wishlist, and More
 */

// ========================================
// Cake Data with Enhanced Details
// ========================================
const cakesData = [
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
        name: "Unicorn Fantasy",
        category: "custom",
        description: "Magical unicorn-themed cake with fondant decorations. Let your imagination run wild!",
        price: 80,
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=300&fit=crop",
        flavors: ["Vanilla", "Chocolate", "Rainbow"],
        sizes: ["6 inch", "8 inch", "10 inch"]
    },
    {
        id: 11,
        name: "Sports Theme",
        category: "custom",
        description: "Custom cake featuring your favorite sports team or athlete. Game on!",
        price: 75,
        image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
        flavors: ["Custom"],
        sizes: ["Sheet Cake", "Round 8 inch", "Round 10 inch"]
    },
    {
        id: 12,
        name: "Princess Castle",
        category: "custom",
        description: "Fairytale castle cake perfect for little princesses. Magical and delicious!",
        price: 100,
        image: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?w=400&h=300&fit=crop",
        flavors: ["Vanilla", "Strawberry", "Chocolate"],
        sizes: ["8 inch", "10 inch"]
    },
    {
        id: 13,
        name: "Christmas Yule Log",
        category: "seasonal",
        description: "Traditional Yule log (Bûche de Noël) with chocolate ganache. Holiday perfection!",
        price: 60,
        image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=400&h=300&fit=crop",
        flavors: ["Chocolate", "Chocolate Hazelnut"],
        sizes: ["Small (serves 8)", "Medium (serves 12)", "Large (serves 20)"]
    },
    {
        id: 14,
        name: "Easter Egg Hunt",
        category: "seasonal",
        description: "Colorful Easter-themed cake with pastel decorations and candy eggs.",
        price: 55,
        image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=400&h=300&fit=crop",
        flavors: ["Vanilla", "Lemon", "Carrot"],
        sizes: ["8 inch", "10 inch"]
    },
    {
        id: 15,
        name: "Halloween Spook",
        category: "seasonal",
        description: "Spooky Halloween cake with creepy decorations. Not too scary, just delicious!",
        price: 65,
        image: "https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=400&h=300&fit=crop",
        flavors: ["Chocolate", "Red Velvet", "Pumpkin Spice"],
        sizes: ["8 inch", "Sheet Cake"]
    },
    {
        id: 16,
        name: "Lemon Delight",
        category: "birthday",
        description: "Zesty lemon cake with lemon curd filling and meringue topping. Refreshingly delicious!",
        price: 45,
        image: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=400&h=300&fit=crop",
        flavors: ["Lemon", "Lemon Blueberry", "Lemon Raspberry"],
        sizes: ["6 inch (serves 8)", "8 inch (serves 16)", "10 inch (serves 24)"]
    }
];

// ========================================
// State
// ========================================
let cart = JSON.parse(localStorage.getItem('tarieCakesCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('tarieCakesWishlist')) || [];
let currentCategory = 'all';

// ========================================
// DOM Elements
// ========================================
const header = document.getElementById('header');
const promoBanner = document.getElementById('promoBanner');
const promoClose = document.getElementById('promoClose');
const cartBtn = document.getElementById('cartBtn');
const wishlistBtn = document.getElementById('wishlistBtn');
const cartModal = document.getElementById('cartModal');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');
const cartCount = document.getElementById('cartCount');
const wishlistCount = document.getElementById('wishlistCount');
const subtotalAmount = document.getElementById('subtotalAmount');
const checkoutWhatsapp = document.getElementById('checkoutWhatsapp');
const continueShopping = document.getElementById('continueShopping');
const cakesGrid = document.getElementById('cakesGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const scrollTop = document.getElementById('scrollTop');
const navLinks = document.querySelectorAll('.nav-link');
const testimonialTrack = document.querySelector('.testimonial-track');
const testimonialDots = document.querySelectorAll('.dot');
const contactForm = document.getElementById('contactForm');
const quickViewModal = document.getElementById('quickViewModal');
const quickViewOverlay = document.getElementById('quickViewOverlay');
const quickViewClose = document.getElementById('quickViewClose');
const quickViewContent = document.getElementById('quickViewContent');
const wishlistModal = document.getElementById('wishlistModal');
const wishlistOverlay = document.getElementById('wishlistOverlay');
const wishlistClose = document.getElementById('wishlistClose');
const wishlistItemsEl = document.getElementById('wishlistItems');
const wishlistEmpty = document.getElementById('wishlistEmpty');
const faqQuestions = document.querySelectorAll('.faq-question');

// ========================================
// Initialize
// ========================================
document.addEventListener('DOMContentLoaded', function () {
    renderCakes();
    updateCartUI();
    updateWishlistUI();
    initEventListeners();
});

// ========================================
// Render Cakes
// ========================================
function renderCakes(category) {
    category = category || 'all';
    const filteredCakes = category === 'all'
        ? cakesData
        : cakesData.filter(function (cake) { return cake.category === category; });

    if (filteredCakes.length === 0) {
        cakesGrid.innerHTML = '<div class="no-cakes"><i class="fas fa-birthday-cake"></i><h3>No cakes found in this category</h3><p>Please try another category</p></div>';
        return;
    }

    cakesGrid.innerHTML = filteredCakes.map(function (cake) {
        const isInWishlist = wishlist.some(function (item) { return item.id === cake.id; });
        return '<div class="cake-card fade-in" data-id="' + cake.id + '">' +
            '<div class="cake-image">' +
            '<img src="' + cake.image + '" alt="' + cake.name + '" loading="lazy" onerror="this.src=\'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop\'">' +
            '<span class="cake-category">' + cake.category + '</span>' +
            '<button class="cake-wishlist-btn ' + (isInWishlist ? 'active' : '') + '" onclick="toggleWishlist(' + cake.id + '); event.stopPropagation();">' +
            '<i class="' + (isInWishlist ? 'fas' : 'far') + ' fa-heart"></i>' +
            '</button>' +
            '</div>' +
            '<div class="cake-content">' +
            '<h3 class="cake-name">' + cake.name + '</h3>' +
            '<p class="cake-desc">' + cake.description + '</p>' +
            '<div class="cake-footer">' +
            '<span class="cake-price">$' + cake.price + '</span>' +
            '<div class="cake-actions">' +
            '<button class="cake-btn cake-btn-view" onclick="openQuickView(' + cake.id + '); event.stopPropagation();"><i class="fas fa-eye"></i></button>' +
            '<button class="cake-btn cake-btn-cart" onclick="addToCart(' + cake.id + '); event.stopPropagation();"><i class="fas fa-cart-plus"></i></button>' +
            '<button class="cake-btn cake-btn-whatsapp" onclick="orderViaWhatsApp(' + cake.id + '); event.stopPropagation();"><i class="fab fa-whatsapp"></i></button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
    }).join('');
}

// ========================================
// Shopping Cart Functions
// ========================================
function addToCart(cakeId) {
    const cake = cakesData.find(function (c) { return c.id === cakeId; });
    if (!cake) return;

    const existingItem = cart.find(function (item) { return item.id === cakeId; });

    if (existingItem) {
        if (existingItem.quantity < 10) {
            existingItem.quantity++;
        } else {
            alert('Maximum quantity is 10');
            return;
        }
    } else {
        cart.push({
            id: cake.id,
            name: cake.name,
            price: cake.price,
            image: cake.image,
            quantity: 1,
            flavor: cake.flavors ? cake.flavors[0] : '',
            size: cake.sizes ? cake.sizes[0] : '',
            message: ''
        });
    }

    saveCart();
    updateCartUI();
    openCartModal();
}

function removeFromCart(cakeId) {
    cart = cart.filter(function (item) { return item.id !== cakeId; });
    saveCart();
    updateCartUI();
}

function updateQuantity(cakeId, change) {
    const item = cart.find(function (item) { return item.id === cakeId; });
    if (!item) return;

    const newQuantity = item.quantity + change;

    if (newQuantity < 1) {
        removeFromCart(cakeId);
        return;
    }

    if (newQuantity > 10) {
        alert('Maximum quantity is 10');
        return;
    }

    item.quantity = newQuantity;
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('tarieCakesCart', JSON.stringify(cart));
}

function calculateSubtotal() {
    return cart.reduce(function (total, item) { return total + (item.price * item.quantity); }, 0);
}

function updateCartUI() {
    const totalItems = cart.reduce(function (sum, item) { return sum + item.quantity; }, 0);
    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartItems.innerHTML = '';
        cartEmpty.style.display = 'block';
        cartFooter.style.display = 'none';
    } else {
        cartEmpty.style.display = 'none';
        cartFooter.style.display = 'block';

        cartItems.innerHTML = cart.map(function (item) {
            return '<div class="cart-item">' +
                '<div class="cart-item-image"><img src="' + item.image + '" alt="' + item.name + '"></div>' +
                '<div class="cart-item-details">' +
                '<h4 class="cart-item-name">' + item.name + '</h4>' +
                '<p class="cart-item-price">$' + item.price + '</p>' +
                '<div class="cart-item-quantity">' +
                '<button class="quantity-btn" onclick="updateQuantity(' + item.id + ', -1)"><i class="fas fa-minus"></i></button>' +
                '<span class="quantity-value">' + item.quantity + '</span>' +
                '<button class="quantity-btn" onclick="updateQuantity(' + item.id + ', 1)"><i class="fas fa-plus"></i></button>' +
                '</div>' +
                '</div>' +
                '<button class="cart-item-remove" onclick="removeFromCart(' + item.id + ')"><i class="fas fa-trash"></i></button>' +
                '</div>';
        }).join('');

        subtotalAmount.textContent = '$' + calculateSubtotal();
    }
}

function openCartModal() {
    cartModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartModal() {
    cartModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ========================================
// Wishlist Functions
// ========================================
function toggleWishlist(cakeId) {
    const cake = cakesData.find(function (c) { return c.id === cakeId; });
    if (!cake) return;

    const existingIndex = wishlist.findIndex(function (item) { return item.id === cakeId; });

    if (existingIndex > -1) {
        wishlist.splice(existingIndex, 1);
    } else {
        wishlist.push({
            id: cake.id,
            name: cake.name,
            price: cake.price,
            image: cake.image
        });
    }

    saveWishlist();
    updateWishlistUI();
    renderCakes(currentCategory);
}

function saveWishlist() {
    localStorage.setItem('tarieCakesWishlist', JSON.stringify(wishlist));
}

function updateWishlistUI() {
    wishlistCount.textContent = wishlist.length;
}

function openWishlistModal() {
    wishlistModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    updateWishlistModalContent();
}

function closeWishlistModal() {
    wishlistModal.classList.remove('active');
    document.body.style.overflow = '';
}

function updateWishlistModalContent() {
    if (wishlist.length === 0) {
        wishlistItemsEl.innerHTML = '';
        wishlistEmpty.style.display = 'block';
    } else {
        wishlistEmpty.style.display = 'none';
        wishlistItemsEl.innerHTML = wishlist.map(function (item) {
            return '<div class="wishlist-item">' +
                '<div class="wishlist-item-image"><img src="' + item.image + '" alt="' + item.name + '"></div>' +
                '<div class="wishlist-item-details">' +
                '<h4 class="wishlist-item-name">' + item.name + '</h4>' +
                '<p class="wishlist-item-price">$' + item.price + '</p>' +
                '<div class="wishlist-item-actions">' +
                '<button class="btn btn-primary" onclick="addToCartFromWishlist(' + item.id + ')">Add to Cart</button>' +
                '<button class="wishlist-item-remove" onclick="toggleWishlist(' + item.id + ')"><i class="fas fa-trash"></i></button>' +
                '</div>' +
                '</div>' +
                '</div>';
        }).join('');
    }
}

function addToCartFromWishlist(cakeId) {
    addToCart(cakeId);
    closeWishlistModal();
}

// ========================================
// Quick View Modal
// ========================================
function openQuickView(cakeId) {
    const cake = cakesData.find(function (c) { return c.id === cakeId; });
    if (!cake) return;

    const flavors = cake.flavors ? cake.flavors : ['Standard'];
    const sizes = cake.sizes ? cake.sizes : ['Standard'];

    quickViewContent.innerHTML =
        '<div class="quick-view-image">' +
        '<img src="' + cake.image + '" alt="' + cake.name + '">' +
        '</div>' +
        '<div class="quick-view-details">' +
        '<span class="quick-view-category">' + cake.category + '</span>' +
        '<h2 class="quick-view-title">' + cake.name + '</h2>' +
        '<p class="quick-view-desc">' + cake.description + '</p>' +
        '<p class="quick-view-price">$' + cake.price + '</p>' +
        '<div class="customization-options">' +
        '<div class="customization-group">' +
        '<label>Flavor</label>' +
        '<select id="quickViewFlavor">' + flavors.map(function (f) { return '<option value="' + f + '">' + f + '</option>'; }).join('') + '</select>' +
        '</div>' +
        '<div class="customization-group">' +
        '<label>Size</label>' +
        '<select id="quickViewSize">' + sizes.map(function (s) { return '<option value="' + s + '">' + s + '</option>'; }).join('') + '</select>' +
        '</div>' +
        '<div class="customization-group">' +
        '<label>Cake Message (optional)</label>' +
        '<textarea id="quickViewMessage" rows="2" placeholder="Happy Birthday!"></textarea>' +
        '</div>' +
        '</div>' +
        '<div class="quick-view-actions">' +
        '<button class="btn btn-primary" onclick="addToCartWithCustomization(' + cake.id + ')"><i class="fas fa-cart-plus"></i> Add to Cart</button>' +
        '<button class="btn btn-whatsapp" onclick="orderViaWhatsApp(' + cake.id + ')"><i class="fab fa-whatsapp"></i> Order via WhatsApp</button>' +
        '</div>' +
        '</div>';

    quickViewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQuickViewModal() {
    quickViewModal.classList.remove('active');
    document.body.style.overflow = '';
}

function addToCartWithCustomization(cakeId) {
    const cake = cakesData.find(function (c) { return c.id === cakeId; });
    if (!cake) return;

    const flavor = document.getElementById('quickViewFlavor') ? document.getElementById('quickViewFlavor').value : cake.flavors[0];
    const size = document.getElementById('quickViewSize') ? document.getElementById('quickViewSize').value : cake.sizes[0];
    const message = document.getElementById('quickViewMessage') ? document.getElementById('quickViewMessage').value : '';

    const existingItem = cart.find(function (item) { return item.id === cakeId; });

    if (existingItem) {
        if (existingItem.quantity < 10) {
            existingItem.quantity++;
        } else {
            alert('Maximum quantity is 10');
            return;
        }
    } else {
        cart.push({
            id: cake.id,
            name: cake.name,
            price: cake.price,
            image: cake.image,
            quantity: 1,
            flavor: flavor,
            size: size,
            message: message
        });
    }

    saveCart();
    updateCartUI();
    closeQuickViewModal();
    openCartModal();
}

// ========================================
// WhatsApp Ordering
// ========================================
function orderViaWhatsApp(cakeId) {
    const cake = cakesData.find(function (c) { return c.id === cakeId; });
    if (!cake) return;

    var message = 'Hello Tarie Cakes! I would like to order:\\n\\n';
    message += '🍰 ' + cake.name + '\\n';
    message += 'Category: ' + cake.category + '\\n';
    message += 'Price: $' + cake.price + '\\n';
    message += '\\nPlease confirm my order. Thank you!';

    var whatsappUrl = 'https://wa.me/26377XXX?text=' + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');
}

function checkoutViaWhatsApp() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    var message = 'Hello Tarie Cakes! I would like to place an order:\\n\\n';

    cart.forEach(function (item) {
        message += '🍰 ' + item.name;
        if (item.flavor) message += ' (' + item.flavor + ')';
        if (item.size) message += ' - ' + item.size;
        message += ' x' + item.quantity + ' - $' + (item.price * item.quantity) + '\\n';
        if (item.message) message += '   Message: ' + item.message + '\\n';
    });

    message += '\\n------------------\\n';
    message += 'Total: $' + calculateSubtotal() + '\\n';
    message += '------------------\\n\\n';
    message += 'Please confirm my order. Thank you!';

    var whatsappUrl = 'https://wa.me/26377XXX?text=' + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');
}

// ========================================
// Category Filtering
// ========================================
function filterCakes(category) {
    currentCategory = category;

    filterBtns.forEach(function (btn) {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });

    renderCakes(category);
}

// ========================================
// Mobile Menu
// ========================================
function openMobileMenu() {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
}

// ========================================
// Testimonial Slider
// ========================================
var currentTestimonial = 0;
var totalTestimonials = 3;

function goToTestimonial(index) {
    currentTestimonial = index;
    testimonialTrack.style.transform = 'translateX(-' + (currentTestimonial * 100) + '%)';

    testimonialDots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === currentTestimonial);
    });
}

function autoRotateTestimonials() {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    goToTestimonial(currentTestimonial);
}

// ========================================
// FAQ Accordion
// ========================================
function initFAQ() {
    faqQuestions.forEach(function (question) {
        question.addEventListener('click', function () {
            var item = this.parentElement;
            item.classList.toggle('active');
        });
    });
}

// ========================================
// Scroll Effects
// ========================================
function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    if (window.scrollY > 300) {
        scrollTop.classList.add('active');
    } else {
        scrollTop.classList.remove('active');
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================
// Smooth Scroll
// ========================================
function smoothScroll(e, target) {
    e.preventDefault();
    var element = document.querySelector(target);
    if (element) {
        var headerOffset = 80;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    closeMobileMenu();
}

// ========================================
// Contact Form
// ========================================
function handleContactForm(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    var whatsappMessage = 'Hello Tarie Cakes!\\n\\n';
    whatsappMessage += 'Name: ' + name + '\\n';
    whatsappMessage += 'Email: ' + email + '\\n';
    whatsappMessage += 'Phone: ' + phone + '\\n\\n';
    whatsappMessage += 'Message:\\n' + message;

    var whatsappUrl = 'https://wa.me/26377XXX?text=' + encodeURIComponent(whatsappMessage);
    window.open(whatsappUrl, '_blank');

    contactForm.reset();
}

// ========================================
// Promo Banner
// ========================================
function closePromoBanner() {
    promoBanner.style.display = 'none';
}

// ========================================
// Event Listeners
// ========================================
function initEventListeners() {
    // Promo banner
    if (promoClose) promoClose.addEventListener('click', closePromoBanner);

    // Cart events
    if (cartBtn) cartBtn.addEventListener('click', openCartModal);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCartModal);
    if (cartClose) cartClose.addEventListener('click', closeCartModal);
    if (continueShopping) continueShopping.addEventListener('click', closeCartModal);
    if (checkoutWhatsapp) checkoutWhatsapp.addEventListener('click', checkoutViaWhatsApp);

    // Wishlist events
    if (wishlistBtn) wishlistBtn.addEventListener('click', openWishlistModal);
    if (wishlistOverlay) wishlistOverlay.addEventListener('click', closeWishlistModal);
    if (wishlistClose) wishlistClose.addEventListener('click', closeWishlistModal);

    // Category filtering
    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () { filterCakes(this.dataset.category); });
    });

    // Mobile menu
    if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
    if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
    mobileNavLinks.forEach(function (link) {
        link.addEventListener('click', closeMobileMenu);
    });

    // Scroll effects
    window.addEventListener('scroll', handleScroll);

    // Scroll to top
    if (scrollTop) scrollTop.addEventListener('click', scrollToTop);

    // Testimonial navigation
    testimonialDots.forEach(function (dot, index) {
        dot.addEventListener('click', function () { goToTestimonial(index); });
    });

    // Auto-rotate testimonials every 5 seconds
    setInterval(autoRotateTestimonials, 5000);

    // FAQ accordion
    initFAQ();

    // Contact form
    if (contactForm) contactForm.addEventListener('submit', handleContactForm);

    // Quick View modal
    if (quickViewOverlay) quickViewOverlay.addEventListener('click', closeQuickViewModal);
    if (quickViewClose) quickViewClose.addEventListener('click', closeQuickViewModal);

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) { smoothScroll(e, this.getAttribute('href')); });
    });
}

// Make functions available globally
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.orderViaWhatsApp = orderViaWhatsApp;
window.toggleWishlist = toggleWishlist;
window.openQuickView = openQuickView;
window.addToCartWithCustomization = addToCartWithCustomization;
window.addToCartFromWishlist = addToCartFromWishlist;
