import { Box, HStack, Button, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { categories } from '../data/cakes'
import { Category } from '../types'

const MotionBox = motion(Box)

interface CategoriesProps {
    selectedCategory: Category
    onSelectCategory: (category: Category) => void
}

const categoryColors: Record<string, string> = {
    all: '#C5A059',
    birthday: '#C5A059',
    wedding: '#0A192F',
    cupcakes: '#C5A059',
    custom: '#C5A059',
    seasonal: '#C5A059',
}

export default function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
    return (
        <HStack
            spacing={{ base: 2, md: 3 }}
            overflowX="auto"
            py={1}
            px={1}
            justify={{ base: 'flex-start', md: 'center' }}
            flexWrap="nowrap"
            minW="max-content"
            css={{
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
                scrollbarWidth: 'none',
            }}
        >
            {categories.map((category) => {
                const isSelected = selectedCategory === category.id
                const color = categoryColors[category.id] || categoryColors.all

                return (
                    <Box key={category.id} position="relative">
                        {isSelected && (
                            <MotionBox
                                layoutId="activeCategory"
                                position="absolute"
                                inset={0}
                                bg={color}
                                borderRadius="full"
                                initial={false}
                                transition={{
                                    type: 'spring',
                                    stiffness: 500,
                                    damping: 35
                                }}
                            />
                        )}
                        <Button
                            size="md"
                            px={{ base: 4, md: 5 }}
                            py={2.5}
                            borderRadius="full"
                            fontWeight="600"
                            fontSize={{ base: 'xs', md: 'sm' }}
                            whiteSpace="nowrap"
                            bg="transparent"
                            color={isSelected ? 'white' : 'gray.500'}
                            _hover={{
                                bg: isSelected ? color : `${color}10`,
                                color: isSelected ? 'white' : color,
                            }}
                            onClick={() => onSelectCategory(category.id)}
                            position="relative"
                            zIndex={1}
                        >
                            <Text>{category.label}</Text>
                        </Button>
                    </Box>
                )
            })}
        </HStack>
    )
}
