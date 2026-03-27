import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

// Velvet Noir - Deep Burgundy + Warm Cream + Antique Gold
const colors = {
    brand: {
        primary: '#2D0A0A',          // Deep Wine / Burgundy
        primaryLight: '#4A1A1A',     // Soft Burgundy
        primaryDark: '#1A0505',      // Almost Black Wine
        secondary: '#F5E6D3',        // Warm Cream
        secondaryLight: '#FAF0E6',   // Light Ivory
        accent: '#C9A96E',           // Antique Gold
        accentHover: '#B8944F',      // Darker Antique Gold
        darkText: '#1A0A0A',         // Wine-tinted dark
        lightText: '#FAF0E6',        // Warm ivory
        background: '#FDF8F3',       // Warm cream background
        cardBg: '#FFFFFF',           // Pure white for elevated cards
        surface: '#F5EDE4',          // Warm beige surface
        muted: '#8B7B6B',            // Warm taupe muted
        border: '#E8DDD0',           // Warm subtle border
        gold: '#C9A96E',             // Consistency alias
    },
}

const fonts = {
    heading: "'Playfair Display', serif",
    body: "'Outfit', 'Poppins', sans-serif",
}

const shadows = {
    glass: '0 8px 32px 0 rgba(45, 10, 10, 0.08)',
    glassHover: '0 12px 40px 0 rgba(45, 10, 10, 0.12)',
    elevated: '0 20px 40px -10px rgba(45, 10, 10, 0.1)',
    neonGold: '0 0 20px rgba(201, 169, 110, 0.3)',
}

const components = {
    Button: {
        baseStyle: {
            fontWeight: '600',
            borderRadius: '16px',
            textTransform: 'none',
            fontSize: 'md',
            letterSpacing: '0.3px',
        },
        variants: {
            primary: {
                bg: 'brand.primary',
                color: 'white',
                _hover: {
                    bg: 'brand.primaryLight',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 15px 30px -5px rgba(45, 10, 10, 0.4)',
                },
                _active: {
                    transform: 'translateY(0)',
                },
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            },
            secondary: {
                bg: 'rgba(253, 248, 243, 0.1)',
                backdropFilter: 'blur(10px)',
                color: 'brand.lightText',
                border: '1px solid',
                borderColor: 'rgba(245, 230, 211, 0.2)',
                _hover: {
                    bg: 'rgba(253, 248, 243, 0.2)',
                    borderColor: 'brand.accent',
                    transform: 'translateY(-3px)',
                    boxShadow: 'glassHover',
                },
                transition: 'all 0.4s ease',
            },
            solid: {
                bg: 'brand.accent',
                color: 'brand.primary',
                _hover: {
                    bg: 'brand.accentHover',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 15px 30px -5px rgba(201, 169, 110, 0.4)',
                },
                transition: 'all 0.4s ease',
            },
            ghost: {
                color: 'brand.darkText',
                _hover: {
                    bg: 'brand.surface',
                    color: 'brand.primary',
                    transform: 'scale(1.02)',
                },
                transition: 'all 0.3s ease',
            },
        },
        sizes: {
            lg: { px: 8, py: 6, fontSize: 'md' },
            md: { px: 6, py: 4, fontSize: 'sm' },
            sm: { px: 4, py: 2, fontSize: 'xs' },
        },
        defaultProps: {
            variant: 'primary',
            size: 'md',
        },
    },
    Heading: {
        baseStyle: {
            color: 'brand.darkText',
            fontWeight: '800',
            letterSpacing: '-1px',
        },
    },
    Text: {
        baseStyle: {
            color: 'brand.darkText',
            lineHeight: '1.8',
        },
    },
    Badge: {
        baseStyle: {
            fontWeight: '600',
            borderRadius: 'full',
            textTransform: 'none',
            px: 3,
            py: 1,
            letterSpacing: '0.2px',
        },
    },
}

const styles = {
    global: {
        'html, body': {
            bg: 'brand.background',
            color: 'brand.darkText',
            fontFamily: 'body',
            lineHeight: '1.6',
            scrollBehavior: 'smooth',
        },
        '*::selection': {
            bg: 'brand.accent',
            color: 'brand.primary',
        },
        '::-webkit-scrollbar': {
            width: '10px',
        },
        '::-webkit-scrollbar-track': {
            bg: 'brand.background',
        },
        '::-webkit-scrollbar-thumb': {
            bg: 'brand.primaryLight',
            borderRadius: '10px',
            border: '2px solid',
            borderColor: 'brand.background',
        },
        '::-webkit-scrollbar-thumb:hover': {
            bg: 'brand.primary',
        },
        '.glass-panel': {
            background: 'rgba(253, 248, 243, 0.7)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(253, 248, 243, 0.8)',
            boxShadow: '0 8px 32px 0 rgba(45, 10, 10, 0.05)',
        },
        '.glass-panel-dark': {
            background: 'rgba(45, 10, 10, 0.65)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(245, 230, 211, 0.1)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        },
        '.text-gradient': {
            background: 'linear-gradient(135deg, #2D0A0A 0%, #C9A96E 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
        },
        '@keyframes float': {
            '0%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-15px)' },
            '100%': { transform: 'translateY(0px)' },
        },
        '@keyframes pulseFade': {
            '0%': { opacity: 0.4, transform: 'scale(1)' },
            '50%': { opacity: 0.8, transform: 'scale(1.05)' },
            '100%': { opacity: 0.4, transform: 'scale(1)' },
        },
        '@keyframes neonPulse': {
            '0%': { boxShadow: '0 0 20px rgba(201, 169, 110, 0.3), 0 0 40px rgba(201, 169, 110, 0.15)' },
            '100%': { boxShadow: '0 0 40px rgba(201, 169, 110, 0.5), 0 0 80px rgba(201, 169, 110, 0.25), 0 0 120px rgba(45, 10, 10, 0.15)' },
        },
        '@keyframes neonBorderRotate': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
        },
    },
}

export const theme = extendTheme({
    config,
    colors,
    fonts,
    shadows,
    components,
    styles,
})
