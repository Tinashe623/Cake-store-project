import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

// Modern, sophisticated color palette - Navy Gold Luxury
const colors = {
    brand: {
        primary: '#0A192F',          // Midnight Navy - headers, footers, bold CTAs
        primaryLight: '#1A2D4A',     // Lighter navy
        primaryDark: '#060D19',      // Darker navy
        secondary: '#C5A059',        // Champagne Gold - accents, borders, icons
        secondaryLight: '#D4B67A',   // Light gold
        accent: '#C5A059',           // Gold accent
        accentHover: '#B89545',       // Darker gold
        darkText: '#2D2D2D',          // Deep Charcoal - body text
        lightText: '#FFFFFF',        // White text
        background: '#F8F9FA',       // Soft Alabaster - main background
        cardBg: '#FFFFFF',           // Ivory Silk - card components
        surface: '#F8F9FA',          // Soft Alabaster - secondary sections
        muted: '#6B7280',            // Muted text
        border: '#E5E7EB',            // Light border
        gold: '#C5A059',             // Gold for highlights
    },
}

const fonts = {
    heading: "'Playfair Display', serif",
    body: "'Poppins', sans-serif",
}

const components = {
    Button: {
        baseStyle: {
            fontWeight: '600',
            borderRadius: '12px',
            textTransform: 'none',
            fontSize: 'md',
        },
        variants: {
            primary: {
                bg: 'brand.primary',
                color: 'white',
                _hover: {
                    bg: 'brand.primaryDark',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 40px rgba(10, 25, 47, 0.4)',
                },
                _active: {
                    bg: 'brand.primaryDark',
                    transform: 'translateY(0)',
                },
                transition: 'all 0.3s ease',
            },
            secondary: {
                bg: 'transparent',
                color: 'brand.secondary',
                border: '2px solid',
                borderColor: 'brand.secondary',
                _hover: {
                    bg: 'brand.secondary',
                    color: 'white',
                },
            },
            solid: {
                bg: 'brand.secondary',
                color: 'brand.primary',
                _hover: {
                    bg: 'brand.secondaryLight',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 40px rgba(197, 160, 89, 0.4)',
                },
                transition: 'all 0.3s ease',
            },
            outline: {
                border: '2px solid',
                borderColor: 'brand.border',
                color: 'brand.darkText',
                _hover: {
                    bg: 'brand.surface',
                    borderColor: 'brand.secondary',
                    color: 'brand.secondary',
                },
            },
            ghost: {
                color: 'brand.darkText',
                _hover: {
                    bg: 'brand.surface',
                    color: 'brand.secondary',
                },
            },
        },
        sizes: {
            lg: {
                px: 8,
                py: 6,
                fontSize: 'md',
            },
            md: {
                px: 6,
                py: 4,
                fontSize: 'sm',
            },
            sm: {
                px: 4,
                py: 2,
                fontSize: 'sm',
            },
        },
        defaultProps: {
            variant: 'primary',
            size: 'md',
        },
    },
    Heading: {
        baseStyle: {
            color: 'brand.darkText',
            fontWeight: '700',
        },
    },
    Text: {
        baseStyle: {
            color: 'brand.darkText',
        },
    },
    Input: {
        variants: {
            outline: {
                field: {
                    borderColor: 'brand.border',
                    bg: 'white',
                    _hover: {
                        borderColor: 'brand.secondary',
                    },
                    _focus: {
                        borderColor: 'brand.secondary',
                        boxShadow: '0 0 0 1px #C5A059',
                    },
                },
            },
        },
    },
    Textarea: {
        variants: {
            outline: {
                borderColor: 'brand.border',
                bg: 'white',
                _hover: {
                    borderColor: 'brand.secondary',
                },
                _focus: {
                    borderColor: 'brand.secondary',
                    boxShadow: '0 0 0 1px #C5A059',
                },
            },
        },
    },
    Badge: {
        baseStyle: {
            fontWeight: '600',
            borderRadius: 'full',
            textTransform: 'capitalize',
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
        },
        '*::selection': {
            bg: 'brand.secondary',
            color: 'white',
        },
        '::-webkit-scrollbar': {
            width: '8px',
        },
        '::-webkit-scrollbar-track': {
            bg: 'brand.surface',
        },
        '::-webkit-scrollbar-thumb': {
            bg: 'brand.border',
            borderRadius: 'full',
        },
        '::-webkit-scrollbar-thumb:hover': {
            bg: 'brand.muted',
        },
        '@keyframes sparkle': {
            '0%, 100%': {
                opacity: 0,
                transform: 'scale(0)',
            },
            '50%': {
                opacity: 1,
                transform: 'scale(1)',
            },
        },
    },
}

export const theme = extendTheme({
    config,
    colors,
    fonts,
    components,
    styles,
})
