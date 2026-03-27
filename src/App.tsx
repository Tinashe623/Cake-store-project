import { Box, IconButton } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import HowItWorks from './components/HowItWorks'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import { getWhatsAppUrl } from './config/constants'

const MotionBox = motion(Box)

function App() {
    const { scrollYProgress } = useScroll()
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <Box>
            {/* Scroll Progress Bar */}
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

            <Header />
            <Hero />
            <Menu />
            <HowItWorks />
            <Gallery />
            <Testimonials />
            <About />
            <Contact />
            <Footer />
            <CartDrawer />

            {/* Mobile Floating WhatsApp CTA */}
            <IconButton
                aria-label="Order on WhatsApp"
                icon={<FaWhatsapp size={24} />}
                position="fixed"
                bottom="24px"
                right="24px"
                zIndex={900}
                display={{ base: 'flex', md: 'none' }}
                w="60px"
                h="60px"
                borderRadius="full"
                bg="#25D366"
                color="white"
                boxShadow="0 4px 20px rgba(37, 211, 102, 0.4), 0 0 0 4px rgba(201, 169, 110, 0.3)"
                _hover={{
                    bg: '#20BD59',
                    transform: 'scale(1.1)',
                    boxShadow: '0 6px 30px rgba(37, 211, 102, 0.5), 0 0 0 4px rgba(201, 169, 110, 0.5)',
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
