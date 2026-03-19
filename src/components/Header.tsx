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
    Image,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
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
        <MotionBox
            as="header"
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={1000}
            bg="#0A192F"
            borderBottom="1px solid"
            borderColor="#C5A059"
            boxShadow="none"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Container maxW="1400px" py={{ base: 2, md: 2 }}>
                <Flex align="center" justify="space-between">
                    {/* Logo */}
                    <Image
                        src="/tarie cakes logo.png"
                        alt="Tarie Cakes Logo"
                        h={{ base: '50px', md: '65px' }}
                        w="auto"
                        objectFit="contain"
                    />

                    {/* Desktop Navigation */}
                    <HStack
                        as="nav"
                        spacing={{ base: 4, md: 8 }}
                        display={{ base: 'none', lg: 'flex' }}
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
                                    color="white"
                                    _hover={{ color: '#C5A059' }}
                                    transition="all 0.3s ease"
                                    cursor="pointer"
                                    position="relative"
                                    letterSpacing="0.5px"
                                >
                                    {link.name}
                                </Text>
                            </a>
                        ))}
                    </HStack>

                    {/* Cart & WhatsApp */}
                    <HStack spacing={3}>
                        <Button
                            display={{ base: 'none', md: 'flex' }}
                            leftIcon={<FaWhatsapp />}
                            variant="solid"
                            bg="#25D366"
                            color="white"
                            size="sm"
                            borderRadius="full"
                            px={5}
                            fontWeight="600"
                            _hover={{
                                bg: '#20BD59',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 8px 20px rgba(37, 211, 102, 0.3)'
                            }}
                            as="a"
                            href="https://wa.me/263771234567"
                            target="_blank"
                        >
                            Order Now
                        </Button>
                        <Box position="relative">
                            <IconButton
                                aria-label="Cart"
                                icon={<FaShoppingCart />}
                                variant="ghost"
                                color="white"
                                fontSize="lg"
                                _hover={{ bg: 'gray.100', color: '#C5A059' }}
                                onClick={openCart}
                                borderRadius="full"
                                size="md"
                            />
                            {totalItems > 0 && (
                                <Badge
                                    position="absolute"
                                    top="-2px"
                                    right="-2px"
                                    bg="#C5A059"
                                    color="white"
                                    borderRadius="full"
                                    fontSize="xs"
                                    minW="20px"
                                    h="20px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    fontWeight="bold"
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
                            color="white"
                            borderRadius="full"
                            size="md"
                        />
                    </HStack>
                </Flex>
            </Container>

            {/* Mobile Drawer */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay backdropFilter="blur(10px)" />
                <DrawerContent bg="white">
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px" borderColor="gray.100">
                        <HStack spacing={3}>
                            <Image
                                src="/tarie logo.png"
                                alt="Tarie Cakes Logo"
                                h="40px"
                                w="auto"
                                objectFit="contain"
                            />
                        </HStack>
                    </DrawerHeader>

                    <DrawerBody>
                        <VStack spacing={6} align="stretch" mt={8}>
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
                                        color="white"
                                        _hover={{ color: '#C5A059' }}
                                        py={2}
                                        transition="all 0.2s"
                                    >
                                        {link.name}
                                    </Text>
                                </a>
                            ))}
                            <Button
                                leftIcon={<FaWhatsapp />}
                                bg="#25D366"
                                color="white"
                                size="lg"
                                borderRadius="full"
                                _hover={{ bg: '#20BD59' }}
                                as="a"
                                href="https://wa.me/263771234567"
                                target="_blank"
                                w="full"
                                mt={4}
                            >
                                Order via WhatsApp
                            </Button>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </MotionBox>
    )
}
