import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const colors = {
    brand: {
        primary: '#E8B4B8',
        primaryLight: '#F5D5D8',
        primaryDark: '#D4A0A5',
        secondary: '#FDF5E6',
        accent: '#D4AF37',
        accentHover: '#C9A227',
        darkText: '#4A3728',
        lightText: '#FFFFFF',
        background: '#FFFAF5',
        cardBg: '#FFFFFF',
    },
}

const fonts = {
    heading: "'Playfair Display', serif",
    body: "'Poppins', sans-serif",
}

const components = {
    Button: {
        baseStyle: {
            fontWeight: '500',
            borderRadius: '12px',
        },
        variants: {
            primary: {
                bg: 'brand.accent',
                color: 'brand.darkText',
                _hover: {
                    bg: 'brand.accentHover',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 40px rgba(212, 175, 55, 0.3)',
                },
                transition: 'all 0.3s ease',
            },
            secondary: {
                bg: 'transparent',
                color: 'brand.accent',
                border: '2px solid',
                borderColor: 'brand.accent',
                _hover: {
                    bg: 'brand.accent',
                    color: 'brand.darkText',
                },
            },
            outline: {
                border: '2px solid',
                borderColor: 'brand.primary',
                color: 'brand.darkText',
                _hover: {
                    bg: 'brand.primary',
                    color: 'brand.darkText',
                },
            },
        },
        defaultProps: {
            variant: 'primary',
        },
    },
    Heading: {
        baseStyle: {
            color: 'brand.darkText',
            fontWeight: '600',
        },
    },
    Text: {
        baseStyle: {
            color: 'brand.darkText',
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
            color: 'brand.darkText',
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
