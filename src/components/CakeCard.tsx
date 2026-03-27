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
    Icon,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    Divider,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaShoppingCart, FaWhatsapp, FaHeart, FaStar, FaEye, FaCheck, FaUtensils, FaSeedling, FaCalendarAlt, FaUsers } from 'react-icons/fa'
import { Cake } from '../types'
import { useCart } from '../context/CartContext'
import { useState } from 'react'
import { getWhatsAppUrl } from '../config/constants'

const MotionBox = motion(Box)

interface CakeCardProps {
    cake: Cake
}

export default function CakeCard({ cake }: CakeCardProps) {
    const { addToCart } = useCart()
    const [isLiked, setIsLiked] = useState(false)
    const [addedToCart, setAddedToCart] = useState(false)
    const [selectedFlavor, setSelectedFlavor] = useState(cake.flavors?.[0] || '')
    const [selectedSize, setSelectedSize] = useState(cake.sizes?.[0] || '')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleWhatsAppOrder = () => {
        const message = `Hello Tarie Cakes! I'd like to order:\n\n${cake.name}\nPrice: $${cake.price}\n\nPlease confirm my order.`
        window.open(getWhatsAppUrl(message), '_blank')
    }

    const handleAddToCart = () => {
        addToCart(cake, selectedFlavor, selectedSize)
        setAddedToCart(true)
        setTimeout(() => setAddedToCart(false), 1500)
    }

    const categoryColors: Record<string, string> = {
        birthday: 'brand.primary',
        wedding: 'brand.accent',
        cupcakes: 'brand.secondary',
        custom: 'brand.primaryLight',
        seasonal: 'brand.muted',
    }

    const accentColor = categoryColors[cake.category] || categoryColors.birthday

    return (
        <>
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
                {/* Like button */}
                <Box
                    position="absolute"
                    top={4}
                    right={4}
                    zIndex={2}
                    opacity={0}
                    transform="translateY(-10px)"
                    _groupHover={{ opacity: 1, transform: 'translateY(0)' }}
                    style={{ transition: 'all 0.4s ease' }}
                >
                    <HStack spacing={2}>
                        <Button
                            size="md"
                            w="44px"
                            h="44px"
                            borderRadius="full"
                            bg="brand.primaryLight"
                            color="white"
                            boxShadow="0 4px 15px rgba(0,0,0,0.3)"
                            _hover={{ bg: 'brand.accent', color: 'brand.primary', transform: 'scale(1.1)' }}
                            onClick={onOpen}
                            style={{ transition: 'all 0.3s ease' }}
                        >
                            <FaEye size={16} />
                        </Button>
                        <Button
                            size="md"
                            w="44px"
                            h="44px"
                            borderRadius="full"
                            bg="brand.primaryLight"
                            color={isLiked ? 'red.400' : 'rgba(245, 230, 211, 0.7)'}
                            boxShadow="0 4px 15px rgba(0,0,0,0.3)"
                            _hover={{ bg: 'rgba(245, 230, 211, 0.2)', transform: 'scale(1.1)' }}
                            onClick={() => setIsLiked(!isLiked)}
                            style={{ transition: 'all 0.3s ease' }}
                        >
                            <FaHeart size={16} fill={isLiked ? 'currentColor' : 'none'} />
                        </Button>
                    </HStack>
                </Box>

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
                            letterSpacing="-1px"
                        >
                            ${cake.price}
                        </Text>
                    </HStack>

                    <Text
                        fontSize="sm"
                        color="rgba(245, 230, 211, 0.7)"
                        noOfLines={2}
                    >
                        {cake.description}
                    </Text>

                    {/* Flavors */}
                    <HStack spacing={2} flexWrap="wrap" pt={1}>
                        {cake.flavors?.slice(0, 3).map((flavor, idx) => (
                            <Tag
                                key={idx}
                                size="sm"
                                variant="subtle"
                                bg="rgba(245, 230, 211, 0.1)"
                                color="rgba(245, 230, 211, 0.8)"
                                borderRadius="full"
                                fontWeight="600"
                            >
                                {flavor}
                            </Tag>
                        ))}
                        {(cake.flavors?.length || 0) > 3 && (
                            <Text fontSize="xs" color="brand.accent" fontWeight="600">
                                +{(cake.flavors?.length || 0) - 3} more
                            </Text>
                        )}
                    </HStack>

                    {/* Actions */}
                    <Box pt={4} mt="auto" position="relative">
                        <AnimatePresence mode="wait">
                            {addedToCart ? (
                                <MotionBox
                                    key="added"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    w="full"
                                    h="54px"
                                    bg="green.500"
                                    borderRadius="16px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    gap={2}
                                    color="white"
                                    fontWeight="800"
                                >
                                    <FaCheck /> Added!
                                </MotionBox>
                            ) : (
                                <MotionBox
                                    key="add"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                >
                                    <Button
                                        w="full"
                                        bg="brand.accent"
                                        color="brand.primary"
                                        _hover={{ bg: 'brand.accentHover', transform: 'translateY(-2px)', boxShadow: '0 10px 20px -5px rgba(201, 169, 110, 0.4)' }}
                                        size="lg"
                                        h="54px"
                                        leftIcon={<FaShoppingCart />}
                                        onClick={handleAddToCart}
                                        borderRadius="16px"
                                        fontWeight="800"
                                    >
                                        Add to Cart
                                    </Button>
                                </MotionBox>
                            )}
                        </AnimatePresence>
                    </Box>
                </VStack>
            </MotionBox>

            {/* Quick View Modal */}
            <Modal isOpen={isOpen} onClose={onClose} size="3xl" isCentered>
                <ModalOverlay backdropFilter="blur(10px)" bg="rgba(26, 5, 5, 0.5)" />
                <ModalContent overflow="hidden" borderRadius="30px" bg="transparent" boxShadow="none">
                    <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} bg="white">
                        <Box w={{ base: 'full', md: '50%' }} position="relative" h={{ base: '300px', md: 'auto' }}>
                            <Image src={cake.image} alt={cake.name} w="full" h="full" objectFit="cover" />
                            <ModalCloseButton
                                position="absolute"
                                top={4}
                                left={4}
                                right="auto"
                                bg="white"
                                borderRadius="full"
                                boxShadow="sm"
                                _hover={{ bg: 'brand.surface' }}
                                display={{ base: 'flex', md: 'none' }}
                            />
                        </Box>
                        <Box w={{ base: 'full', md: '50%' }} p={{ base: 6, md: 10 }} position="relative">
                            <ModalCloseButton
                                position="absolute"
                                top={4}
                                right={4}
                                bg="brand.surface"
                                borderRadius="full"
                                _hover={{ bg: 'brand.border' }}
                                display={{ base: 'none', md: 'flex' }}
                            />
                            <VStack align="start" spacing={5}>
                                <Badge bg={accentColor} color="white" px={3} py={1} borderRadius="full">
                                    {cake.category}
                                </Badge>
                                <Heading color="brand.primary" size="lg" lineHeight="1.2">
                                    {cake.name}
                                </Heading>
                                <Text fontSize="3xl" fontWeight="800" color="brand.accent">
                                    ${cake.price}
                                </Text>
                                <Divider borderColor="brand.border" />
                                <Text color="brand.muted" lineHeight="1.8">
                                    {cake.description}
                                </Text>

                                {/* Flavor Profile & Ingredients */}
                                {cake.flavorProfile && (
                                    <HStack spacing={2} align="start" w="full">
                                        <Icon as={FaUtensils} color="brand.accent" boxSize="14px" mt={1} flexShrink={0} />
                                        <VStack align="start" spacing={0}>
                                            <Text fontWeight="700" color="brand.primary" fontSize="sm">Flavor Profile</Text>
                                            <Text color="brand.muted" fontSize="sm" lineHeight="1.6">{cake.flavorProfile}</Text>
                                        </VStack>
                                    </HStack>
                                )}
                                {cake.ingredients && cake.ingredients.length > 0 && (
                                    <HStack spacing={2} align="start" w="full">
                                        <Icon as={FaSeedling} color="brand.accent" boxSize="14px" mt={1} flexShrink={0} />
                                        <VStack align="start" spacing={0}>
                                            <Text fontWeight="700" color="brand.primary" fontSize="sm">Key Ingredients</Text>
                                            <Text color="brand.muted" fontSize="sm" lineHeight="1.6">{cake.ingredients.join(', ')}</Text>
                                        </VStack>
                                    </HStack>
                                )}

                                {/* Occasion & Servings */}
                                <HStack spacing={6} w="full" flexWrap="wrap">
                                    {cake.occasion && (
                                        <HStack spacing={2}>
                                            <Icon as={FaCalendarAlt} color="brand.accent" boxSize="13px" />
                                            <VStack align="start" spacing={0}>
                                                <Text fontWeight="700" color="brand.primary" fontSize="2xs" textTransform="uppercase" letterSpacing="0.5px">Occasion</Text>
                                                <Text color="brand.muted" fontSize="xs">{cake.occasion}</Text>
                                            </VStack>
                                        </HStack>
                                    )}
                                    {cake.servings && (
                                        <HStack spacing={2}>
                                            <Icon as={FaUsers} color="brand.accent" boxSize="13px" />
                                            <VStack align="start" spacing={0}>
                                                <Text fontWeight="700" color="brand.primary" fontSize="2xs" textTransform="uppercase" letterSpacing="0.5px">Servings</Text>
                                                <Text color="brand.muted" fontSize="xs">{cake.servings}</Text>
                                            </VStack>
                                        </HStack>
                                    )}
                                </HStack>

                                <Divider borderColor="brand.border" />
                                <Box w="full">
                                    <Text fontWeight="700" color="brand.primary" mb={2}>Available Flavors:</Text>
                                    <HStack spacing={2} flexWrap="wrap">
                                        {cake.flavors?.map((flavor, idx) => (
                                            <Tag
                                                key={idx}
                                                size="md"
                                                borderRadius="full"
                                                cursor="pointer"
                                                bg={selectedFlavor === flavor ? 'brand.accent' : 'brand.surface'}
                                                color={selectedFlavor === flavor ? 'brand.primary' : 'brand.muted'}
                                                fontWeight={selectedFlavor === flavor ? '700' : '500'}
                                                border={selectedFlavor === flavor ? '2px solid' : '2px solid transparent'}
                                                borderColor={selectedFlavor === flavor ? 'brand.accentHover' : 'transparent'}
                                                onClick={() => setSelectedFlavor(flavor)}
                                                transition="all 0.2s ease"
                                                _hover={{ borderColor: 'brand.accent' }}
                                            >
                                                {flavor}
                                            </Tag>
                                        ))}
                                    </HStack>
                                </Box>
                                <Box w="full">
                                    <Text fontWeight="700" color="brand.primary" mb={2}>Size/Portions:</Text>
                                    <HStack spacing={2} flexWrap="wrap">
                                        {cake.sizes?.map((size, idx) => (
                                            <Tag
                                                key={idx}
                                                size="md"
                                                borderRadius="full"
                                                cursor="pointer"
                                                bg={selectedSize === size ? 'brand.primary' : 'brand.surface'}
                                                color={selectedSize === size ? 'brand.lightText' : 'brand.muted'}
                                                fontWeight={selectedSize === size ? '700' : '500'}
                                                border={selectedSize === size ? '2px solid' : '2px solid transparent'}
                                                borderColor={selectedSize === size ? 'brand.primaryLight' : 'transparent'}
                                                onClick={() => setSelectedSize(size)}
                                                transition="all 0.2s ease"
                                                _hover={{ borderColor: 'brand.primary' }}
                                            >
                                                {size}
                                            </Tag>
                                        ))}
                                    </HStack>
                                </Box>
                                <HStack w="full" spacing={3} pt={4}>
                                    <Button
                                        flex={1}
                                        variant="primary"
                                        size="lg"
                                        leftIcon={<FaShoppingCart />}
                                        onClick={() => {
                                            addToCart(cake, selectedFlavor, selectedSize)
                                            onClose()
                                        }}
                                    >
                                        Add
                                    </Button>
                                    <Button
                                        flex={1}
                                        variant="outline"
                                        size="lg"
                                        leftIcon={<FaWhatsapp />}
                                        onClick={handleWhatsAppOrder}
                                        color="#25D366"
                                        borderColor="#25D366"
                                        _hover={{ bg: '#25D366', color: 'white' }}
                                    >
                                        Order
                                    </Button>
                                </HStack>
                            </VStack>
                        </Box>
                    </Box>
                </ModalContent>
            </Modal>
        </>
    )
}
