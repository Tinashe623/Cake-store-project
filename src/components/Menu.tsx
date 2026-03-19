import { useState, useMemo } from 'react'
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    VStack,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    IconButton,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSearch, FaTimes } from 'react-icons/fa'
import Categories from './Categories'
import CakeCard from './CakeCard'
import { cakesData } from '../data/cakes'
import { Category } from '../types'

const MotionBox = motion(Box)

export default function Menu() {
    const [selectedCategory, setSelectedCategory] = useState<Category>('all')
    const [searchQuery, setSearchQuery] = useState('')

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

    return (
        <Box
            id="menu"
            pt={{ base: 8, md: 12 }}
            pb={{ base: 16, md: 20 }}
            position="relative"
            overflow="hidden"
        >
            {/* Full-width background image */}
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgImage="url('/menu-background.png')"
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
            />
            {/* Dark overlay for readability */}
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="rgba(10, 25, 47, 0.85)"
            />
            {/* Animated sparkle background */}
            {[...Array(25)].map((_, i) => (
                <Box
                    key={i}
                    position="absolute"
                    w="6px"
                    h="6px"
                    borderRadius="full"
                    bg="#C5A059"
                    boxShadow="0 0 8px #C5A059, 0 0 16px #C5A059"
                    opacity={0.8}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        zIndex: 0,
                        animation: `sparkle ${2 + Math.random() * 3}s infinite`,
                        animationDelay: `${Math.random() * 3}s`,
                    }}
                />
            ))}
            {/* Gold sparkles */}
            {[...Array(20)].map((_, i) => (
                <Box
                    key={`pink-${i}`}
                    position="absolute"
                    w="4px"
                    h="4px"
                    borderRadius="full"
                    bg="#C5A059"
                    boxShadow="0 0 6px #C5A059"
                    opacity={0.7}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        zIndex: 0,
                        animation: `sparkle ${3 + Math.random() * 3}s infinite`,
                        animationDelay: `${Math.random() * 4}s`,
                    }}
                />
            ))}

            <Container maxW="1400px" position="relative" zIndex={1}>
                {/* Header Section */}
                <VStack spacing={6} mb={{ base: 10, md: 12 }} textAlign="center">
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Box
                            display="inline-flex"
                            alignItems="center"
                            gap={3}
                            bg="whiteAlpha.200"
                            px={6}
                            py={3}
                            borderRadius="full"
                            boxShadow="0 4px 24px rgba(0, 0, 0, 0.06)"
                            border="1px solid"
                            borderColor="whiteAlpha.300"
                        >
                            <Box w="10px" h="10px" borderRadius="full" bg="#C5A059" />
                            <Text
                                color="white"
                                fontWeight="600"
                                fontSize="sm"
                                textTransform="uppercase"
                                letterSpacing="2px"
                            >
                                Freshly Baked Daily
                            </Text>
                            <Box w="10px" h="10px" borderRadius="full" bg="#C5A059" />
                        </Box>
                    </MotionBox>

                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <Heading
                            as="h2"
                            fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
                            fontFamily="heading"
                            color="white"
                            fontWeight="700"
                            letterSpacing="-0.02em"
                        >
                            Our{' '}
                            <Text as="span" color="#C5A059">
                                Menu
                            </Text>
                        </Heading>
                    </MotionBox>

                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Text
                            fontSize={{ base: 'md', md: 'lg' }}
                            color="whiteAlpha.800"
                            maxW="600px"
                            lineHeight="1.8"
                        >
                            Browse our selection of handcrafted cakes, made with love
                            for every special occasion
                        </Text>
                    </MotionBox>
                </VStack>

                {/* Search and Filter Section */}
                <VStack spacing={8} mb={12}>
                    {/* Search Bar */}
                    <MotionBox
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        w={{ base: 'full', md: '450px' }}
                    >
                        <InputGroup size="lg">
                            <InputLeftElement pointerEvents="none" h="full" pl={2}>
                                <FaSearch color="whiteAlpha.600" />
                            </InputLeftElement>
                            <Input
                                placeholder="Search your favorite cake..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                bg="whiteAlpha.200"
                                border="1px solid"
                                borderColor="whiteAlpha.300"
                                borderRadius="20px"
                                h="56px"
                                pl={12}
                                color="white"
                                _focus={{
                                    borderColor: '#C5A059',
                                    boxShadow: '0 0 0 3px rgba(197, 160, 89, 0.3)',
                                    bg: 'whiteAlpha.300',
                                }}
                                _placeholder={{ color: 'whiteAlpha.600' }}
                                _hover={{ borderColor: 'whiteAlpha.500', bg: 'whiteAlpha.250' }}
                            />
                            {searchQuery && (
                                <Box position="absolute" right="16px" top="50%" transform="translateY(-50%)">
                                    <IconButton
                                        aria-label="Clear search"
                                        icon={<FaTimes />}
                                        size="sm"
                                        variant="ghost"
                                        onClick={clearSearch}
                                        color="gray.400"
                                        _hover={{ color: '#C5A059' }}
                                    />
                                </Box>
                            )}
                        </InputGroup>
                    </MotionBox>

                    {/* Category Filter */}
                    <MotionBox
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        w="full"
                        overflow="visible"
                    >
                        <Box
                            bg="whiteAlpha.200"
                            borderRadius="24px"
                            p={4}
                            boxShadow="0 4px 24px rgba(0, 0, 0, 0.2)"
                            border="1px solid"
                            borderColor="whiteAlpha.300"
                            overflowX="auto"
                        >
                            <Categories
                                selectedCategory={selectedCategory}
                                onSelectCategory={setSelectedCategory}
                            />
                        </Box>
                    </MotionBox>
                </VStack>

                {/* Results count */}
                <MotionBox
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    mb={8}
                >
                    <Text fontSize="sm" color="whiteAlpha.800" fontWeight="500">
                        Showing {filteredCakes.length} {filteredCakes.length === 1 ? 'cake' : 'cakes'}
                        {selectedCategory !== 'all' && ` in ${selectedCategory}`}
                        {searchQuery && ` matching "${searchQuery}"`}
                    </Text>
                </MotionBox>

                {/* Cake Grid */}
                <Box
                    bg="white"
                    borderRadius="32px"
                    p={{ base: 6, md: 10 }}
                    boxShadow="0 8px 40px rgba(0, 0, 0, 0.04)"
                >
                    <AnimatePresence mode="wait">
                        <SimpleGrid
                            columns={{ base: 1, sm: 2, lg: 3, xl: 4 }}
                            spacing={{ base: 6, md: 8, lg: 10 }}
                        >
                            {filteredCakes.map((cake, index) => (
                                <MotionBox
                                    key={cake.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.08,
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                    }}
                                >
                                    <CakeCard cake={cake} />
                                </MotionBox>
                            ))}
                        </SimpleGrid>
                    </AnimatePresence>
                </Box>

                {/* Empty State */}
                {filteredCakes.length === 0 && (
                    <MotionBox
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <VStack
                            py={{ base: 12, md: 20 }}
                            spacing={4}
                            bg="white"
                            borderRadius="24px"
                            boxShadow="0 10px 40px rgba(0, 0, 0, 0.05)"
                        >
                            <Box
                                w="80px"
                                h="80px"
                                borderRadius="full"
                                bg="brand.surface"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <FaSearch size={28} color="#636E72" />
                            </Box>
                            <Text fontSize="xl" color="brand.darkText" fontWeight="600">
                                No cakes found
                            </Text>
                            <Text color="brand.muted" textAlign="center" maxW="400px">
                                {searchQuery
                                    ? `We couldn't find any cakes matching "${searchQuery}". Try a different search term.`
                                    : "We don't have any cakes in this category yet. Check back soon for new flavors!"
                                }
                            </Text>
                            {(searchQuery || selectedCategory !== 'all') && (
                                <HStack spacing={3} pt={2}>
                                    <Text
                                        color="brand.primary"
                                        cursor="pointer"
                                        fontWeight="500"
                                        onClick={() => {
                                            setSearchQuery('')
                                            setSelectedCategory('all')
                                        }}
                                        _hover={{ textDecoration: 'underline' }}
                                    >
                                        View all cakes
                                    </Text>
                                </HStack>
                            )}
                        </VStack>
                    </MotionBox>
                )}
            </Container>
        </Box>
    )
}
