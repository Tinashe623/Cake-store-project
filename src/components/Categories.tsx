import { Box, Container, HStack, Button, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { categories } from '../data/cakes'
import { Category } from '../types'

const MotionBox = motion(Box)

interface CategoriesProps {
    selectedCategory: Category
    onSelectCategory: (category: Category) => void
}

export default function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
    return (
        <Box py={8} bg="brand.secondary">
            <Container maxW="1200px">
                <HStack
                    spacing={3}
                    overflowX="auto"
                    py={2}
                    css={{
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                    }}
                >
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            size="sm"
                            px={6}
                            py={3}
                            borderRadius="full"
                            fontWeight="500"
                            fontSize="sm"
                            whiteSpace="nowrap"
                            bg={selectedCategory === category.id ? 'brand.accent' : 'transparent'}
                            color={selectedCategory === category.id ? 'brand.darkText' : 'brand.darkText'}
                            border="2px solid"
                            borderColor="brand.accent"
                            _hover={{
                                bg: selectedCategory === category.id ? 'brand.accentHover' : 'brand.accent',
                                color: 'brand.darkText',
                                transform: 'translateY(-2px)',
                            }}
                            transition="all 0.3s ease"
                            onClick={() => onSelectCategory(category.id)}
                        >
                            {category.label}
                        </Button>
                    ))}
                </HStack>
            </Container>
        </Box>
    )
}
