# Tarie Cakes - Full UI Overhaul Plan

## Overview
Complete bug fixes, UI upgrades, and theme change to **Velvet Noir** (deep burgundy + cream + antique gold).

---

## Phase 1: Bug Fixes (10 items)

### 1.1 Fix missing Outfit font
- **File:** `index.html`
- Add `Outfit:wght@300;400;500;600;700` to the Google Fonts `<link>`

### 1.2 Replace hardcoded colors in Categories.tsx
- **File:** `src/components/Categories.tsx:66-69`
- Replace `#0B132B` → `brand.primary`
- Replace `#E2E8F0` → `brand.secondary`
- Replace `#FFFFFF` → `brand.lightText`

### 1.3 Fix Footer logo path
- **File:** `src/components/Footer.tsx:24`
- Change `/tarie logo.png` → `/tarie cakes logo.png`

### 1.4 Add proper favicon
- **File:** `index.html:5`
- Change `<link rel="icon" type="image/svg+xml" href="/vite.svg" />` to use existing logo

### 1.5 Fix Math.random() in render
- **Files:** `src/components/Hero.tsx:55-56`, `src/components/HowItWorks.tsx`
- Pre-compute sparkle/circle positions as static arrays or with `useMemo`

### 1.6 Add form validation
- **File:** `src/components/Contact.tsx`
- Add email regex validation, phone format validation
- Show inline error messages using Chakra's `FormErrorMessage`

### 1.7 Add size/flavor tracking to cart
- **File:** `src/types/index.ts` — Add `selectedSize` and `selectedFlavor` to `CartItem`
- **File:** `src/context/CartContext.tsx` — Update `addToCart` signature
- **File:** `src/components/CakeCard.tsx` — Wire size/flavor selection to cart

### 1.8 Replace alert() with useToast
- **File:** `src/components/Footer.tsx:12`
- Import `useToast`, replace `alert()` call

### 1.9 Centralize WhatsApp phone number
- **New file:** `src/config/constants.ts`
- Export `WHATSAPP_PHONE_NUMBER`
- Update `Header.tsx`, `CakeCard.tsx`, `CartDrawer.tsx`, `Contact.tsx`

### 1.10 Fix `any` type in Gallery
- **File:** `src/components/Gallery.tsx`
- Type `image` prop with `GalleryImage` from `types/index.ts`

---

## Phase 2: Theme Change to "Velvet Noir"

### New Color Palette (replaces midnight-blue/rose-gold)
```
brand:
  primary: '#2D0A0A'        # Deep Wine / Burgundy
  primaryLight: '#4A1A1A'   # Soft Burgundy
  primaryDark: '#1A0505'    # Almost Black Wine
  secondary: '#F5E6D3'      # Warm Cream
  secondaryLight: '#FAF0E6' # Light Ivory
  accent: '#C9A96E'         # Antique Gold
  accentHover: '#B8944F'    # Darker Antique Gold
  darkText: '#1A0A0A'       # Wine-tinted dark
  lightText: '#FAF0E6'      # Warm ivory
  background: '#FDF8F3'     # Warm cream background
  cardBg: '#FFFFFF'
  surface: '#F5EDE4'        # Warm beige surface
  muted: '#8B7B6B'          # Warm taupe muted
  border: '#E8DDD0'         # Warm subtle border
  gold: '#C9A96E'           # Alias
```

### Files to update:
- `src/theme/index.ts` — Full color palette, shadows, global styles, gradient utilities
- `index.html` — Ensure Outfit font loads

### New shadow tokens:
```
glass: '0 8px 32px rgba(45, 10, 10, 0.08)'
glassHover: '0 12px 40px rgba(45, 10, 10, 0.12)'
elevated: '0 20px 40px -10px rgba(45, 10, 10, 0.1)'
neonGold: '0 0 20px rgba(201, 169, 110, 0.3)'
```

### Gradient updates:
- `.text-gradient`: `linear-gradient(135deg, #2D0A0A 0%, #C9A96E 100%)`
- Section dividers: burgundy-to-gold gradients

### Color mapping per component:

| Component | Before | After |
|-----------|--------|-------|
| Header glass bg | `rgba(255,255,255,0.8)` | `rgba(253,248,243,0.85)` |
| Hero heading | `#0B132B` | `#2D0A0A` |
| Hero accent text | `#D4AF37` | `#C9A96E` |
| Hero CTA pill | navy bg, gold text | wine bg, gold text |
| Menu section bg | midnight blue `#0B132B` | deep wine `#2D0A0A` |
| Cake card glass | `rgba(255,255,255,0.03)` | `rgba(255,255,255,0.06)` |
| Categories active | `#D4AF37` | `#C9A96E` |
| Categories text | `#0B132B` / `#E2E8F0` | `#2D0A0A` / `#F5E6D3` |
| HowItWorks bg | `#FAFBFC` | `#FDF8F3` |
| Gallery bg | light | warm cream |
| Testimonials bg | `#F1F3F5` | `#F5EDE4` |
| About section bg | `#0B132B` | `#2D0A0A` |
| Contact bg | light | warm cream |
| Footer bg | `#0B132B` | `#2D0A0A` |
| All gold accents | `#D4AF37` | `#C9A96E` |
| All secondary/rose | `#E8A3A8` / `#F3C5C8` | `#F5E6D3` / `#FAF0E6` |
| WhatsApp button | `#25D366` | keep green |
| Text on dark bg | `whiteAlpha.700` | `rgba(245, 230, 211, 0.7)` |

---

## Phase 3: UI Upgrades

### 3.1 Scroll progress indicator
- **File:** `src/App.tsx`
- Gold progress bar at top using Framer Motion `useScroll` + `useTransform`
- Fixed `h="3px"`, `bg="brand.accent"`, width 0-100% mapped to scroll

### 3.2 Smooth section transitions
- **All section components** — replace thin `h="3px"` gradient lines with `h="120px"` fading gradients
- Creates smooth blending between warm-cream and deep-wine sections

### 3.3 Active nav link tracking
- **File:** `src/components/Header.tsx`
- IntersectionObserver to detect visible section
- Highlight active link with gold underline

### 3.4 Micro-interaction on Add to Cart
- **File:** `src/components/CakeCard.tsx`
- Sparkle burst animation + green checkmark on click

### 3.5 Mobile floating WhatsApp CTA
- **File:** `src/App.tsx`
- Fixed floating button, mobile only, green bg, gold shadow, `bottom: 24px, right: 24px`

### 3.6 Loading skeletons for images
- **Files:** Hero.tsx, CakeCard.tsx, Gallery.tsx
- Chakra `Skeleton` wrapper with `isLoaded` state

### 3.7 Gallery lightbox
- **File:** `src/components/Gallery.tsx`
- Click-to-expand using Chakra `Modal`, full-size image

### 3.8 Wider Testimonials container
- **File:** `src/components/Testimonials.tsx`
- `maxW="1000px"` → `maxW="1200px"`

---

## Execution Order

1. Create `src/config/constants.ts` with WhatsApp number
2. Update `src/theme/index.ts` with Velvet Noir palette
3. Fix `index.html` (font, favicon)
4. Fix `src/components/Categories.tsx` (hardcoded colors)
5. Fix `src/components/Footer.tsx` (logo path, alert→toast)
6. Fix `src/components/Hero.tsx` (Math.random)
7. Fix `src/components/HowItWorks.tsx` (Math.random)
8. Fix `src/components/Gallery.tsx` (any type)
9. Fix types + CartContext + CakeCard (size/flavor tracking)
10. Update all 12 components to Velvet Noir colors
11. Add scroll progress bar to App.tsx
12. Improve section transitions
13. Add active nav tracking to Header.tsx
14. Add micro-interactions to CakeCard.tsx
15. Add mobile floating WhatsApp CTA to App.tsx
16. Add image skeletons
17. Add gallery lightbox
18. Fix Testimonials container width
19. Add form validation to Contact.tsx
20. Run `npm run build` + `npm run lint` to verify

---

## Verification Checklist
- `npm run build` passes with no errors
- `npm run lint` passes
- All sections transition smoothly between warm cream and deep wine
- All gold accents use `#C9A96E`, secondary uses cream/ivory
- Cart stores selected size and flavor
- Mobile: floating WhatsApp button visible
- Scroll: progress bar fills as user scrolls
- Nav: active section highlighting works
- Gallery: lightbox opens on click
- Contact form: validation errors display properly
