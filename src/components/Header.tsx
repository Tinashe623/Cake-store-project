import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    Badge,
    useDisclosure,
    Text,
    Container,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { FaShoppingCart, FaWhatsapp } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { getWhatsAppUrl } from '../config/constants'
import Logo from './Logo'

const MotionBox = motion(Box)

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
]

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { totalItems, onOpen: openCart } = useCart()
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Intersection Observer for active nav tracking
    useEffect(() => {
        const sectionIds = navLinks.map(l => l.href.replace('#', ''))
        const observers: IntersectionObserver[] = []

        sectionIds.forEach((id) => {
            const el = document.getElementById(id)
            if (!el) return
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id)
                    }
                },
                { rootMargin: '-40% 0px -60% 0px' }
            )
            observer.observe(el)
            observers.push(observer)
        })

        return () => observers.forEach(o => o.disconnect())
    }, [])

    return (
        <MotionBox
            as="header"
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={1000}
            style={{ transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
            bg={scrolled ? 'rgba(253, 248, 243, 0.85)' : 'transparent'}
            backdropFilter={scrolled ? 'blur(20px)' : 'none'}
            boxShadow={scrolled ? '0 10px 30px -10px rgba(45, 10, 10, 0.1)' : 'none'}
            borderBottom={scrolled ? '1px solid rgba(253, 248, 243, 0.9)' : 'none'}
            py={scrolled ? 2 : 4}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
        >
            <Container maxW="1400px">
                <Flex align="center" justify="space-between">
                    <Box
                        as="a"
                        href="#home"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        position="relative"
                        _hover={{ opacity: 0.8 }}
                        transition="all 0.3s ease"
                    >
                        {scrolled && (
                            <Box
                                position="absolute"
                                inset="-10px"
                                bg="rgba(245, 230, 211, 0.5)"
                                filter="blur(15px)"
                                borderRadius="full"
                                zIndex={0}
                            />
                        )}
                        <Box position="relative" zIndex={1}>
                            <Logo
                                height={scrolled ? 38 : 52}
                                colorScheme="dark"
                            />
                        </Box>
                    </Box>

                    {/* Desktop Navigation */}
                    <Box
                        bg={scrolled ? 'transparent' : 'rgba(253,248,243,0.1)'}
                        backdropFilter={scrolled ? 'none' : 'blur(10px)'}
                        borderRadius="full"
                        px={scrolled ? 0 : 6}
                        py={scrolled ? 0 : 2}
                        border={scrolled ? 'none' : '1px solid rgba(245,230,211,0.2)'}
                        transition="all 0.4s ease"
                        display={{ base: 'none', lg: 'flex' }}
                    >
                        <HStack as="nav" spacing={8}>
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.replace('#', '')
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Text
                                            fontSize="sm"
                                            fontWeight="700"
                                            color={isActive ? 'brand.accent' : 'brand.primary'}
                                            _hover={{ color: 'brand.accent' }}
                                            transition="all 0.3s ease"
                                            position="relative"
                                            letterSpacing="0.5px"
                                            textTransform="uppercase"
                                            _after={{
                                                content: '""',
                                                position: 'absolute',
                                                bottom: '-4px',
                                                left: '50%',
                                                transform: isActive ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                                                w: 'full',
                                                h: '2px',
                                                bg: 'brand.accent',
                                                borderRadius: 'full',
                                                transition: 'transform 0.3s ease',
                                            }}
                                        >
                                            {link.name}
                                        </Text>
                                    </a>
                                )
                            })}
                        </HStack>
                    </Box>

                    {/* Cart & WhatsApp */}
                    <HStack spacing={{ base: 2, md: 4 }}>
                        <Button
                            display={{ base: 'none', md: 'flex' }}
                            leftIcon={<FaWhatsapp />}
                            variant="solid"
                            bg="#25D366"
                            color="white"
                            size="md"
                            borderRadius="full"
                            px={6}
                            fontWeight="600"
                            _hover={{
                                bg: '#20BD59',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 8px 20px rgba(37, 211, 102, 0.3)'
                            }}
                            as="a"
                            href={getWhatsAppUrl('Hello Tarie Cakes!')}
                            target="_blank"
                        >
                            Order Now
                        </Button>
                        <Box position="relative">
                            <IconButton
                                aria-label="Cart"
                                icon={<FaShoppingCart />}
                                variant="ghost"
                                color="brand.primary"
                                fontSize="xl"
                                _hover={{ bg: 'brand.surface', color: 'brand.accent' }}
                                onClick={openCart}
                                borderRadius="full"
                                size="md"
                            />
                            {totalItems > 0 && (
                                <Badge
                                    position="absolute"
                                    top="-2px"
                                    right="-2px"
                                    bg="brand.accent"
                                    color="brand.primary"
                                    borderRadius="full"
                                    fontSize="xs"
                                    minW="22px"
                                    h="22px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    fontWeight="bolder"
                                    boxShadow="sm"
                                >
                                    {totalItems}
                                </Badge>
                            )}
                        </Box>

                        {/* Mobile Menu Button */}
                        <IconButton
                            aria-label="Open menu"
                            icon={<HamburgerIcon />}
                            display={{ base: 'flex', lg: 'none' }}
                            onClick={onOpen}
                            variant="ghost"
                            color="brand.primary"
                            borderRadius="full"
                            size="md"
                            _hover={{ bg: 'brand.surface' }}
                        />
                    </HStack>
                </Flex>
            </Container>

            {/* Mobile Drawer */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay backdropFilter="blur(10px)" bg="rgba(26, 5, 5, 0.3)" />
                <DrawerContent bg="rgba(253, 248, 243, 0.95)" backdropFilter="blur(20px)">
                    <DrawerCloseButton mt={2} />
                    <DrawerHeader borderBottomWidth="1px" borderColor="brand.border" pt={5}>
                        <Logo height={36} colorScheme="dark" />
                    </DrawerHeader>

                    <DrawerBody px={{ base: 4, md: 6 }}>
                        <VStack spacing={{ base: 2, md: 6 }} align="stretch" mt={8}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={onClose}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Box
                                        py={{ base: 3, md: 2 }}
                                        px={3}
                                        borderRadius="12px"
                                        _hover={{ bg: 'brand.surface' }}
                                        transition="all 0.2s ease"
                                    >
                                        <Text
                                            fontSize={{ base: 'lg', md: 'xl' }}
                                            fontWeight="700"
                                            color="brand.darkText"
                                            transition="all 0.3s ease"
                                        >
                                            {link.name}
                                        </Text>
                                    </Box>
                                </a>
                            ))}
                            <Box pt={6}>
                                <Button
                                    leftIcon={<FaWhatsapp />}
                                    bg="#25D366"
                                    color="white"
                                    size="lg"
                                    h="60px"
                                    borderRadius="20px"
                                    _hover={{ bg: '#20BD59', transform: 'translateY(-2px)', boxShadow: 'lg' }}
                                    as="a"
                                    href={getWhatsAppUrl('Hello Tarie Cakes!')}
                                    target="_blank"
                                    w="full"
                                >
                                    Order via WhatsApp
                                </Button>
                            </Box>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </MotionBox>
    )
}
