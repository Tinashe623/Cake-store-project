import { Box, Flex, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { categories } from '../data/cakes'
import { Category } from '../types'

const MotionBox = motion(Box)

interface CategoriesProps {
    selectedCategory: Category
    onSelectCategory: (category: Category) => void
}

const activeBg = 'brand.accent'

export default function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
    return (
        <Flex
            gap={{ base: 1.5, md: 2 }}
            py={1}
            px={{ base: 2, md: 4 }}
            justify={{ base: 'flex-start', xl: 'center' }}
            flexWrap={{ base: 'nowrap', lg: 'wrap' }}
            minW={{ base: 'max-content', lg: '0' }}
            w="full"
            css={{
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
                scrollbarWidth: 'none',
            }}
            overflowX={{ base: 'auto', lg: 'visible' }}
        >
            {categories.map((category) => {
                const isSelected = selectedCategory === category.id

                return (
                    <Box key={category.id} position="relative" flexShrink={0}>
                        {isSelected && (
                            <MotionBox
                                layoutId="activeCategory"
                                position="absolute"
                                inset={0}
                                bg={activeBg}
                                borderRadius="full"
                                initial={false}
                                transition={{
                                    type: 'spring',
                                    stiffness: 500,
                                    damping: 35
                                }}
                                boxShadow="0 4px 15px rgba(201, 169, 110, 0.4)"
                                zIndex={0}
                            />
                        )}
                        <Button
                            variant="unstyled"
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                            h="36px"
                            px={{ base: 3, md: 4 }}
                            borderRadius="full"
                            fontWeight="600"
                            fontSize={{ base: '2xs', md: 'xs' }}
                            whiteSpace="nowrap"
                            color={isSelected ? 'brand.primary' : 'brand.secondary'}
                            _hover={{
                                bg: isSelected ? 'transparent' : 'rgba(245, 230, 211, 0.15)',
                                color: isSelected ? 'brand.primary' : 'brand.lightText',
                            }}
                            onClick={() => onSelectCategory(category.id)}
                            position="relative"
                            zIndex={1}
                            transition="all 0.3s ease"
                            textTransform="uppercase"
                            letterSpacing="0.5px"
                        >
                            {category.label}
                        </Button>
                    </Box>
                )
            })}
        </Flex>
    )
}
