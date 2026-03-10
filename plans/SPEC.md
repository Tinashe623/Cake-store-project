# Tarie Cakes - Project Specification

## 1. Project Overview

**Project Name:** Tarie Cakes  
**Project Type:** Frontend Website (Single Page Application)  
**Core Functionality:** A modern, elegant cake ordering website allowing customers to browse cakes, add to cart, and order via WhatsApp or online checkout  
**Target Users:** Customers looking to order custom cakes for birthdays, weddings, and other occasions in Zimbabwe

---

## 2. UI/UX Specification

### Layout Structure

**Page Sections (in order):**
1. **Header** - Fixed navigation with logo, nav links, cart icon
2. **Hero Section** - Full-width banner with tagline and CTA button
3. **Categories Section** - Quick filter buttons for cake types
4. **Featured Cakes** - Grid of popular cake options
5. **How It Works** - 3-step ordering process
6. **Gallery** - Showcase of cake designs
7. **Testimonials** - Customer reviews carousel
8. **About Section** - Brand story
9. **Contact Section** - Contact info and form
10. **Footer** - Social links, quick links, copyright

**Responsive Breakpoints:**
- Mobile: < 768px (single column, hamburger menu)
- Tablet: 768px - 1024px (2-column grid)
- Desktop: > 1024px (3-4 column grid)

### Visual Design

**Color Palette:**
- Primary: `#E8B4B8` (Soft Rose Pink)
- Secondary: `#FDF5E6` (Cream/Antique White)
- Accent: `#D4AF37` (Metallic Gold)
- Dark Text: `#4A3728` (Warm Brown)
- Light Text: `#FFFFFF`
- Background: `#FFFAF5` (Warm White)
- Card Background: `#FFFFFF`
- Hover Accent: `#C9A227` (Darker Gold)

**Typography:**
- Headings: 'Playfair Display', serif (elegant, classic)
- Body: 'Poppins', sans-serif (modern, readable)
- Logo: 'Playfair Display' with custom styling
- H1: 48px / 36px mobile
- H2: 36px / 28px mobile
- H3: 24px / 20px mobile
- Body: 16px
- Small: 14px

**Spacing System:**
- Section padding: 80px vertical, 5% horizontal
- Card padding: 24px
- Grid gap: 30px
- Button padding: 16px 32px

**Visual Effects:**
- Box shadows: `0 10px 40px rgba(74, 55, 40, 0.1)`
- Hover transitions: 0.3s ease
- Image hover: scale(1.05) with overflow hidden
- Smooth scroll behavior
- Fade-in animations on scroll

### Components

**Navigation:**
- Logo (left)
- Nav links: Home, Menu, Gallery, About, Contact (center)
- Cart icon with item count badge (right)
- Mobile: Hamburger menu with slide-in drawer

**Hero Section:**
- Background: Soft gradient with floating cake images
- Headline: "Elegant Cakes for Every Celebration"
- Subheadline: "Handcrafted with love by Tarie"
- CTA Button: "Order Now" (gold accent)
- Secondary link: "View Menu"

**Category Filter Buttons:**
- All, Birthday, Wedding, Cupcakes, Custom, Seasonal
- Active state: Filled gold background
- Inactive: Outlined with gold border

**Cake Cards:**
- Image (16:10 ratio)
- Category badge
- Cake name
- Short description
- Price
- "Add to Cart" button
- "Order via WhatsApp" button (icon)

**Shopping Cart Modal:**
- Slide-in from right
- List of added items with quantities
- Individual item remove buttons
- Quantity +/- controls
- Subtotal display
- "Checkout via WhatsApp" button
- "Continue Shopping" button
- Empty cart state message

**Testimonial Carousel:**
- Customer photo (circular)
- Name and date
- Star rating (5 stars)
- Review text
- Auto-rotate every 5 seconds
- Manual navigation dots

**Contact Form:**
- Name input
- Email input
- Phone input
- Message textarea
- Submit button
- WhatsApp direct link button

**Footer:**
- Logo and tagline
- Quick links
- Contact information
- Social media icons (Instagram, Facebook, WhatsApp)
- Copyright text

---

## 3. Functionality Specification

### Core Features

**1. Cake Catalog Display**
- Display cakes in responsive grid
- Filter by category (client-side filtering)
- Show cake details: name, description, price, image
- Visual indication of cake availability

**2. Shopping Cart System**
- Add items to cart
- Update quantities (min: 1, max: 10)
- Remove items from cart
- Persist cart in localStorage
- Display cart item count in header
- Calculate subtotal in real-time

**3. WhatsApp Ordering**
- Generate pre-filled WhatsApp message with order details
- Format: "Hello Tarie Cakes! I'd like to order:\n[Item 1] x[Qty] - $XX\n[Item 2] x[Qty] - $XX\n\nTotal: $XX\n\nPlease confirm my order."
- Open WhatsApp Web or app with message

**4. Category Filtering**
- Filter cakes by: All, Birthday, Wedding, Cupcakes, Custom, Seasonal
- Smooth transition when filtering
- Show "No cakes found" if category is empty

**5. Smooth Scrolling**
- Smooth scroll to sections on nav click
- Active nav link highlighting

**6. Mobile Responsiveness**
- Fully responsive on all devices
- Touch-friendly buttons
- Optimized images for mobile

### User Interactions and Flows

**Ordering Flow (WhatsApp):**
1. User browses cake catalog
2. Clicks "Order via WhatsApp" on desired cake
3. System generates WhatsApp message with cake details
4. WhatsApp opens with pre-filled message
5. Customer sends message to confirm order

**Cart Flow:**
1. User clicks "Add to Cart" on cake
2. Cart modal opens with item added
3. User can adjust quantities or remove items
4. User clicks "Checkout via WhatsApp"
5. Full order summary sent via WhatsApp

### Edge Cases
- Empty cart state with call-to-action
- Image load failures (fallback placeholder)
- Long cake names (truncation with ellipsis)
- WhatsApp not installed (web link fallback)

---

## 4. Technical Implementation

### File Structure
```
tarie-cakes/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── (placeholder images)
└── SPEC.md
```

### External Resources
- Google Fonts: Playfair Display, Poppins
- Font Awesome 6 (icons)
- Unsplash/Pexels for cake images

### Cake Data Structure
```javascript
{
  id: 1,
  name: "Chocolate Dream",
  category: "birthday",
  description: "Rich chocolate cake with ganache",
  price: 45,
  image: "url-to-image"
}
```

---

## 5. Acceptance Criteria

### Visual Checkpoints
- [ ] Header is fixed and visible on scroll
- [ ] Hero section displays with elegant gradient background
- [ ] Cake cards display in responsive grid
- [ ] Category filters work correctly
- [ ] Cart modal slides in smoothly
- [ ] All hover effects work as specified
- [ ] Mobile menu functions correctly
- [ ] All images load properly

### Functional Checkpoints
- [ ] Cakes can be added to cart
- [ ] Cart quantities can be updated
- [ ] Cart persists after page refresh
- [ ] WhatsApp ordering generates correct message
- [ ] Category filtering works
- [ ] Smooth scroll to sections
- [ ] Contact form validates inputs
- [ ] All external links work

### Performance
- [ ] Page loads in under 3 seconds
- [ ] Images are optimized
- [ ] No console errors
- [ ] Works on Chrome, Firefox, Safari, Edge
