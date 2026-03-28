import { lazy, Suspense } from 'react'
import { Box, IconButton } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import ScrollToTop from './ScrollToTop'
import { getWhatsAppUrl } from '../config/constants'
import { useIsMobile } from '../hooks/useResponsive'

const Footer = lazy(() => import('./Footer'))
const CartDrawer = lazy(() => import('./CartDrawer'))

const MotionBox = motion(Box)

export default function Layout() {
    const isMobile = useIsMobile()
    const { scrollYProgress } = useScroll()
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <Box>
            {/* Scroll to top on route change */}
            <ScrollToTop />

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

            {/* Page Content Container */}
            <Box bg="brand.surface" minH="100vh">
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </Box>

            {/* Footer Section */}
            <Box bg="brand.background" boxShadow="0 -4px 20px rgba(45, 10, 10, 0.05)">
                {/* Glowing Line on Top */}
                <Box
                    h="3px"
                    bg="brand.accent"
                    boxShadow="0 0 10px rgba(201, 169, 110, 0.6), 0 0 20px rgba(201, 169, 110, 0.4)"
                    borderRadius="full"
                />
                <Suspense fallback={null}>
                    <Footer />
                </Suspense>
            </Box>

            {/* Cart Drawer */}
            <Suspense fallback={null}>
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