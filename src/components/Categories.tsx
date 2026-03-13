import { Box, Container, HStack, Button } from '@chakra-ui/react'
import { categories } from '../data/cakes'
import { Category } from '../types'

interface CategoriesProps {
    selectedCategory: Category
    onSelectCategory: (category: Category) => void
}

export default function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
    return (
        <Box py={6} bg="brand.surface" borderRadius="20px">
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
                            size="md"
                            px={6}
                            py={3}
                            borderRadius="full"
                            fontWeight="500"
                            fontSize="sm"
                            whiteSpace="nowrap"
                            bg={selectedCategory === category.id ? 'brand.primary' : 'white'}
                            color={selectedCategory === category.id ? 'white' : 'brand.muted'}
                            border="2px solid"
                            borderColor={selectedCategory === category.id ? 'brand.primary' : 'brand.border'}
                            _hover={{
                                bg: selectedCategory === category.id ? 'brand.primaryDark' : 'brand.primary',
                                color: 'white',
                                borderColor: 'brand.primary',
                                transform: 'translateY(-2px)',
                            }}
                            transition="all 0.3s ease"
                            onClick={() => onSelectCategory(category.id)}
                            boxShadow={selectedCategory === category.id ? '0 4px 15px rgba(255, 107, 107, 0.3)' : 'none'}
                        >
                            {category.label}
                        </Button>
                    ))}
                </HStack>
            </Container>
        </Box>
    )
}
