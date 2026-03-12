import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    Badge,
    useDisclosure,
    Stack,
    Heading,
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
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { FaShoppingCart, FaWhatsapp } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import { motion } from 'framer-motion'

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

    return (
        <Box
            as="header"
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={1000}
            bg="brand.background"
            boxShadow="0 2px 20px rgba(74, 55, 40, 0.08)"
            backdropFilter="blur(10px)"
        >
            <Container maxW="1200px" py={3}>
                <Flex align="center" justify="space-between">
                    {/* Logo */}
                    <HStack spacing={2}>
                        <Text fontSize="2xl">🎂</Text>
                        <Heading
                            size="md"
                            fontFamily="heading"
                            color="brand.darkText"
                            letterSpacing="0.5px"
                        >
                            Tarie Cakes
                        </Heading>
                    </HStack>

                    {/* Desktop Navigation */}
                    <HStack
                        as="nav"
                        spacing={8}
                        display={{ base: 'none', md: 'flex' }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                style={{ textDecoration: 'none' }}
                            >
                                <Text
                                    fontSize="sm"
                                    fontWeight="500"
                                    color="brand.darkText"
                                    _hover={{ color: 'brand.accent' }}
                                    transition="all 0.3s ease"
                                    cursor="pointer"
                                    position="relative"
                                    _after={{
                                        content: '""',
                                        position: 'absolute',
                                        bottom: '-4px',
                                        left: 0,
                                        width: '0%',
                                        height: '2px',
                                        bg: 'brand.accent',
                                        transition: 'width 0.3s ease',
                                    }}
                                    sx={{
                                        '&:hover::after': {
                                            width: '100%',
                                        },
                                    }}
                                >
                                    {link.name}
                                </Text>
                            </a>
                        ))}
                    </HStack>

                    {/* Cart & WhatsApp */}
                    <HStack spacing={3}>
                        <IconButton
                            aria-label="WhatsApp"
                            icon={<FaWhatsapp />}
                            variant="ghost"
                            color="brand.accent"
                            fontSize="xl"
                            _hover={{ bg: 'brand.primaryLight' }}
                            as="a"
                            href="https://wa.me/263771234567"
                            target="_blank"
                        />
                        <Box position="relative">
                            <IconButton
                                aria-label="Cart"
                                icon={<FaShoppingCart />}
                                variant="ghost"
                                color="brand.darkText"
                                fontSize="lg"
                                _hover={{ bg: 'brand.primaryLight' }}
                                onClick={openCart}
                            />
                            {totalItems > 0 && (
                                <Badge
                                    position="absolute"
                                    top="-2px"
                                    right="-2px"
                                    bg="brand.accent"
                                    color="brand.darkText"
                                    borderRadius="full"
                                    fontSize="xs"
                                    minW="18px"
                                    h="18px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {totalItems}
                                </Badge>
                            )}
                        </Box>

                        {/* Mobile Menu Button */}
                        <IconButton
                            aria-label="Open menu"
                            icon={<HamburgerIcon />}
                            display={{ base: 'flex', md: 'none' }}
                            onClick={onOpen}
                            variant="ghost"
                            color="brand.darkText"
                        />
                    </HStack>
                </Flex>
            </Container>

            {/* Mobile Drawer */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent bg="brand.background">
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px">
                        <HStack spacing={2}>
                            <Text fontSize="2xl">🎂</Text>
                            <Text fontFamily="heading">Tarie Cakes</Text>
                        </HStack>
                    </DrawerHeader>

                    <DrawerBody>
                        <VStack spacing={6} align="stretch" mt={6}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={onClose}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Text
                                        fontSize="lg"
                                        fontWeight="500"
                                        color="brand.darkText"
                                        _hover={{ color: 'brand.accent' }}
                                        py={2}
                                    >
                                        {link.name}
                                    </Text>
                                </a>
                            ))}
                            <Button
                                variant="primary"
                                leftIcon={<FaWhatsapp />}
                                as="a"
                                href="https://wa.me/263771234567"
                                target="_blank"
                                w="full"
                            >
                                Order via WhatsApp
                            </Button>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}
