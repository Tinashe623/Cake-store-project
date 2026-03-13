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
        birthday: '#FF6B6B',
        wedding: '#4ECDC4',
        cupcakes: '#95E1D3',
        custom: '#A66CFF',
        seasonal: '#FFB347',
    }

    return (
        <MotionBox
            bg="brand.cardBg"
            borderRadius="24px"
            overflow="hidden"
            boxShadow="0 10px 40px rgba(0, 0, 0, 0.08)"
            _hover={{
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 50px rgba(255, 107, 107, 0.15)',
            }}
            style={{ transition: 'all 0.3s ease' }}
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
                    _hover={{ transform: 'scale(1.08)' }}
                />
                <Badge
                    position="absolute"
                    top={3}
                    left={3}
                    bg={categoryColors[cake.category] || 'brand.primary'}
                    color="white"
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
                    color="brand.muted"
                    noOfLines={2}
                    lineHeight="1.5"
                >
                    {cake.description}
                </Text>

                <HStack justify="space-between" align="center" pt={1}>
                    <Text
                        fontSize="xl"
                        fontWeight="700"
                        color="brand.primary"
                    >
                        ${cake.price}
                    </Text>
                    <Text fontSize="xs" color="brand.muted">
                        {cake.sizes?.[0]}
                    </Text>
                </HStack>

                <HStack spacing={2} pt={2}>
                    <Button
                        size="md"
                        flex={1}
                        bg="brand.primary"
                        color="white"
                        leftIcon={<FaShoppingCart />}
                        _hover={{
                            bg: 'brand.primaryDark',
                            transform: 'translateY(-2px)',
                        }}
                        style={{ transition: 'all 0.3s ease' }}
                        onClick={() => addToCart(cake)}
                        fontWeight="600"
                        borderRadius="12px"
                    >
                        Add to Cart
                    </Button>
                    <Button
                        size="md"
                        flex={1}
                        bg="transparent"
                        border="2px solid"
                        borderColor="brand.secondary"
                        color="brand.secondary"
                        leftIcon={<FaWhatsapp />}
                        _hover={{
                            bg: 'brand.secondary',
                            color: 'white',
                            transform: 'translateY(-2px)',
                        }}
                        style={{ transition: 'all 0.3s ease' }}
                        onClick={handleWhatsAppOrder}
                        fontWeight="600"
                        borderRadius="12px"
                    >
                        WhatsApp
                    </Button>
                </HStack>
            </VStack>
        </MotionBox>
    )
}
