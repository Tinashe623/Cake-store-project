import { lazy, Suspense } from 'react'
import { Box, IconButton } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import Header from './components/Header'
import Hero from './components/Hero'
import { getWhatsAppUrl } from './config/constants'
import { useIsMobile } from './hooks/useResponsive'

const Menu = lazy(() => import('./components/Menu'))
const HowItWorks = lazy(() => import('./components/HowItWorks'))
const Gallery = lazy(() => import('./components/Gallery'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const CartDrawer = lazy(() => import('./components/CartDrawer'))

const MotionBox = motion(Box)

function App() {
    const isMobile = useIsMobile()
    const { scrollYProgress } = useScroll()
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <Box>
            {/* Scroll Progress Bar — desktop only */}
            {!isMobile && (
                <MotionBox
                    position="fixed"
                    top={0}
                    left={0}
                    right={0}
                    h="3px"
                    bg="brand.accent"
                    style={{ scaleX }}
                    transformOrigin="0%"
                    zIndex={1100}
                />
            )}

            <Header />
            <Hero />
            <Suspense fallback={null}>
                <Menu />
                <HowItWorks />
                <Gallery />
                <Testimonials />
                <About />
                <Contact />
                <Footer />
                <CartDrawer />
            </Suspense>

            {/* Mobile Floating WhatsApp CTA */}
            <IconButton
                aria-label="Order on WhatsApp"
                icon={<FaWhatsapp size={18} />}
                position="fixed"
                bottom="20px"
                right="20px"
                zIndex={900}
                display={{ base: 'flex', md: 'none' }}
                w="48px"
                h="48px"
                borderRadius="full"
                bg="#25D366"
                color="white"
                boxShadow="0 4px 16px rgba(37, 211, 102, 0.35)"
                _hover={{
                    bg: '#20BD59',
                    transform: 'scale(1.1)',
                    boxShadow: '0 6px 24px rgba(37, 211, 102, 0.5)',
                }}
                transition="all 0.3s ease"
                as="a"
                href={getWhatsAppUrl('Hello Tarie Cakes!')}
                target="_blank"
            />
        </Box>
    )
}

export default App
