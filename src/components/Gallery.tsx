import { useState, useCallback, useEffect, useMemo } from 'react'
import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    HStack,
    Image,
    Flex,
    Button,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Skeleton,
    SimpleGrid,
    Icon,
    Badge,
    Tag,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSearch, FaTimes, FaHeart, FaRegHeart, FaExpand, FaChevronLeft, FaChevronRight, FaUtensils, FaSeedling, FaCalendarAlt, FaUsers, FaStar } from 'react-icons/fa'
import { cakesData, categories } from '../data/cakes'
import { Cake, Category } from '../types'

const MotionBox = motion(Box)

// Category display config
const CATEGORY_CONFIG: Record<string, { label: string; color: string }> = {
    birthday: { label: 'Birthday', color: '#C9A96E' },
    wedding: { label: 'Wedding', color: '#E8C9A0' },
    cupcakes: { label: 'Cupcakes', color: '#D4A0A0' },
    seasonal: { label: 'Seasonal', color: '#A0C4B8' },
    custom: { label: 'Custom', color: '#B8A0C4' },
}

// Stagger delay for cards
const CARD_STAGGER = 0.06

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState<Category>('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [likedIds, setLikedIds] = useState<Set<number>>(new Set())
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

    // Filter cakes
    const filtered = useMemo(() => {
        let cakes = activeFilter === 'all'
            ? cakesData
            : cakesData.filter(cake => cake.category === activeFilter)

        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase()
            cakes = cakes.filter(cake =>
                cake.name.toLowerCase().includes(q) ||
                cake.description.toLowerCase().includes(q) ||
                cake.flavorProfile?.toLowerCase().includes(q) ||
                cake.ingredients?.some(i => i.toLowerCase().includes(q))
            )
        }

        return cakes
    }, [activeFilter, searchQuery])

    // Dynamic filter counts
    const filterCounts = useMemo(() => {
        const counts: Record<string, number> = { all: cakesData.length }
        for (const cat of categories) {
            if (cat.id !== 'all') {
                counts[cat.id] = cakesData.filter(c => c.category === cat.id).length
            }
        }
        return counts
    }, [])

    // Lightbox controls
    const openLightbox = useCallback((id: number) => {
        const idx = filtered.findIndex(cake => cake.id === id)
        if (idx !== -1) setLightboxIndex(idx)
    }, [filtered])

    const closeLightbox = useCallback(() => setLightboxIndex(null), [])

    const prevImage = useCallback(() => {
        setLightboxIndex(prev =>
            prev !== null ? (prev - 1 + filtered.length) % filtered.length : null
        )
    }, [filtered.length])

    const nextImage = useCallback(() => {
        setLightboxIndex(prev =>
            prev !== null ? (prev + 1) % filtered.length : null
        )
    }, [filtered.length])

    // Keyboard navigation
    useEffect(() => {
        if (lightboxIndex === null) return
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox()
            if (e.key === 'ArrowLeft') prevImage()
            if (e.key === 'ArrowRight') nextImage()
        }
        document.addEventListener('keydown', handler)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', handler)
            document.body.style.overflow = ''
        }
    }, [lightboxIndex, closeLightbox, prevImage, nextImage])

    // Toggle like
    const toggleLike = (id: number, e: React.MouseEvent) => {
        e.stopPropagation()
        setLikedIds(prev => {
            const next = new Set(prev)
            next.has(id) ? next.delete(id) : next.add(id)
            return next
        })
    }

    const handleImageLoad = (id: number) => {
        setLoadedImages(prev => new Set(prev).add(id))
    }

    const lightboxItem = lightboxIndex !== null ? filtered[lightboxIndex] : null

    return (
        <Box
            id="gallery"
            py={{ base: 16, md: 28 }}
            bg="brand.primary"
            position="relative"
            overflow="hidden"
        >
            {/* Transition gradient */}
            <Box
                position="absolute"
                top="-80px"
                left={0}
                w="full"
                h="120px"
                bgGradient="linear(to-b, brand.background, brand.primary)"
                zIndex={1}
            />

            {/* Ambient glow */}
            <Box
                position="absolute"
                top="10%"
                right="-10%"
                w="500px"
                h="500px"
                borderRadius="full"
                bg="brand.accent"
                opacity={0.08}
                filter="blur(150px)"
            />
            <Box
                position="absolute"
                bottom="10%"
                left="-10%"
                w="400px"
                h="400px"
                borderRadius="full"
                bg="brand.primaryLight"
                opacity={0.06}
                filter="blur(120px)"
            />

            <Container maxW="1400px" position="relative" zIndex={2}>
                {/* Header */}
                <VStack spacing={5} mb={{ base: 10, md: 14 }} textAlign="center">
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <HStack
                            display="inline-flex"
                            spacing={2}
                            bg="rgba(201, 169, 110, 0.1)"
                            border="1px solid rgba(201, 169, 110, 0.2)"
                            borderRadius="full"
                            px={4}
                            py={1.5}
                        >
                            <Box w="7px" h="7px" borderRadius="full" bg="brand.accent" animation="pulseFade 2s infinite" />
                            <Text fontSize="xs" fontWeight="600" color="brand.accent" letterSpacing="1px" textTransform="uppercase">
                                Our Collection
                            </Text>
                        </HStack>
                    </MotionBox>

                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <Heading
                            as="h2"
                            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                            fontFamily="heading"
                            color="brand.lightText"
                            fontWeight="800"
                            letterSpacing="-0.02em"
                            lineHeight="1.1"
                        >
                            Gallery of{' '}
                            <Text as="span" color="brand.accent">Culinary Art</Text>
                        </Heading>
                    </MotionBox>

                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Text fontSize={{ base: 'md', md: 'lg' }} color="rgba(245, 230, 211, 0.7)" maxW="520px" lineHeight="1.7">
                            Explore our handcrafted creations. Every piece tells a story of artistry and flavor.
                        </Text>
                    </MotionBox>

                    {/* Stats */}
                    <MotionBox
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        pt={4}
                    >
                        <HStack spacing={{ base: 8, md: 12 }} justify="center" flexWrap="wrap">
                            {[
                                { value: `${cakesData.length}`, label: 'Creations' },
                                { value: '500+', label: 'Cakes Made' },
                                { value: `${categories.length - 1}`, label: 'Categories' },
                                { value: '4.9', label: 'Rating' },
                            ].map((stat, i) => (
                                <VStack key={i} spacing={1}>
                                    <Text fontSize="2xl" fontWeight="800" color="brand.lightText" letterSpacing="-0.02em">
                                        {stat.value}
                                    </Text>
                                    <Text fontSize="2xs" fontWeight="600" color="rgba(245, 230, 211, 0.5)" textTransform="uppercase" letterSpacing="1px">
                                        {stat.label}
                                    </Text>
                                </VStack>
                            ))}
                        </HStack>
                    </MotionBox>
                </VStack>

                {/* Search + Category Filters */}
                <MotionBox
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    mb={10}
                >
                    {/* Search */}
                    <Flex justify="center" mb={6}>
                        <InputGroup maxW="420px" size="lg">
                            <InputLeftElement pointerEvents="none" h="full" pl={4}>
                                <FaSearch color="#C9A96E" size={14} />
                            </InputLeftElement>
                            <Input
                                placeholder="Search cakes, flavors, ingredients..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                bg="brand.primaryLight"
                                border="1px solid"
                                borderColor="rgba(245, 230, 211, 0.15)"
                                _focus={{ borderColor: 'brand.accent', boxShadow: '0 0 0 3px rgba(201, 169, 110, 0.1)' }}
                                color="brand.lightText"
                                _placeholder={{ color: 'rgba(245, 230, 211, 0.4)', fontSize: 'sm' }}
                                pl={10}
                                h="48px"
                                borderRadius="16px"
                                fontSize="sm"
                            />
                            {searchQuery && (
                                <Box position="absolute" right="12px" top="50%" transform="translateY(-50%)" zIndex={2}>
                                    <IconButton
                                        aria-label="Clear"
                                        icon={<FaTimes />}
                                        size="xs"
                                        variant="ghost"
                                        onClick={() => setSearchQuery('')}
                                        color="rgba(245, 230, 211, 0.5)"
                                        _hover={{ color: 'brand.accent', bg: 'rgba(245, 230, 211, 0.08)' }}
                                        borderRadius="full"
                                    />
                                </Box>
                            )}
                        </InputGroup>
                    </Flex>

                    {/* Category filter tabs */}
                    <Flex justify="center" gap={2} flexWrap="wrap">
                        {categories.map((cat) => {
                            const isActive = activeFilter === cat.id
                            const count = filterCounts[cat.id] || 0
                            return (
                                <Button
                                    key={cat.id}
                                    size="sm"
                                    borderRadius="full"
                                    px={5}
                                    h="36px"
                                    fontSize="xs"
                                    fontWeight="600"
                                    letterSpacing="0.5px"
                                    textTransform="uppercase"
                                    bg={isActive ? 'brand.accent' : 'brand.primaryLight'}
                                    color={isActive ? 'brand.primary' : 'rgba(245, 230, 211, 0.7)'}
                                    border="1px solid"
                                    borderColor={isActive ? 'brand.accent' : 'rgba(245, 230, 211, 0.15)'}
                                    _hover={{
                                        borderColor: 'brand.accent',
                                        color: isActive ? 'brand.primary' : 'brand.accent',
                                        transform: 'translateY(-1px)',
                                    }}
                                    transition="all 0.2s ease"
                                    onClick={() => setActiveFilter(cat.id)}
                                    rightIcon={
                                        <Box
                                            as="span"
                                            bg={isActive ? 'rgba(45,10,10,0.2)' : 'rgba(245, 230, 211, 0.1)'}
                                            px={1.5}
                                            py={0.5}
                                            borderRadius="full"
                                            fontSize="2xs"
                                            fontWeight="700"
                                            minW="20px"
                                            textAlign="center"
                                        >
                                            {count}
                                        </Box>
                                    }
                                >
                                    {cat.label}
                                </Button>
                            )
                        })}
                    </Flex>

                    {/* Results count */}
                    <HStack justify="space-between" mt={6}>
                        <Text fontSize="sm" color="rgba(245, 230, 211, 0.6)" fontWeight="500">
                            Showing <Text as="span" fontWeight="700" color="brand.lightText">{filtered.length}</Text> {filtered.length === 1 ? 'creation' : 'creations'}
                        </Text>
                    </HStack>
                </MotionBox>

                {/* Card Grid */}
                {filtered.length > 0 ? (
                    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing={{ base: 5, md: 6 }}>
                        {filtered.map((cake, index) => (
                            <GalleryCard
                                key={cake.id}
                                cake={cake}
                                index={index}
                                isLiked={likedIds.has(cake.id)}
                                isLoaded={loadedImages.has(cake.id)}
                                onLike={toggleLike}
                                onExpand={openLightbox}
                                onImageLoad={handleImageLoad}
                            />
                        ))}
                    </SimpleGrid>
                ) : (
                    <VStack py={20} spacing={4}>
                        <Box
                            w="80px"
                            h="80px"
                            borderRadius="full"
                            bg="rgba(245, 230, 211, 0.08)"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <FaSearch size={24} color="rgba(245, 230, 211, 0.4)" />
                        </Box>
                        <Heading size="md" color="brand.lightText">No results found</Heading>
                        <Text color="rgba(245, 230, 211, 0.5)" fontSize="sm">Try adjusting your search or filter</Text>
                        <Button
                            size="sm"
                            variant="outline"
                            color="brand.accent"
                            borderColor="brand.accent"
                            borderRadius="full"
                            onClick={() => { setSearchQuery(''); setActiveFilter('all') }}
                        >
                            Clear filters
                        </Button>
                    </VStack>
                )}
            </Container>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxItem && (
                    <MotionBox
                        position="fixed"
                        inset={0}
                        zIndex={2000}
                        bg="rgba(26, 5, 5, 0.92)"
                        backdropFilter="blur(30px)"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeLightbox}
                    >
                        {/* Counter */}
                        <Box
                            position="absolute"
                            top={5}
                            left="50%"
                            transform="translateX(-50%)"
                            bg="rgba(255,255,255,0.1)"
                            backdropFilter="blur(10px)"
                            borderRadius="full"
                            px={4}
                            py={1.5}
                            fontSize="sm"
                            fontWeight="600"
                            color="rgba(255,255,255,0.8)"
                        >
                            {lightboxIndex! + 1} / {filtered.length}
                        </Box>

                        {/* Close */}
                        <IconButton
                            aria-label="Close"
                            icon={<FaTimes />}
                            position="absolute"
                            top={5}
                            right={5}
                            bg="rgba(255,255,255,0.1)"
                            backdropFilter="blur(10px)"
                            border="1px solid rgba(255,255,255,0.1)"
                            borderRadius="full"
                            color="white"
                            w="48px"
                            h="48px"
                            _hover={{ bg: 'rgba(255,255,255,0.2)', transform: 'rotate(90deg)' }}
                            transition="all 0.3s ease"
                            onClick={(e) => { e.stopPropagation(); closeLightbox() }}
                            zIndex={10}
                        />

                        {/* Prev */}
                        <IconButton
                            aria-label="Previous"
                            icon={<FaChevronLeft />}
                            position="absolute"
                            left={{ base: 3, md: 6 }}
                            top="50%"
                            transform="translateY(-50%)"
                            bg="rgba(255,255,255,0.1)"
                            backdropFilter="blur(10px)"
                            border="1px solid rgba(255,255,255,0.1)"
                            borderRadius="full"
                            color="white"
                            w={{ base: '42px', md: '50px' }}
                            h={{ base: '42px', md: '50px' }}
                            _hover={{ bg: 'brand.accent', borderColor: 'brand.accent' }}
                            onClick={(e) => { e.stopPropagation(); prevImage() }}
                            zIndex={10}
                        />

                        {/* Next */}
                        <IconButton
                            aria-label="Next"
                            icon={<FaChevronRight />}
                            position="absolute"
                            right={{ base: 3, md: 6 }}
                            top="50%"
                            transform="translateY(-50%)"
                            bg="rgba(255,255,255,0.1)"
                            backdropFilter="blur(10px)"
                            border="1px solid rgba(255,255,255,0.1)"
                            borderRadius="full"
                            color="white"
                            w={{ base: '42px', md: '50px' }}
                            h={{ base: '42px', md: '50px' }}
                            _hover={{ bg: 'brand.accent', borderColor: 'brand.accent' }}
                            onClick={(e) => { e.stopPropagation(); nextImage() }}
                            zIndex={10}
                        />

                        {/* Image with details */}
                        <MotionBox
                            key={lightboxItem.id}
                            maxW="90vw"
                            maxH="85vh"
                            position="relative"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                            display="flex"
                            flexDirection={{ base: 'column', md: 'row' }}
                            gap={6}
                            alignItems="center"
                        >
                            <Image
                                src={lightboxItem.image}
                                alt={lightboxItem.name}
                                maxW={{ base: '90vw', md: '50vw' }}
                                maxH="70vh"
                                objectFit="contain"
                                borderRadius="16px"
                                boxShadow="0 25px 80px rgba(0,0,0,0.6)"
                            />
                            {/* Detail panel */}
                            <VStack
                                align="start"
                                spacing={4}
                                maxW="360px"
                                p={6}
                                bg="rgba(255,255,255,0.06)"
                                backdropFilter="blur(20px)"
                                borderRadius="20px"
                                border="1px solid rgba(245, 230, 211, 0.1)"
                                display={{ base: 'none', md: 'flex' }}
                            >
                                <Badge
                                    bg={CATEGORY_CONFIG[lightboxItem.category]?.color || '#C9A96E'}
                                    color="brand.primary"
                                    px={3}
                                    py={1}
                                    borderRadius="full"
                                    fontSize="2xs"
                                    fontWeight="700"
                                    textTransform="uppercase"
                                >
                                    {CATEGORY_CONFIG[lightboxItem.category]?.label || lightboxItem.category}
                                </Badge>
                                <Heading size="md" color="brand.lightText" fontFamily="heading">
                                    {lightboxItem.name}
                                </Heading>
                                <Text fontSize="sm" color="rgba(245, 230, 211, 0.7)" lineHeight="1.7">
                                    {lightboxItem.description}
                                </Text>
                                {lightboxItem.flavorProfile && (
                                    <HStack spacing={2} align="start">
                                        <Icon as={FaUtensils} color="brand.accent" boxSize="12px" mt={1} />
                                        <Text fontSize="xs" color="rgba(245, 230, 211, 0.6)" lineHeight="1.6">
                                            {lightboxItem.flavorProfile}
                                        </Text>
                                    </HStack>
                                )}
                                {lightboxItem.ingredients && (
                                    <HStack spacing={2} align="start">
                                        <Icon as={FaSeedling} color="brand.accent" boxSize="12px" mt={1} />
                                        <Text fontSize="xs" color="rgba(245, 230, 211, 0.6)" lineHeight="1.6">
                                            {lightboxItem.ingredients.join(', ')}
                                        </Text>
                                    </HStack>
                                )}
                                <HStack spacing={4} pt={2}>
                                    {lightboxItem.occasion && (
                                        <HStack spacing={1.5}>
                                            <Icon as={FaCalendarAlt} color="brand.accent" boxSize="11px" />
                                            <Text fontSize="2xs" color="rgba(245, 230, 211, 0.5)">
                                                {lightboxItem.occasion}
                                            </Text>
                                        </HStack>
                                    )}
                                    {lightboxItem.servings && (
                                        <HStack spacing={1.5}>
                                            <Icon as={FaUsers} color="brand.accent" boxSize="11px" />
                                            <Text fontSize="2xs" color="rgba(245, 230, 211, 0.5)">
                                                {lightboxItem.servings}
                                            </Text>
                                        </HStack>
                                    )}
                                </HStack>
                                <Text fontSize="2xl" fontWeight="800" color="brand.accent">
                                    ${lightboxItem.price}
                                </Text>
                            </VStack>
                        </MotionBox>

                        {/* Actions bar */}
                        <HStack
                            position="absolute"
                            bottom={6}
                            left="50%"
                            transform="translateX(-50%)"
                            spacing={2}
                            bg="rgba(255,255,255,0.1)"
                            backdropFilter="blur(20px)"
                            borderRadius="full"
                            p={1.5}
                            border="1px solid rgba(255,255,255,0.1)"
                        >
                            <IconButton
                                aria-label="Like"
                                icon={likedIds.has(lightboxItem.id) ? <FaHeart /> : <FaRegHeart />}
                                size="md"
                                w="42px"
                                h="42px"
                                bg="transparent"
                                color={likedIds.has(lightboxItem.id) ? 'red.400' : 'white'}
                                borderRadius="full"
                                _hover={{ bg: 'rgba(255,255,255,0.15)' }}
                                onClick={(e) => toggleLike(lightboxItem.id, e)}
                            />
                        </HStack>
                    </MotionBox>
                )}
            </AnimatePresence>
        </Box>
    )
}

// --- Gallery Card Component ---
interface GalleryCardProps {
    cake: Cake
    index: number
    isLiked: boolean
    isLoaded: boolean
    onLike: (id: number, e: React.MouseEvent) => void
    onExpand: (id: number) => void
    onImageLoad: (id: number) => void
}

function GalleryCard({ cake, index, isLiked, isLoaded, onLike, onExpand, onImageLoad }: GalleryCardProps) {
    const catConfig = CATEGORY_CONFIG[cake.category] || { label: cake.category, color: '#C9A96E' }

    return (
        <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '40px' }}
            transition={{
                duration: 0.6,
                delay: (index % 8) * CARD_STAGGER,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            position="relative"
            borderRadius="20px"
            overflow="hidden"
            bg="brand.primaryLight"
            border="1px solid"
            borderColor="rgba(245, 230, 211, 0.1)"
            cursor="pointer"
            role="group"
            boxShadow="0 4px 24px rgba(0, 0, 0, 0.25)"
            _hover={{
                borderColor: 'rgba(201, 169, 110, 0.3)',
                boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.4)',
                transform: 'translateY(-6px)',
            }}
            onClick={() => onExpand(cake.id)}
        >
            {/* Image */}
            <Box position="relative" overflow="hidden" h={{ base: '260px', md: '300px' }}>
                {/* Skeleton placeholder */}
                {!isLoaded && (
                    <Skeleton
                        position="absolute"
                        inset={0}
                        startColor="rgba(74, 26, 26, 0.6)"
                        endColor="rgba(245, 230, 211, 0.08)"
                        zIndex={1}
                    />
                )}

                <Image
                    src={cake.image}
                    alt={cake.name}
                    w="full"
                    h="full"
                    objectFit="cover"
                    onLoad={() => onImageLoad(cake.id)}
                    transform="scale(1)"
                    _groupHover={{ transform: 'scale(1.08)' }}
                    style={{ transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                />

                {/* Gradient overlay — always visible at bottom */}
                <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    h="50%"
                    bgGradient="linear(to-t, rgba(45,10,10,0.95) 0%, rgba(45,10,10,0.4) 60%, transparent 100%)"
                    zIndex={1}
                />

                {/* Hover overlay with details — replaces cake name on hover */}
                <Box
                    position="absolute"
                    inset={0}
                    bgGradient="linear(to-t, rgba(45,10,10,0.95) 0%, rgba(45,10,10,0.6) 55%, rgba(45,10,10,0.2) 100%)"
                    opacity={0}
                    _groupHover={{ opacity: 1 }}
                    transition="opacity 0.4s ease"
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-end"
                    p={5}
                    zIndex={3}
                >
                    <VStack align="start" spacing={3} transform="translateY(12px)" _groupHover={{ transform: 'translateY(0)' }} transition="transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)">
                        {/* Flavor profile */}
                        {cake.flavorProfile && (
                            <HStack spacing={2} align="start">
                                <Icon as={FaUtensils} color="brand.accent" boxSize="11px" mt={0.5} flexShrink={0} />
                                <Text fontSize="2xs" color="rgba(255,255,255,0.85)" lineHeight="1.5" noOfLines={2}>
                                    {cake.flavorProfile}
                                </Text>
                            </HStack>
                        )}

                        {/* Ingredients */}
                        {cake.ingredients && (
                            <HStack spacing={2} align="start">
                                <Icon as={FaSeedling} color="brand.accent" boxSize="11px" mt={0.5} flexShrink={0} />
                                <Text fontSize="2xs" color="rgba(255,255,255,0.65)" lineHeight="1.5" noOfLines={2}>
                                    {cake.ingredients.slice(0, 4).join(', ')}
                                </Text>
                            </HStack>
                        )}

                        {/* Occasion + Servings */}
                        <HStack spacing={4} pt={1}>
                            {cake.occasion && (
                                <HStack spacing={1}>
                                    <Icon as={FaCalendarAlt} boxSize="9px" color="rgba(255,255,255,0.5)" />
                                    <Text fontSize="2xs" color="rgba(255,255,255,0.5)" noOfLines={1}>
                                        {cake.occasion.split(',')[0]}
                                    </Text>
                                </HStack>
                            )}
                            {cake.servings && (
                                <HStack spacing={1}>
                                    <Icon as={FaUsers} boxSize="9px" color="rgba(255,255,255,0.5)" />
                                    <Text fontSize="2xs" color="rgba(255,255,255,0.5)">
                                        {cake.servings}
                                    </Text>
                                </HStack>
                            )}
                        </HStack>
                    </VStack>
                </Box>

                {/* Action buttons */}
                <VStack
                    position="absolute"
                    top={3}
                    right={3}
                    spacing={2}
                    opacity={0}
                    transform="translateY(-8px)"
                    _groupHover={{ opacity: 1, transform: 'translateY(0)' }}
                    transition="all 0.3s ease"
                    zIndex={3}
                >
                    <IconButton
                        aria-label="Like"
                        icon={isLiked ? <FaHeart /> : <FaRegHeart />}
                        size="sm"
                        w="36px"
                        h="36px"
                        bg="rgba(45, 10, 10, 0.6)"
                        backdropFilter="blur(10px)"
                        border="1px solid rgba(245, 230, 211, 0.1)"
                        borderRadius="full"
                        color={isLiked ? 'red.400' : 'white'}
                        fontSize="sm"
                        _hover={{ bg: 'rgba(45, 10, 10, 0.8)', transform: 'scale(1.1)' }}
                        onClick={(e) => onLike(cake.id, e)}
                        style={{ transition: 'all 0.2s ease' }}
                    />
                    <IconButton
                        aria-label="View"
                        icon={<FaExpand />}
                        size="sm"
                        w="36px"
                        h="36px"
                        bg="rgba(45, 10, 10, 0.6)"
                        backdropFilter="blur(10px)"
                        border="1px solid rgba(245, 230, 211, 0.1)"
                        borderRadius="full"
                        color="white"
                        fontSize="sm"
                        _hover={{ bg: 'brand.accent', color: 'brand.primary', borderColor: 'brand.accent', transform: 'scale(1.1)' }}
                        onClick={(e) => { e.stopPropagation(); onExpand(cake.id) }}
                        style={{ transition: 'all 0.2s ease' }}
                    />
                </VStack>

                {/* Category tag */}
                <Box
                    position="absolute"
                    top={3}
                    left={3}
                    bg="rgba(45, 10, 10, 0.6)"
                    backdropFilter="blur(10px)"
                    border="1px solid rgba(245, 230, 211, 0.1)"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="2xs"
                    fontWeight="600"
                    color="brand.accent"
                    textTransform="uppercase"
                    letterSpacing="0.5px"
                    zIndex={3}
                >
                    {catConfig.label}
                </Box>

                {/* Bestseller badge for top items */}
                {cake.id <= 3 && (
                    <Box
                        position="absolute"
                        top={3}
                        right={3}
                        bg="brand.accent"
                        px={2.5}
                        py={1}
                        borderRadius="full"
                        display="flex"
                        alignItems="center"
                        gap={1}
                        boxShadow="0 4px 12px rgba(201, 169, 110, 0.3)"
                        zIndex={3}
                        _groupHover={{ opacity: 0, transform: 'translateY(-8px)' }}
                        transition="all 0.3s ease"
                    >
                        <FaStar size={9} color="#2D0A0A" />
                        <Text fontSize="2xs" fontWeight="700" color="brand.primary" textTransform="uppercase" letterSpacing="0.3px">
                            Top Pick
                        </Text>
                    </Box>
                )}

                {/* Cake name — fades out on hover, replaced by details overlay */}
                <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    p={4}
                    zIndex={2}
                    opacity={1}
                    _groupHover={{ opacity: 0, transform: 'translateY(8px)' }}
                    transition="all 0.35s ease"
                >
                    <Text
                        color="white"
                        fontWeight="800"
                        fontSize="lg"
                        fontFamily="heading"
                        lineHeight="1.2"
                        textShadow="0 2px 12px rgba(0,0,0,0.5)"
                        noOfLines={1}
                    >
                        {cake.name}
                    </Text>
                </Box>
            </Box>

            {/* Card content below image */}
            <VStack align="stretch" spacing={3} p={4}>
                {/* Description */}
                <Text fontSize="xs" color="rgba(245, 230, 211, 0.65)" noOfLines={2} lineHeight="1.6">
                    {cake.description}
                </Text>

                {/* Flavor tags */}
                <HStack spacing={1.5} flexWrap="wrap">
                    {cake.flavors?.slice(0, 3).map((flavor, idx) => (
                        <Tag
                            key={idx}
                            size="sm"
                            bg="rgba(201, 169, 110, 0.1)"
                            color="rgba(245, 230, 211, 0.7)"
                            borderRadius="full"
                            fontSize="2xs"
                            fontWeight="600"
                            px={2.5}
                            py={0.5}
                        >
                            {flavor}
                        </Tag>
                    ))}
                </HStack>

                {/* Info row */}
                <HStack justify="space-between" align="center" pt={1}>
                    <VStack align="start" spacing={0.5}>
                        {cake.servings && (
                            <HStack spacing={1}>
                                <Icon as={FaUsers} color="rgba(201, 169, 110, 0.5)" boxSize="10px" />
                                <Text fontSize="2xs" color="rgba(245, 230, 211, 0.45)">
                                    {cake.servings}
                                </Text>
                            </HStack>
                        )}
                        {cake.occasion && (
                            <HStack spacing={1}>
                                <Icon as={FaCalendarAlt} color="rgba(201, 169, 110, 0.5)" boxSize="10px" />
                                <Text fontSize="2xs" color="rgba(245, 230, 211, 0.45)" noOfLines={1}>
                                    {cake.occasion.split(',')[0]}
                                </Text>
                            </HStack>
                        )}
                    </VStack>
                    <Text fontSize="xl" fontWeight="800" color="brand.accent" letterSpacing="-0.5px">
                        ${cake.price}
                    </Text>
                </HStack>
            </VStack>
        </MotionBox>
    )
}
