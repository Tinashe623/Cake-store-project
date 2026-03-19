import {
    Box,
    Image,
    Text,
    Heading,
    Button,
    VStack,
    HStack,
    Badge,
    Tag,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaShoppingCart, FaWhatsapp, FaHeart, FaStar } from 'react-icons/fa'
import { Cake } from '../types'
import { useCart } from '../context/CartContext'
import { useState } from 'react'

const MotionBox = motion(Box)

interface CakeCardProps {
    cake: Cake
}

export default function CakeCard({ cake }: CakeCardProps) {
    const { addToCart } = useCart()
    const [isLiked, setIsLiked] = useState(false)

    const handleWhatsAppOrder = () => {
        const message = `Hello Tarie Cakes! I'd like to order:\n\n${cake.name}\nPrice: $${cake.price}\n\nPlease confirm my order.`
        const phoneNumber = '263771234567'
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
    }

    const categoryColors: Record<string, string> = {
        birthday: '#C5A059',
        wedding: '#0A192F',
        cupcakes: '#C5A059',
        custom: '#C5A059',
        seasonal: '#C5A059',
    }

    const accentColor = categoryColors[cake.category] || categoryColors.birthday

    return (
        <MotionBox
            bg="white"
            borderRadius="28px"
            overflow="hidden"
            boxShadow="0 2px 16px rgba(0, 0, 0, 0.04)"
            _hover={{
                transform: 'translateY(-12px)',
                boxShadow: `0 24px 48px ${accentColor}15`,
            }}
            style={{ transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            position="relative"
            role="group"
        >
            {/* Like button */}
            <Box
                position="absolute"
                top={4}
                right={4}
                zIndex={2}
                opacity={0}
                transform="translateY(-10px)"
                _groupHover={{ opacity: 1, transform: 'translateY(0)' }}
                style={{ transition: 'all 0.3s ease' }}
            >
                <Button
                    size="lg"
                    w="48px"
                    h="48px"
                    borderRadius="full"
                    bg="white"
                    color={isLiked ? '#C5A059' : 'gray.500'}
                    boxShadow="0 4px 16px rgba(0,0,0,0.12)"
                    _hover={{
                        bg: isLiked ? '#C5A059' : '#C5A059',
                        color: 'white',
                        transform: 'scale(1.1)',
                    }}
                    onClick={() => setIsLiked(!isLiked)}
                    style={{ transition: 'all 0.3s ease' }}
                >
                    <FaHeart size={18} fill={isLiked ? '#C5A059' : 'none'} />
                </Button>
            </Box>

            {/* Bestseller badge */}
            {cake.id <= 3 && (
                <Box
                    position="absolute"
                    top={4}
                    left={4}
                    zIndex={2}
                    bg="white"
                    px={3}
                    py={1.5}
                    borderRadius="full"
                    boxShadow="0 2px 12px rgba(0,0,0,0.1)"
                    display="flex"
                    alignItems="center"
                    gap={1}
                >
                    <FaStar size={10} color="#C5A059" fill="#C5A059" />
                    <Text fontSize="xs" fontWeight="600" color="gray.700">
                        Bestseller
                    </Text>
                </Box>
            )}

            {/* Image */}
            <Box
                position="relative"
                overflow="hidden"
                h="220px"
            >
                <Image
                    src={cake.image}
                    alt={cake.name}
                    w="full"
                    h="full"
                    objectFit="cover"
                    transition="transform 0.7s ease"
                    _groupHover={{ transform: 'scale(1.08)' }}
                />
                <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    h="80px"
                    bgGradient="linear(to-t, blackAlpha.500, transparent)"
                />
                {/* Category badge on image */}
                <Badge
                    position="absolute"
                    bottom={3}
                    left={3}
                    bg={accentColor}
                    color="white"
                    px={4}
                    py={1.5}
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight="600"
                    textTransform="capitalize"
                    boxShadow="0 2px 8px rgba(0,0,0,0.2)"
                >
                    {cake.category}
                </Badge>
            </Box>

            {/* Content */}
            <VStack p={6} spacing={4} align="stretch">
                <Heading
                    as="h3"
                    size="md"
                    fontFamily="heading"
                    color="gray.800"
                    noOfLines={1}
                    fontWeight="600"
                    letterSpacing="-0.02em"
                >
                    {cake.name}
                </Heading>

                <Text
                    fontSize="sm"
                    color="gray.500"
                    noOfLines={2}
                    lineHeight="1.7"
                >
                    {cake.description}
                </Text>

                {/* Flavor tags */}
                <HStack spacing={2} flexWrap="wrap">
                    {cake.flavors?.slice(0, 2).map((flavor, idx) => (
                        <Tag
                            key={idx}
                            size="sm"
                            bg={`${accentColor}10`}
                            color={accentColor}
                            borderRadius="full"
                            fontWeight="500"
                        >
                            {flavor}
                        </Tag>
                    ))}
                </HStack>

                {/* Price and size */}
                <HStack justify="space-between" align="center" pt={2}>
                    <HStack spacing={2} align="baseline">
                        <Text
                            fontSize="2xl"
                            fontWeight="700"
                            color="gray.800"
                            letterSpacing="-0.03em"
                        >
                            ${cake.price}
                        </Text>
                    </HStack>
                    <Text fontSize="xs" color="gray.400" fontWeight="500">
                        {cake.sizes?.[0]}
                    </Text>
                </HStack>

                {/* Action buttons */}
                <HStack spacing={3} pt={2}>
                    <Button
                        flex={1}
                        bg="gray.800"
                        color="white"
                        size="md"
                        h="48px"
                        leftIcon={<FaShoppingCart />}
                        _hover={{
                            bg: '#C5A059',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 12px 24px rgba(197, 160, 89, 0.25)',
                        }}
                        style={{
                            transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                            fontWeight: '600',
                            borderRadius: '16px',
                        }}
                        onClick={() => addToCart(cake)}
                    >
                        Add to Cart
                    </Button>
                    <Button
                        flex={1}
                        size="md"
                        h="48px"
                        bg="white"
                        border="2px solid"
                        borderColor="gray.200"
                        color="gray.700"
                        leftIcon={<FaWhatsapp />}
                        _hover={{
                            bg: '#25D366',
                            borderColor: '#25D366',
                            color: 'white',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 12px 24px rgba(37, 211, 102, 0.25)',
                        }}
                        style={{
                            transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                            fontWeight: '600',
                            borderRadius: '16px',
                        }}
                        onClick={handleWhatsAppOrder}
                    >
                        Order
                    </Button>
                </HStack>
            </VStack>
        </MotionBox>
    )
}
