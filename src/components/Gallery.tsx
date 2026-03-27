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
    Icon,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSearch, FaTimes, FaHeart, FaRegHeart, FaExpand, FaChevronLeft, FaChevronRight, FaEye } from 'react-icons/fa'
import { galleryImages } from '../data/cakes'
import { GalleryImage as GalleryImageType } from '../types'

const MotionBox = motion(Box)

const FILTER_OPTIONS = [
    { label: 'All', count: 12 },
    { label: 'Wedding', count: 3 },
    { label: 'Birthday', count: 3 },
    { label: 'Cupcakes', count: 3 },
    { label: 'Seasonal', count: 2 },
    { label: 'Custom', count: 1 },
]

// Category keywords for filtering
const CATEGORY_MAP: Record<string, string[]> = {
    'Wedding': ['wedding', 'naked', 'gold drip'],
    'Birthday': ['dream', 'birthday', 'vanilla birthday'],
    'Cupcakes': ['cupcake'],
    'Seasonal': ['strawberry', 'pumpkin'],
    'Custom': ['custom', 'master', 'baker'],
}

// Stagger delay for cards
const CARD_STAGGER = 0.06

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')
    const [likedIds, setLikedIds] = useState<Set<number>>(new Set())
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

    // Filter images
    const filtered = useMemo(() => {
        let imgs = galleryImages

        if (activeFilter !== 'All') {
            const keywords = CATEGORY_MAP[activeFilter] || []
            imgs = imgs.filter(img =>
                keywords.some(kw => img.alt.toLowerCase().includes(kw))
            )
        }

        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase()
            imgs = imgs.filter(img => img.alt.toLowerCase().includes(q))
        }

        return imgs
    }, [activeFilter, searchQuery])

    // Lightbox controls
    const openLightbox = useCallback((id: number) => {
        const idx = filtered.findIndex(img => img.id === id)
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

    // Split into 3 columns for masonry
    const col1 = filtered.filter((_, i) => i % 3 === 0)
    const col2 = filtered.filter((_, i) => i % 3 === 1)
    const col3 = filtered.filter((_, i) => i % 3 === 2)

    const lightboxItem = lightboxIndex !== null ? filtered[lightboxIndex] : null

    return (
        <Box
            id="gallery"
            py={{ base: 16, md: 28 }}
            bg="brand.primary"
            position="relative"
            overflow="hidden"
        >
            {/* Transition from Testimonials (dark to light) */}
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
                                Visual Gallery
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
                                { value: '12', label: 'Creations' },
                                { value: '500+', label: 'Cakes Made' },
                                { value: '6', label: 'Categories' },
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

                {/* Search + Filters */}
                <MotionBox
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    mb={8}
                >
                    {/* Search */}
                    <Flex justify="center" mb={6}>
                        <InputGroup maxW="420px" size="lg">
                            <InputLeftElement pointerEvents="none" h="full" pl={4}>
                                <FaSearch color="#C9A96E" size={14} />
                            </InputLeftElement>
                            <Input
                                placeholder="Search gallery..."
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

                    {/* Filter pills */}
                    <Flex justify="center" gap={2} flexWrap="wrap">
                        {FILTER_OPTIONS.map((filter) => {
                            const isActive = activeFilter === filter.label
                            return (
                                <Button
                                    key={filter.label}
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
                                        borderColor: isActive ? 'brand.accent' : 'brand.accent',
                                        color: isActive ? 'brand.primary' : 'brand.accent',
                                        transform: 'translateY(-1px)',
                                    }}
                                    transition="all 0.2s ease"
                                    onClick={() => setActiveFilter(filter.label)}
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
                                            {filter.count}
                                        </Box>
                                    }
                                >
                                    {filter.label}
                                </Button>
                            )
                        })}
                    </Flex>

                    {/* Results count */}
                    <HStack justify="space-between" mt={6}>
                        <Text fontSize="sm" color="rgba(245, 230, 211, 0.6)" fontWeight="500">
                            Showing <Text as="span" fontWeight="700" color="brand.lightText">{filtered.length}</Text> pieces
                        </Text>
                    </HStack>
                </MotionBox>

                {/* Masonry Grid */}
                {filtered.length > 0 ? (
                    <Flex gap={{ base: 3, md: 5 }} alignItems="flex-start">
                        {[col1, col2, col3].map((col, colIdx) => (
                            <Box
                                key={colIdx}
                                flex={1}
                                display={{ base: colIdx === 2 ? 'none' : 'flex', md: 'flex' }}
                                flexDirection="column"
                                gap={{ base: 3, md: 5 }}
                            >
                                {col.map((image, i) => (
                                    <GalleryCard
                                        key={image.id}
                                        image={image}
                                        index={colIdx * 4 + i}
                                        isLiked={likedIds.has(image.id)}
                                        isLoaded={loadedImages.has(image.id)}
                                        onLike={toggleLike}
                                        onExpand={openLightbox}
                                        onImageLoad={handleImageLoad}
                                    />
                                ))}
                            </Box>
                        ))}
                    </Flex>
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
                            onClick={() => { setSearchQuery(''); setActiveFilter('All') }}
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

                        {/* Image */}
                        <MotionBox
                            key={lightboxItem.id}
                            maxW="90vw"
                            maxH="80vh"
                            position="relative"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        >
                            <Image
                                src={lightboxItem.src}
                                alt={lightboxItem.alt}
                                maxW="90vw"
                                maxH="75vh"
                                objectFit="contain"
                                borderRadius="16px"
                                boxShadow="0 25px 80px rgba(0,0,0,0.6)"
                            />
                            <Text
                                position="absolute"
                                bottom="-50px"
                                left="50%"
                                transform="translateX(-50%)"
                                color="white"
                                fontWeight="700"
                                fontSize="lg"
                                textAlign="center"
                                whiteSpace="nowrap"
                            >
                                {lightboxItem.alt}
                            </Text>
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
                            <IconButton
                                aria-label="Expand"
                                icon={<FaExpand />}
                                size="md"
                                w="42px"
                                h="42px"
                                bg="transparent"
                                color="white"
                                borderRadius="full"
                                _hover={{ bg: 'rgba(255,255,255,0.15)' }}
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
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
    image: GalleryImageType
    index: number
    isLiked: boolean
    isLoaded: boolean
    onLike: (id: number, e: React.MouseEvent) => void
    onExpand: (id: number) => void
    onImageLoad: (id: number) => void
}

function GalleryCard({ image, index, isLiked, isLoaded, onLike, onExpand, onImageLoad }: GalleryCardProps) {
    return (
        <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '40px' }}
            transition={{
                duration: 0.6,
                delay: (index % 6) * CARD_STAGGER,
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
            boxShadow="0 4px 20px rgba(0, 0, 0, 0.3)"
            _hover={{
                borderColor: 'rgba(201, 169, 110, 0.3)',
                boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.4)',
                transform: 'translateY(-4px)',
            }}
            onClick={() => onExpand(image.id)}
        >
            {/* Image */}
            <Box position="relative" overflow="hidden">
                {/* Skeleton */}
                {!isLoaded && (
                    <Skeleton
                        position="absolute"
                        inset={0}
                        startColor="brand.primary"
                        endColor="rgba(245, 230, 211, 0.1)"
                        zIndex={1}
                        borderRadius="0"
                    />
                )}

                <Image
                    src={image.src}
                    alt={image.alt}
                    w="full"
                    h="auto"
                    display="block"
                    objectFit="cover"
                    onLoad={() => onImageLoad(image.id)}
                    transform="scale(1)"
                    _groupHover={{ transform: 'scale(1.06)' }}
                    style={{ transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                />

                {/* Hover overlay */}
                <Box
                    position="absolute"
                    inset={0}
                    bgGradient="linear(to-t, rgba(45,10,10,0.85) 0%, rgba(45,10,10,0.2) 50%, transparent 100%)"
                    opacity={0}
                    _groupHover={{ opacity: 1 }}
                    transition="opacity 0.4s ease"
                    display="flex"
                    alignItems="flex-end"
                    p={5}
                    zIndex={2}
                >
                    <VStack
                        align="start"
                        spacing={1}
                        transform="translateY(10px)"
                        _groupHover={{ transform: 'translateY(0)' }}
                        transition="transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                    >
                        <Text color="white" fontWeight="700" fontSize="md" textShadow="0 2px 10px rgba(0,0,0,0.5)">
                            {image.alt}
                        </Text>
                        <HStack spacing={3}>
                            <HStack spacing={1}>
                                <Icon as={FaHeart} boxSize="10px" color="red.400" />
                                <Text fontSize="2xs" color="rgba(255,255,255,0.7)">
                                    {Math.floor(Math.random() * 200) + 50}
                                </Text>
                            </HStack>
                            <HStack spacing={1}>
                                <Icon as={FaEye} boxSize="10px" color="rgba(255,255,255,0.6)" />
                                <Text fontSize="2xs" color="rgba(255,255,255,0.7)">
                                    {Math.floor(Math.random() * 1000) + 200}
                                </Text>
                            </HStack>
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
                        onClick={(e) => onLike(image.id, e)}
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
                        onClick={(e) => { e.stopPropagation(); onExpand(image.id) }}
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
                    {image.alt.split(' ').pop() === 'Wedding' || image.alt.includes('Naked') || image.alt.includes('Gold') ? 'Wedding'
                        : image.alt.includes('Cupcake') ? 'Cupcakes'
                        : image.alt.includes('Strawberry') || image.alt.includes('Pumpkin') ? 'Seasonal'
                        : image.alt.includes('Custom') || image.alt.includes('Master') ? 'Custom'
                        : 'Birthday'
                    }
                </Box>
            </Box>

            {/* Bottom bar */}
            <HStack
                justify="space-between"
                align="center"
                px={4}
                py={3}
                bg="brand.primaryLight"
                borderTop="1px solid"
                borderColor="rgba(245, 230, 211, 0.1)"
            >
                <VStack align="start" spacing={0}>
                    <Text fontSize="xs" fontWeight="700" color="brand.lightText" noOfLines={1}>
                        {image.alt}
                    </Text>
                    <Text fontSize="2xs" color="rgba(245, 230, 211, 0.5)">
                        Handcrafted Artisan Cake
                    </Text>
                </VStack>
                <HStack spacing={3} flexShrink={0}>
                    <HStack spacing={1}>
                        <FaHeart size={10} color="brand.accent" />
                        <Text fontSize="2xs" fontWeight="600" color="rgba(245, 230, 211, 0.5)">
                            {Math.floor(Math.random() * 200) + 50}
                        </Text>
                    </HStack>
                </HStack>
            </HStack>
        </MotionBox>
    )
}
