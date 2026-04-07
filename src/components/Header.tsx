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
import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { motion } from 'framer-motion'
import { memo } from 'react'
import { getWhatsAppUrl } from '../config/constants'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'

const MotionBox = motion(Box)

const navLinks = [
    { name: 'nav.home', path: '/' },
    { name: 'nav.menu', path: '/menu' },
    { name: 'nav.gallery', path: '/gallery' },
    { name: 'nav.about', path: '/about' },
    { name: 'nav.contact', path: '/contact' },
]

const Header = memo(function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { totalItems, onOpen: openCart } = useCart()
    const { t } = useTranslation()

    return (
        <MotionBox
            as="header"
            position="sticky"
            top={0}
            left={0}
            right={0}
            zIndex={1000}
            style={{ transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
            bg="rgba(253, 248, 243, 0.85)"
            backdropFilter="blur(20px)"
            boxShadow="0 10px 30px -10px rgba(45, 10, 10, 0.1)"
            borderBottom="1px solid rgba(253, 248, 243, 0.9)"
            py={2}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
        >
            <Container maxW="1400px">
                <Flex align="center" justify="space-between">
                    <Box
                        as={NavLink}
                        to="/"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        position="relative"
                        _hover={{ opacity: 0.8 }}
                        transition="all 0.3s ease"
                    >
                        <Box
                            position="absolute"
                            inset="-10px"
                            bg="rgba(245, 230, 211, 0.5)"
                            filter="blur(15px)"
                            borderRadius="full"
                            zIndex={0}
                        />
                        <Box position="relative" zIndex={1}>
                            <Logo
                                height={38}
                                colorScheme="dark"
                                isLink={false}
                            />
                        </Box>
                    </Box>

                    {/* Desktop Navigation */}
                    <Box
                        bg="transparent"
                        backdropFilter="none"
                        borderRadius="full"
                        px={0}
                        py={0}
                        border="none"
                        transition="all 0.4s ease"
                        display={{ base: 'none', lg: 'flex' }}
                    >
                        <HStack as="nav" spacing={8}>
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    style={{ textDecoration: 'none' }}
                                >
                                    {({ isActive }) => (
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
                                            {t(link.name)}
                                        </Text>
                                    )}
                                </NavLink>
                            ))}
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
                            {t('header.orderNow')}
                        </Button>
                        <LanguageSwitcher />
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
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={onClose}
                                    style={{ textDecoration: 'none' }}
                                >
                                    {({ isActive }) => (
                                        <Box
                                            py={{ base: 3, md: 2 }}
                                            px={3}
                                            borderRadius="12px"
                                            bg={isActive ? 'brand.surface' : 'transparent'}
                                            _hover={{ bg: 'brand.surface' }}
                                            transition="all 0.2s ease"
                                        >
                                            <Text
                                                fontSize={{ base: 'lg', md: 'xl' }}
                                                fontWeight="700"
                                                color="brand.darkText"
                                                transition="all 0.3s ease"
                                            >
                                                {t(link.name)}
                                            </Text>
                                        </Box>
                                    )}
                                </NavLink>
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
                                    {t('header.orderViaWhatsApp')}
                                </Button>
                            </Box>
                            <Box pt={4} pb={8}>
                                <LanguageSwitcher />
                            </Box>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </MotionBox>
    )
})

Header.displayName = 'Header'

export default Header
