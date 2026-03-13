import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

// Modern, sophisticated color palette
const colors = {
    brand: {
        primary: '#FF6B6B',       // Coral red - vibrant and modern
        primaryLight: '#FF8E8E',  // Light coral
        primaryDark: '#E85555',   // Dark coral
        secondary: '#4ECDC4',     // Teal - modern accent
        secondaryLight: '#7EDDD6',
        accent: '#FFE66D',        // Sunny yellow accent
        accentHover: '#FFD93D',  // Darker yellow
        darkText: '#2D3436',      // Modern dark gray
        lightText: '#FFFFFF',
        background: '#FAFAFA',    // Off-white background
        cardBg: '#FFFFFF',
        surface: '#F8F9FA',       // Light surface
        muted: '#636E72',         // Muted text
        border: '#DFE6E9',        // Light border
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
                    boxShadow: '0 10px 40px rgba(255, 107, 107, 0.4)',
                },
                _active: {
                    bg: 'brand.primaryDark',
                    transform: 'translateY(0)',
                },
                transition: 'all 0.3s ease',
            },
            secondary: {
                bg: 'transparent',
                color: 'brand.primary',
                border: '2px solid',
                borderColor: 'brand.primary',
                _hover: {
                    bg: 'brand.primary',
                    color: 'white',
                },
            },
            solid: {
                bg: 'brand.secondary',
                color: 'brand.darkText',
                _hover: {
                    bg: 'brand.secondaryLight',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 40px rgba(78, 205, 196, 0.4)',
                },
                transition: 'all 0.3s ease',
            },
            outline: {
                border: '2px solid',
                borderColor: 'brand.border',
                color: 'brand.darkText',
                _hover: {
                    bg: 'brand.surface',
                    borderColor: 'brand.primary',
                    color: 'brand.primary',
                },
            },
            ghost: {
                color: 'brand.darkText',
                _hover: {
                    bg: 'brand.surface',
                    color: 'brand.primary',
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
                        borderColor: 'brand.primaryLight',
                    },
                    _focus: {
                        borderColor: 'brand.primary',
                        boxShadow: '0 0 0 1px #FF6B6B',
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
                    borderColor: 'brand.primaryLight',
                },
                _focus: {
                    borderColor: 'brand.primary',
                    boxShadow: '0 0 0 1px #FF6B6B',
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
            bg: 'brand.primary',
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
    },
}

export const theme = extendTheme({
    config,
    colors,
    fonts,
    components,
    styles,
})
