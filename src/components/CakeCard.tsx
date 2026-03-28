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
import { FaStar } from 'react-icons/fa'
import { Cake } from '../types'
import { useCart } from '../context/CartContext'

const MotionBox = motion(Box)

interface CakeCardProps {
    cake: Cake
}

export default function CakeCard({ cake }: CakeCardProps) {
    const { addToCart } = useCart()

    const categoryColors: Record<string, string> = {
        birthday: 'brand.primary',
        wedding: 'brand.accent',
        cupcakes: 'brand.accentHover',
        custom: 'brand.primaryLight',
        seasonal: 'brand.primaryLight',
    }

    const accentColor = categoryColors[cake.category] || categoryColors.birthday

    return (
        <MotionBox
            bg="rgba(255, 255, 255, 0.06)"
            border="1px solid rgba(245, 230, 211, 0.08)"
            backdropFilter="blur(10px)"
            borderRadius="30px"
            overflow="hidden"
            boxShadow="0 20px 40px rgba(0,0,0,0.2)"
            _hover={{
                transform: 'translateY(-12px)',
                boxShadow: '0 30px 60px -15px rgba(0,0,0,0.4)',
                borderColor: 'rgba(201, 169, 110, 0.3)',
            }}
            style={{ transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            position="relative"
            role="group"
        >
            {/* Bestseller badge */}
            {cake.id <= 3 && (
                <Box
                    position="absolute"
                    top={4}
                    left={4}
                    zIndex={2}
                    bg="brand.primary"
                    border="1px solid"
                    borderColor="brand.accent"
                    px={3}
                    py={1.5}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    gap={1.5}
                    boxShadow="0 4px 15px rgba(201, 169, 110, 0.2)"
                >
                    <FaStar size={12} color="#C9A96E" fill="#C9A96E" />
                    <Text fontSize="xs" fontWeight="700" color="brand.accent" textTransform="uppercase" letterSpacing="0.5px">
                        Bestseller
                    </Text>
                </Box>
            )}

            {/* Image */}
            <Box position="relative" overflow="hidden" h="280px">
                <Image
                    src={cake.image}
                    alt={cake.name}
                    w="full"
                    h="full"
                    objectFit="cover"
                    transition="transform 0.8s ease"
                    _groupHover={{ transform: 'scale(1.1)' }}
                />
                <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    h="140px"
                    bgGradient="linear(to-t, brand.primary, transparent)"
                    opacity={0.8}
                />
                <Badge
                    position="absolute"
                    bottom={4}
                    left={4}
                    bg={accentColor}
                    color="white"
                    px={4}
                    py={1.5}
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight="700"
                    textTransform="uppercase"
                    boxShadow="0 4px 10px rgba(0,0,0,0.2)"
                >
                    {cake.category}
                </Badge>
            </Box>

            {/* Content */}
            <VStack p={6} spacing={4} align="stretch" bg="transparent">
                <HStack justify="space-between" align="start">
                    <Heading
                        as="h3"
                        size="md"
                        fontFamily="heading"
                        color="brand.lightText"
                        noOfLines={2}
                        lineHeight="1.3"
                    >
                        {cake.name}
                    </Heading>
                    <Text
                        fontSize="2xl"
                        fontWeight="800"
                        color="brand.accent"
                        whiteSpace="nowrap"
                        ml={2}
                    >
                        ${cake.price}
                    </Text>
                </HStack>

                <Text
                    fontSize="sm"
                    color="rgba(245, 230, 211, 0.6)"
                    lineHeight="1.6"
                    noOfLines={2}
                >
                    {cake.description}
                </Text>

                {/* Flavor Tags */}
                {cake.flavors && cake.flavors.length > 0 && (
                    <HStack spacing={2} flexWrap="wrap">
                        {cake.flavors.slice(0, 3).map((flavor, idx) => (
                            <Tag
                                key={idx}
                                size="sm"
                                bg="rgba(201, 169, 110, 0.15)"
                                color="brand.accent"
                                borderRadius="full"
                                fontSize="xs"
                                fontWeight="600"
                                px={3}
                            >
                                {flavor}
                            </Tag>
                        ))}
                    </HStack>
                )}

                {/* Add to Cart Button */}
                <Button
                    variant="solid"
                    size="md"
                    bg="brand.accent"
                    color="brand.primary"
                    fontWeight="700"
                    borderRadius="16px"
                    h="48px"
                    _hover={{
                        bg: 'brand.accentHover',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 20px -5px rgba(201, 169, 110, 0.3)',
                    }}
                    transition="all 0.3s ease"
                    onClick={() => addToCart(cake, cake.flavors?.[0] || '', cake.sizes?.[0] || '')}
                >
                    Add to Cart
                </Button>
            </VStack>
        </MotionBox>
    )
}
