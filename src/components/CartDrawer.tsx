import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    HStack,
    Text,
    Image,
    Button,
    IconButton,
    Box,
    Flex,
    Divider,
} from '@chakra-ui/react'
import { AddIcon, MinusIcon, DeleteIcon } from '@chakra-ui/icons'
import { FaShoppingCart, FaWhatsapp, FaShoppingBag } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import { motion, AnimatePresence } from 'framer-motion'
import { getWhatsAppUrl } from '../config/constants'

const MotionBox = motion(Box)

export default function CartDrawer() {
    const { items, isOpen, onClose, removeFromCart, updateQuantity, subtotal, clearCart } = useCart()

    const handleCheckout = () => {
        if (items.length === 0) return

        const orderList = items
            .map(item => {
                let detail = `${item.cake.name}`
                if (item.selectedFlavor) detail += ` (${item.selectedFlavor})`
                if (item.selectedSize) detail += ` - ${item.selectedSize}`
                detail += ` x${item.quantity} - $${item.cake.price * item.quantity}`
                return detail
            })
            .join('\n')

        const message = `Hello Tarie Cakes! I'd like to order:\n\n${orderList}\n\nTotal: $${subtotal}\n\nPlease confirm my order.`
        window.open(getWhatsAppUrl(message), '_blank')
    }

    return (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
            <DrawerOverlay backdropFilter="blur(8px)" bg="rgba(26, 5, 5, 0.6)" />
            <DrawerContent bg="white" borderLeftRadius={{ base: '0', md: '30px' }} overflow="hidden" boxShadow="-20px 0 60px rgba(45, 10, 10, 0.1)">
                <DrawerCloseButton size="lg" top={4} right={4} color="brand.primary" _hover={{ bg: 'brand.surface', color: 'brand.accent' }} borderRadius="full" />
                
                <DrawerHeader pt={8} pb={6} borderBottom="1px solid" borderColor="brand.border">
                    <HStack spacing={3}>
                        <Box p={3} bg="brand.surface" borderRadius="16px" color="brand.primary">
                            <FaShoppingBag size={20} />
                        </Box>
                        <VStack align="start" spacing={0}>
                            <Text fontFamily="heading" fontSize="2xl" color="brand.primary" fontWeight="800">Your Cart</Text>
                            <Text fontSize="sm" color="brand.muted" fontWeight="600">
                                {items.length} {items.length === 1 ? 'item' : 'items'} inside
                            </Text>
                        </VStack>
                    </HStack>
                </DrawerHeader>

                <DrawerBody px={6} py={6}>
                    {items.length === 0 ? (
                        <VStack spacing={6} py={20} textAlign="center" h="full" justify="center">
                            <MotionBox
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: 'spring', damping: 15 }}
                            >
                                <Box p={6} bg="brand.surface" borderRadius="full">
                                    <FaShoppingCart size={64} color="var(--chakra-colors-brand-primary)" opacity={0.2} />
                                </Box>
                            </MotionBox>
                            <VStack spacing={2}>
                                <Text fontSize="xl" color="brand.primary" fontWeight="800" fontFamily="heading">
                                    Your cart is empty
                                </Text>
                                <Text color="brand.muted" fontSize="sm" maxW="250px">
                                    Looks like you haven't made your choice yet. Explore our menu to find your perfect cake.
                                </Text>
                            </VStack>
                            <Button
                                size="lg"
                                bg="brand.primary"
                                color="brand.lightText"
                                mt={4}
                                _hover={{ bg: 'brand.primaryLight', transform: 'translateY(-2px)' }}
                                borderRadius="16px"
                                px={8}
                                onClick={onClose}
                            >
                                Browse Menu
                            </Button>
                        </VStack>
                    ) : (
                        <VStack spacing={4} align="stretch">
                            <AnimatePresence>
                                {items.map((item, index) => (
                                    <MotionBox
                                        key={`${item.cake.id}-${item.selectedFlavor}-${item.selectedSize}-${index}`}
                                        initial={{ opacity: 0, x: 50, height: 0 }}
                                        animate={{ opacity: 1, x: 0, height: 'auto' }}
                                        exit={{ opacity: 0, x: -50, height: 0, marginBottom: 0 }}
                                        transition={{ duration: 0.3 }}
                                        overflow="hidden"
                                    >
                                        <Flex
                                            w="full"
                                            p={4}
                                            bg="brand.surface"
                                            borderRadius="24px"
                                            align="center"
                                            gap={4}
                                            position="relative"
                                            _hover={{ boxShadow: '0 10px 30px -10px rgba(45, 10, 10, 0.05)' }}
                                            transition="box-shadow 0.2s ease"
                                        >
                                            <Box position="relative" w="90px" h="90px" borderRadius="16px" overflow="hidden" flexShrink={0}>
                                                <Image
                                                    src={item.cake.image}
                                                    alt={item.cake.name}
                                                    w="full"
                                                    h="full"
                                                    objectFit="cover"
                                                />
                                            </Box>
                                            
                                            <VStack flex={1} align="start" spacing={1} justify="center">
                                                <Text fontWeight="800" color="brand.primary" fontSize="md" noOfLines={1}>
                                                    {item.cake.name}
                                                </Text>
                                                {(item.selectedFlavor || item.selectedSize) && (
                                                    <Text fontSize="xs" color="brand.muted" noOfLines={1}>
                                                        {[item.selectedFlavor, item.selectedSize].filter(Boolean).join(' · ')}
                                                    </Text>
                                                )}
                                                <Text fontSize="sm" color="brand.accent" fontWeight="700">
                                                    ${item.cake.price}
                                                </Text>

                                                {/* Quantity Controls */}
                                                <HStack spacing={0} bg="white" borderRadius="full" mt={2} p={1} boxShadow="sm">
                                                    <IconButton
                                                        aria-label="Decrease quantity"
                                                        icon={<MinusIcon />}
                                                        size="xs"
                                                        variant="ghost"
                                                        color="brand.primary"
                                                        borderRadius="full"
                                                        onClick={() => updateQuantity(item.cake.id, item.quantity - 1)}
                                                        isDisabled={item.quantity <= 1}
                                                        _hover={{ bg: 'brand.surface' }}
                                                    />
                                                    <Text fontSize="xs" fontWeight="800" w="24px" textAlign="center" color="brand.primary">
                                                        {item.quantity}
                                                    </Text>
                                                    <IconButton
                                                        aria-label="Increase quantity"
                                                        icon={<AddIcon />}
                                                        size="xs"
                                                        variant="ghost"
                                                        color="brand.primary"
                                                        borderRadius="full"
                                                        onClick={() => updateQuantity(item.cake.id, item.quantity + 1)}
                                                        isDisabled={item.quantity >= 10}
                                                        _hover={{ bg: 'brand.surface' }}
                                                    />
                                                </HStack>
                                            </VStack>

                                            <VStack align="end" h="90px" justify="space-between" py={1}>
                                                <IconButton
                                                    aria-label="Remove item"
                                                    icon={<DeleteIcon />}
                                                    size="sm"
                                                    variant="ghost"
                                                    color="gray.400"
                                                    _hover={{ color: 'red.500', bg: 'red.50' }}
                                                    borderRadius="full"
                                                    onClick={() => removeFromCart(item.cake.id)}
                                                />
                                                <Text fontWeight="800" color="brand.primary">
                                                    ${item.cake.price * item.quantity}
                                                </Text>
                                            </VStack>
                                        </Flex>
                                    </MotionBox>
                                ))}
                            </AnimatePresence>
                        </VStack>
                    )}
                </DrawerBody>

                <DrawerFooter flexDirection="column" p={0} borderTop="1px solid" borderColor="brand.border" bg="white">
                    {items.length > 0 && (
                        <Box w="full" p={6}>
                            <VStack spacing={4} mb={6}>
                                <Flex w="full" justify="space-between" alignItems="center">
                                    <Text fontSize="sm" color="brand.muted" fontWeight="600">Subtotal</Text>
                                    <Text fontSize="md" fontWeight="800" color="brand.primary">${subtotal}</Text>
                                </Flex>
                                <Flex w="full" justify="space-between" alignItems="center">
                                    <Text fontSize="sm" color="brand.muted" fontWeight="600">Delivery</Text>
                                    <Text fontSize="sm" fontWeight="800" color="brand.accent">Calculated later</Text>
                                </Flex>
                                <Divider borderColor="brand.border" />
                                <Flex w="full" justify="space-between" alignItems="center">
                                    <Text fontSize="lg" color="brand.primary" fontWeight="800" fontFamily="heading">Total</Text>
                                    <Text fontSize="2xl" fontWeight="800" color="brand.primary">${subtotal}</Text>
                                </Flex>
                            </VStack>

                            <VStack w="full" spacing={3}>
                                <Button
                                    w="full"
                                    h="56px"
                                    bg="brand.primary"
                                    color="brand.lightText"
                                    leftIcon={<FaWhatsapp size={20} />}
                                    _hover={{
                                        bg: 'brand.primaryLight',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 10px 20px rgba(45, 10, 10, 0.2)'
                                    }}
                                    borderRadius="16px"
                                    fontSize="md"
                                    onClick={handleCheckout}
                                >
                                    Checkout via WhatsApp
                                </Button>
                                {items.length > 0 && (
                                     <Button
                                         w="full"
                                         variant="ghost"
                                         color="brand.muted"
                                         _hover={{ color: 'brand.primary' }}
                                         onClick={clearCart}
                                         size="sm"
                                     >
                                         Clear Cart
                                     </Button>
                                )}
                            </VStack>
                        </Box>
                    )}
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
