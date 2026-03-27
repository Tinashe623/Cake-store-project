import { useState, useMemo, useEffect } from 'react'
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    VStack,
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    IconButton,
    HStack,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSearch, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Categories from './Categories'
import CakeCard from './CakeCard'
import { cakesData } from '../data/cakes'
import { Category } from '../types'

const MotionBox = motion(Box)
const DEFAULT_VISIBLE = 8

export default function Menu() {
    const [selectedCategory, setSelectedCategory] = useState<Category>('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [visibleCount, setVisibleCount] = useState(DEFAULT_VISIBLE)

    useEffect(() => {
        setVisibleCount(DEFAULT_VISIBLE)
    }, [selectedCategory, searchQuery])

    const filteredCakes = useMemo(() => {
        let cakes = selectedCategory === 'all'
            ? cakesData
            : cakesData.filter(cake => cake.category === selectedCategory)

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase()
            cakes = cakes.filter(cake =>
                cake.name.toLowerCase().includes(query) ||
                cake.description.toLowerCase().includes(query)
            )
        }
        return cakes
    }, [selectedCategory, searchQuery])

    const clearSearch = () => setSearchQuery('')
    const hasMore = filteredCakes.length > visibleCount
    const remaining = filteredCakes.length - visibleCount

    return (
        <Box
            id="menu"
            pt={{ base: 20, md: 32 }}
            pb={{ base: 16, md: 32 }}
            position="relative"
            overflow="hidden"
            bg="brand.primary"
        >
            {/* Smooth gradient transition from HowItWorks */}
            <Box
                position="absolute"
                top="-80px"
                left={0}
                w="full"
                h="120px"
                bgGradient="linear(to-b, brand.background, brand.primary)"
                zIndex={1}
            />

            {/* Background elements */}
            <Box
                position="absolute"
                top="20%"
                right="-10%"
                w="500px"
                h="500px"
                borderRadius="full"
                bg="brand.accent"
                opacity={0.05}
                filter="blur(150px)"
            />
            <Box
                position="absolute"
                bottom="10%"
                left="-10%"
                w="400px"
                h="400px"
                borderRadius="full"
                bg="brand.secondary"
                opacity={0.05}
                filter="blur(120px)"
            />

            <Container maxW="1400px" position="relative" zIndex={2}>
                {/* Header Section */}
                <VStack spacing={6} mb={{ base: 10, md: 14 }} textAlign="center">
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                    >
                        <Text
                            color="brand.accent"
                            fontWeight="700"
                            fontSize="sm"
                            textTransform="uppercase"
                            letterSpacing="3px"
                            mb={2}
                        >
                            Artisan Collection
                        </Text>
                    </MotionBox>

                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <Heading
                            as="h2"
                            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                            fontFamily="heading"
                            color="brand.lightText"
                            fontWeight="800"
                            letterSpacing="-0.02em"
                        >
                            Curated{' '}
                            <Text as="span" color="brand.accent">
                                Masterpieces
                            </Text>
                        </Heading>
                    </MotionBox>
                </VStack>

                {/* Filter & Search Bar */}
                <VStack spacing={6} mb={8}>
                    <MotionBox
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        w="full"
                    >
                        <Box
                            className="glass-panel-dark"
                            borderRadius="24px"
                            p={1.5}
                            display="flex"
                            flexDir={{ base: 'column', md: 'row' }}
                            gap={{ base: 2, md: 3 }}
                            alignItems="center"
                            w="full"
                        >
                            {/* Search */}
                            <InputGroup size="md" w={{ base: 'full', md: '250px' }} flexShrink={0}>
                                <InputLeftElement pointerEvents="none" h="full" pl={3}>
                                    <FaSearch color="#C9A96E" size={14} />
                                </InputLeftElement>
                                <Input
                                    placeholder="Search cakes..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    bg="transparent"
                                    border="none"
                                    _focus={{ boxShadow: 'none' }}
                                    color="brand.lightText"
                                    _placeholder={{ color: 'rgba(245, 230, 211, 0.5)', fontSize: 'xs' }}
                                    pl={10}
                                    h="40px"
                                    fontSize="sm"
                                />
                                {searchQuery && (
                                    <Box position="absolute" right="12px" top="50%" transform="translateY(-50%)" zIndex={2}>
                                        <IconButton
                                            aria-label="Clear search"
                                            icon={<FaTimes />}
                                            size="xs"
                                            variant="ghost"
                                            onClick={clearSearch}
                                            color="rgba(245, 230, 211, 0.5)"
                                            _hover={{ color: 'brand.lightText', bg: 'rgba(245, 230, 211, 0.2)' }}
                                            borderRadius="full"
                                        />
                                    </Box>
                                )}
                            </InputGroup>

                            {/* Separator */}
                            <Box display={{ base: 'none', md: 'block' }} w="1px" h="32px" bg="rgba(245, 230, 211, 0.15)" flexShrink={0} />
                            <Box display={{ base: 'block', md: 'none' }} w="full" h="1px" bg="rgba(245, 230, 211, 0.15)" />

                            {/* Categories */}
                            <Box flex={1} w="full" overflowX={{ base: 'auto', lg: 'visible' }} pb={{ base: 1, md: 0 }} sx={{
                                '&::-webkit-scrollbar': { display: 'none' },
                                msOverflowStyle: 'none',
                                scrollbarWidth: 'none',
                            }}>
                                <Categories
                                    selectedCategory={selectedCategory}
                                    onSelectCategory={setSelectedCategory}
                                />
                            </Box>
                        </Box>
                    </MotionBox>
                </VStack>

                {/* Cake Grid */}
                <AnimatePresence mode="wait">
                    <SimpleGrid
                        columns={{ base: 1, sm: 2, lg: 3, xl: 4 }}
                        spacing={{ base: 6, md: 8 }}
                    >
                        {filteredCakes.slice(0, visibleCount).map((cake, index) => (
                            <MotionBox
                                key={cake.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.05,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                            >
                                <CakeCard cake={cake} />
                            </MotionBox>
                        ))}
                    </SimpleGrid>
                </AnimatePresence>

                {/* View More / Show Less */}
                {filteredCakes.length > DEFAULT_VISIBLE && (
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <HStack justify="center" mt={10}>
                            <Button
                                variant="outline"
                                color="brand.accent"
                                borderColor="rgba(201, 169, 110, 0.3)"
                                borderRadius="full"
                                px={8}
                                h="48px"
                                fontWeight="700"
                                fontSize="sm"
                                letterSpacing="0.5px"
                                leftIcon={hasMore ? <FaChevronDown /> : <FaChevronUp />}
                                onClick={() => {
                                    if (hasMore) {
                                        setVisibleCount(filteredCakes.length)
                                    } else {
                                        setVisibleCount(DEFAULT_VISIBLE)
                                    }
                                }}
                                _hover={{
                                    bg: 'brand.accent',
                                    color: 'brand.primary',
                                    borderColor: 'brand.accent',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 10px 20px -5px rgba(201, 169, 110, 0.3)',
                                }}
                                transition="all 0.3s ease"
                            >
                                {hasMore
                                    ? `View ${remaining} More`
                                    : 'Show Less'
                                }
                            </Button>
                        </HStack>
                    </MotionBox>
                )}

                {/* Empty State */}
                {filteredCakes.length === 0 && (
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <VStack
                            py={24}
                            spacing={6}
                            className="glass-panel-dark"
                            borderRadius="30px"
                            mt={8}
                        >
                            <Box
                                w="80px"
                                h="80px"
                                borderRadius="full"
                                bg="rgba(245, 230, 211, 0.1)"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <FaSearch size={28} color="rgba(245, 230, 211, 0.5)" />
                            </Box>
                            <VStack spacing={2}>
                                <Heading size="md" color="brand.lightText">No masterpieces found</Heading>
                                <Text color="rgba(245, 230, 211, 0.6)" textAlign="center" maxW="400px">
                                    We couldn't find any cakes matching your current filters. Try adjusting your search term.
                                </Text>
                            </VStack>
                            <Button
                                variant="outline"
                                color="brand.accent"
                                borderColor="brand.accent"
                                _hover={{ bg: 'brand.accent', color: 'brand.primary' }}
                                onClick={() => {
                                    setSearchQuery('')
                                    setSelectedCategory('all')
                                }}
                                borderRadius="full"
                            >
                                Clear all filters
                            </Button>
                        </VStack>
                    </MotionBox>
                )}
            </Container>
        </Box>
    )
}
