import {
    Box,
    Image,
    Text,
    Heading,
    Button,
    VStack,
    HStack,
    Badge,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaShoppingCart, FaWhatsapp } from 'react-icons/fa'
import { Cake } from '../types'
import { useCart } from '../context/CartContext'

const MotionBox = motion(Box)

interface CakeCardProps {
    cake: Cake
}

export default function CakeCard({ cake }: CakeCardProps) {
    const { addToCart } = useCart()

    const handleWhatsAppOrder = () => {
        const message = `Hello Tarie Cakes! I'd like to order:\n\n${cake.name}\nPrice: $${cake.price}\n\nPlease confirm my order.`
        const phoneNumber = '263771234567'
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
    }

    const categoryColors: Record<string, string> = {
        birthday: '#E8B4B8',
        wedding: '#D4AF37',
        cupcakes: '#9FE2BF',
        custom: '#B19CD9',
        seasonal: '#FFB347',
    }

    return (
        <MotionBox
            bg="brand.cardBg"
            borderRadius="20px"
            overflow="hidden"
            boxShadow="0 10px 40px rgba(74, 55, 40, 0.1)"
            _hover={{
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 50px rgba(74, 55, 40, 0.15)',
            }}
            transition="all 0.3s ease"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {/* Image */}
            <Box position="relative" overflow="hidden" h="200px">
                <Image
                    src={cake.image}
                    alt={cake.name}
                    w="full"
                    h="full"
                    objectFit="cover"
                    transition="transform 0.5s ease"
                    _hover={{ transform: 'scale(1.05)' }}
                />
                <Badge
                    position="absolute"
                    top={3}
                    left={3}
                    bg={categoryColors[cake.category] || 'brand.primary'}
                    color="brand.darkText"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight="600"
                    textTransform="capitalize"
                >
                    {cake.category}
                </Badge>
            </Box>

            {/* Content */}
            <VStack p={5} spacing={3} align="stretch">
                <Heading
                    as="h3"
                    size="md"
                    fontFamily="heading"
                    color="brand.darkText"
                    noOfLines={1}
                >
                    {cake.name}
                </Heading>

                <Text
                    fontSize="sm"
                    color="brand.darkText"
                    opacity={0.7}
                    noOfLines={2}
                >
                    {cake.description}
                </Text>

                <HStack justify="space-between" align="center">
                    <Text
                        fontSize="xl"
                        fontWeight="700"
                        color="brand.accent"
                    >
                        ${cake.price}
                    </Text>
                    <Text fontSize="xs" color="brand.darkText" opacity={0.6}>
                        {cake.sizes?.[0]}
                    </Text>
                </HStack>

                <HStack spacing={2} pt={2}>
                    <Button
                        size="sm"
                        flex={1}
                        bg="brand.accent"
                        color="brand.darkText"
                        leftIcon={<FaShoppingCart />}
                        _hover={{
                            bg: 'brand.accentHover',
                            transform: 'translateY(-2px)',
                        }}
                        transition="all 0.3s ease"
                        onClick={() => addToCart(cake)}
                    >
                        Add to Cart
                    </Button>
                    <Button
                        size="sm"
                        flex={1}
                        variant="outline"
                        borderColor="brand.primary"
                        color="brand.darkText"
                        leftIcon={<FaWhatsapp />}
                        _hover={{
                            bg: 'brand.primary',
                            color: 'brand.darkText',
                        }}
                        transition="all 0.3s ease"
                        onClick={handleWhatsAppOrder}
                    >
                        WhatsApp
                    </Button>
                </HStack>
            </VStack>
        </MotionBox>
    )
}
