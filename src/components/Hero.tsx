import { Box, Container, Heading, Text, Button, VStack, HStack, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'

const MotionBox = motion(Box)

export default function Hero() {
    const scrollToMenu = () => {
        document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <Box
            id="home"
            position="relative"
            minH="100vh"
            display="flex"
            alignItems="center"
            overflow="hidden"
            bg="linear-gradient(135deg, #FFFAF5 0%, #FDF5E6 50%, #F5E6D3 100%)"
        >
            {/* Background Decorations */}
            <Box
                position="absolute"
                top="-20%"
                right="-10%"
                w="600px"
                h="600px"
                borderRadius="full"
                bg="brand.primary"
                opacity={0.1}
                filter="blur(80px)"
            />
            <Box
                position="absolute"
                bottom="-30%"
                left="-15%"
                w="800px"
                h="800px"
                borderRadius="full"
                bg="brand.accent"
                opacity={0.08}
                filter="blur(100px)"
            />

            {/* Floating Cake Images */}
            <MotionBox
                position="absolute"
                top="15%"
                right="10%"
                w="200px"
                display={{ base: 'none', lg: 'block' }}
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
                <Image
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop"
                    alt="Chocolate cake"
                    borderRadius="20px"
                    boxShadow="0 20px 60px rgba(74, 55, 40, 0.2)"
                />
            </MotionBox>

            <MotionBox
                position="absolute"
                bottom="20%"
                left="5%"
                w="150px"
                display={{ base: 'none', lg: 'block' }}
                initial={{ y: 0 }}
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
                <Image
                    src="https://images.unsplash.com/photo-1563729768-6af58466dfd9?w=200&h=200&fit=crop"
                    alt="Wedding cake"
                    borderRadius="16px"
                    boxShadow="0 15px 40px rgba(74, 55, 40, 0.15)"
                />
            </MotionBox>

            <Container maxW="1200px" position="relative" zIndex={1}>
                <VStack spacing={6} align={{ base: 'center', md: 'flex-start' }} textAlign={{ base: 'center', md: 'left' }}>
                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Text
                            color="brand.accent"
                            fontWeight="600"
                            fontSize="sm"
                            textTransform="uppercase"
                            letterSpacing="2px"
                        >
                            Handcrafted with Love
                        </Text>
                    </MotionBox>

                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Heading
                            as="h1"
                            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                            fontFamily="heading"
                            color="brand.darkText"
                            lineHeight="1.1"
                            maxW="700px"
                        >
                            Elegant Cakes for{' '}
                            <Text as="span" color="brand.accent">
                                Every Celebration
                            </Text>
                        </Heading>
                    </MotionBox>

                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Text
                            fontSize={{ base: 'md', md: 'lg' }}
                            color="brand.darkText"
                            opacity={0.8}
                            maxW="500px"
                        >
                            From birthdays to weddings, we create stunning custom cakes that
                            make your special moments unforgettable.
                        </Text>
                    </MotionBox>

                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <HStack spacing={4} flexDir={{ base: 'column', sm: 'row' }}>
                            <Button
                                size="lg"
                                bg="brand.accent"
                                color="brand.darkText"
                                px={8}
                                _hover={{
                                    bg: 'brand.accentHover',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 10px 40px rgba(212, 175, 55, 0.4)',
                                }}
                                transition="all 0.3s ease"
                                as="a"
                                href="#menu"
                            >
                                Order Now
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                borderColor="brand.darkText"
                                color="brand.darkText"
                                px={8}
                                _hover={{
                                    bg: 'brand.darkText',
                                    color: 'brand.lightText',
                                }}
                                as="a"
                                href="#menu"
                            >
                                View Menu
                            </Button>
                        </HStack>
                    </MotionBox>
                </VStack>
            </Container>

            {/* Scroll Indicator */}
            <MotionBox
                position="absolute"
                bottom="30px"
                left="50%"
                transform="translateX(-50%)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, delay: 1, repeat: Infinity }}
                cursor="pointer"
                onClick={scrollToMenu}
            >
                <FaArrowDown color="#4A3728" />
            </MotionBox>
        </Box>
    )
}
