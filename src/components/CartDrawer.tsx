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
} from '@chakra-ui/react'
import { AddIcon, MinusIcon, DeleteIcon } from '@chakra-ui/icons'
import { FaShoppingCart, FaWhatsapp } from 'react-icons/fa'
import { useCart } from '../context/CartContext'

export default function CartDrawer() {
    const { items, isOpen, onClose, removeFromCart, updateQuantity, subtotal, clearCart } = useCart()

    const handleCheckout = () => {
        if (items.length === 0) return

        const orderList = items
            .map(item => `${item.cake.name} x${item.quantity} - $${item.cake.price * item.quantity}`)
            .join('\n')

        const message = `Hello Tarie Cakes! I'd like to order:\n\n${orderList}\n\nTotal: $${subtotal}\n\nPlease confirm my order.`

        const phoneNumber = '263771234567'
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
    }

    return (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
            <DrawerOverlay />
            <DrawerContent bg="brand.background">
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth="1px">
                    <HStack spacing={2}>
                        <FaShoppingCart />
                        <Text fontFamily="heading">Your Cart</Text>
                        <Text fontSize="sm" opacity={0.6} fontWeight="normal">
                            ({items.length} {items.length === 1 ? 'item' : 'items'})
                        </Text>
                    </HStack>
                </DrawerHeader>

                <DrawerBody>
                    {items.length === 0 ? (
                        <VStack spacing={4} py={12} textAlign="center">
                            <Box fontSize="4xl">🛒</Box>
                            <Text fontSize="lg" color="brand.darkText" fontWeight="500">
                                Your cart is empty
                            </Text>
                            <Text color="brand.darkText" opacity={0.6}>
                                Browse our delicious cakes and add them to your cart!
                            </Text>
                            <Button
                                variant="primary"
                                onClick={onClose}
                                mt={4}
                            >
                                Continue Shopping
                            </Button>
                        </VStack>
                    ) : (
                        <VStack spacing={4} py={4}>
                            {items.map((item) => (
                                <Box
                                    key={item.cake.id}
                                    w="full"
                                    p={4}
                                    bg="brand.cardBg"
                                    borderRadius="16px"
                                    boxShadow="0 4px 20px rgba(74, 55, 40, 0.08)"
                                >
                                    <HStack spacing={4} align="start">
                                        <Image
                                            src={item.cake.image}
                                            alt={item.cake.name}
                                            w="80px"
                                            h="80px"
                                            objectFit="cover"
                                            borderRadius="12px"
                                        />
                                        <VStack flex={1} align="start" spacing={2}>
                                            <Text fontWeight="600" color="brand.darkText" noOfLines={1}>
                                                {item.cake.name}
                                            </Text>
                                            <Text fontSize="sm" color="brand.accent" fontWeight="600">
                                                ${item.cake.price}
                                            </Text>

                                            {/* Quantity Controls */}
                                            <HStack spacing={2}>
                                                <IconButton
                                                    aria-label="Decrease quantity"
                                                    icon={<MinusIcon />}
                                                    size="xs"
                                                    variant="outline"
                                                    borderColor="brand.primary"
                                                    onClick={() => updateQuantity(item.cake.id, item.quantity - 1)}
                                                    isDisabled={item.quantity <= 1}
                                                />
                                                <Text fontSize="sm" fontWeight="600" minW="24px" textAlign="center">
                                                    {item.quantity}
                                                </Text>
                                                <IconButton
                                                    aria-label="Increase quantity"
                                                    icon={<AddIcon />}
                                                    size="xs"
                                                    variant="outline"
                                                    borderColor="brand.primary"
                                                    onClick={() => updateQuantity(item.cake.id, item.quantity + 1)}
                                                    isDisabled={item.quantity >= 10}
                                                />
                                            </HStack>
                                        </VStack>

                                        <VStack spacing={2}>
                                            <Text fontWeight="600" color="brand.darkText">
                                                ${item.cake.price * item.quantity}
                                            </Text>
                                            <IconButton
                                                aria-label="Remove item"
                                                icon={<DeleteIcon />}
                                                size="sm"
                                                variant="ghost"
                                                colorScheme="red"
                                                onClick={() => removeFromCart(item.cake.id)}
                                            />
                                        </VStack>
                                    </HStack>
                                </Box>
                            ))}
                        </VStack>
                    )}
                </DrawerBody>

                {items.length > 0 && (
                    <DrawerFooter borderTopWidth="1px" flexDir="column" gap={4}>
                        <HStack justify="space-between" w="full">
                            <Text fontSize="lg" fontWeight="600" color="brand.darkText">
                                Subtotal:
                            </Text>
                            <Text fontSize="xl" fontWeight="700" color="brand.accent">
                                ${subtotal}
                            </Text>
                        </HStack>

                        <VStack w="full" spacing={3}>
                            <Button
                                w="full"
                                size="lg"
                                bg="brand.accent"
                                color="brand.darkText"
                                leftIcon={<FaWhatsapp />}
                                _hover={{
                                    bg: 'brand.accentHover',
                                    transform: 'translateY(-2px)',
                                }}
                                transition="all 0.3s ease"
                                onClick={handleCheckout}
                            >
                                Checkout via WhatsApp
                            </Button>
                            <Button
                                w="full"
                                size="lg"
                                variant="outline"
                                borderColor="brand.primary"
                                color="brand.darkText"
                                onClick={onClose}
                            >
                                Continue Shopping
                            </Button>
                            <Button
                                w="full"
                                size="sm"
                                variant="ghost"
                                colorScheme="red"
                                onClick={clearCart}
                            >
                                Clear Cart
                            </Button>
                        </VStack>
                    </DrawerFooter>
                )}
            </DrawerContent>
        </Drawer>
    )
}
