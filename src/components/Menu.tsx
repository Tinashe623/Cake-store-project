import { useState } from 'react'
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Categories from './Categories'
import CakeCard from './CakeCard'
import { cakesData } from '../data/cakes'
import { Category } from '../types'

const MotionBox = motion(Box)

export default function Menu() {
    const [selectedCategory, setSelectedCategory] = useState<Category>('all')

    const filteredCakes = selectedCategory === 'all'
        ? cakesData
        : cakesData.filter(cake => cake.category === selectedCategory)

    return (
        <Box id="menu" py={{ base: 16, md: 20 }} bg="brand.background">
            <Container maxW="1200px">
                <VStack spacing={4} mb={12} textAlign="center">
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Text
                            color="brand.accent"
                            fontWeight="600"
                            fontSize="sm"
                            textTransform="uppercase"
                            letterSpacing="2px"
                        >
                            Our Menu
                        </Text>
                    </MotionBox>

                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <Heading
                            as="h2"
                            fontSize={{ base: '2xl', md: '4xl' }}
                            fontFamily="heading"
                            color="brand.darkText"
                        >
                            Delicious Cakes
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
                            color="brand.darkText"
                            opacity={0.7}
                            maxW="600px"
                        >
                            Browse our selection of handcrafted cakes, perfect for any occasion
                        </Text>
                    </MotionBox>
                </VStack>

                {/* Category Filter */}
                <Box mb={10}>
                    <Categories
                        selectedCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                    />
                </Box>

                {/* Cake Grid */}
                <SimpleGrid
                    columns={{ base: 1, sm: 2, lg: 3, xl: 4 }}
                    spacing={6}
                >
                    {filteredCakes.map((cake, index) => (
                        <MotionBox
                            key={cake.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <CakeCard cake={cake} />
                        </MotionBox>
                    ))}
                </SimpleGrid>

                {filteredCakes.length === 0 && (
                    <VStack py={16} spacing={4}>
                        <Text fontSize="xl" color="brand.darkText" opacity={0.6}>
                            No cakes found in this category
                        </Text>
                        <Text color="brand.darkText" opacity={0.5}>
                            Check back soon for new flavors!
                        </Text>
                    </VStack>
                )}
            </Container>
        </Box>
    )
}
