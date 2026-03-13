import { Box, Container, Heading, Text, Button, VStack, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export default function Hero() {
    return (
        <Box
            id="home"
            position="relative"
            minH="100vh"
            display="flex"
            alignItems="center"
            overflow="hidden"
        >
            {/* Full-width background cake image */}
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgImage="url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1920&h=1080&fit=crop')"
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
            />

            {/* Dark overlay for text readability */}
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.6) 100%)"
            />

            {/* Decorative elements */}
            <Box
                position="absolute"
                top="10%"
                left="5%"
                w="200px"
                h="200px"
                borderRadius="full"
                bg="#FF6B6B"
                opacity={0.2}
                filter="blur(80px)"
            />
            <Box
                position="absolute"
                bottom="20%"
                right="10%"
                w="300px"
                h="300px"
                borderRadius="full"
                bg="#4ECDC4"
                opacity={0.15}
                filter="blur(100px)"
            />

            <Container maxW="1200px" position="relative" zIndex={1}>
                <VStack
                    spacing={8}
                    align={{ base: 'center', md: 'flex-start' }}
                    textAlign={{ base: 'center', md: 'left' }}
                    maxW={{ base: 'full', lg: '650px' }}
                    py={{ base: 20, md: 0 }}
                >
                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Box
                            bg="rgba(255, 255, 255, 0.15)"
                            backdropFilter="blur(10px)"
                            px={6}
                            py={3}
                            borderRadius="full"
                            border="1px solid rgba(255, 255, 255, 0.2)"
                        >
                            <Text
                                color="white"
                                fontWeight="600"
                                fontSize="sm"
                                textTransform="uppercase"
                                letterSpacing="2px"
                            >
                                🧁 Handcrafted with Love
                            </Text>
                        </Box>
                    </MotionBox>

                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Heading
                            as="h1"
                            fontSize={{ base: '4xl', md: '5xl', lg: '7xl' }}
                            fontFamily="heading"
                            color="white"
                            lineHeight="1.1"
                            maxW="700px"
                            textShadow="0 2px 20px rgba(0, 0, 0, 0.3)"
                        >
                            Delicious Cakes for Your{' '}
                            <Text as="span" color="#FF6B6B">
                                Special Moments
                            </Text>
                        </Heading>
                    </MotionBox>

                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Text
                            fontSize={{ base: 'lg', md: 'xl' }}
                            color="whiteAlpha.900"
                            maxW="550px"
                            fontWeight="500"
                            textShadow="0 1px 10px rgba(0, 0, 0, 0.3)"
                        >
                            From elegant wedding cakes to fun birthday celebrations,
                            we create stunning custom cakes that taste as amazing as they look.
                        </Text>
                    </MotionBox>

                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <HStack spacing={4} flexDir={{ base: 'column', sm: 'row' }} w={{ base: 'full', sm: 'auto' }}>
                            <Button
                                size="lg"
                                bg="#FF6B6B"
                                color="white"
                                px={10}
                                py={7}
                                fontSize="md"
                                fontWeight="700"
                                _hover={{
                                    bg: '#E85555',
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 15px 40px rgba(255, 107, 107, 0.5)',
                                }}
                                style={{ transition: 'all 0.3s ease' }}
                                as="a"
                                href="#menu"
                                w={{ base: 'full', sm: 'auto' }}
                                borderRadius="16px"
                            >
                                View Our Menu
                            </Button>
                            <Button
                                size="lg"
                                bg="transparent"
                                border="3px solid"
                                borderColor="white"
                                color="white"
                                px={10}
                                py={7}
                                fontSize="md"
                                fontWeight="700"
                                _hover={{
                                    bg: 'white',
                                    color: '#2D3436',
                                    transform: 'translateY(-3px)',
                                }}
                                style={{ transition: 'all 0.3s ease' }}
                                as="a"
                                href="#contact"
                                w={{ base: 'full', sm: 'auto' }}
                                borderRadius="16px"
                            >
                                Contact Us
                            </Button>
                        </HStack>
                    </MotionBox>

                    {/* Trust indicators */}
                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        pt={4}
                    >
                        <HStack
                            spacing={10}
                            flexDir={{ base: 'column', sm: 'row' }}
                            bg="rgba(255, 255, 255, 0.1)"
                            backdropFilter="blur(10px)"
                            px={8}
                            py={4}
                            borderRadius="16px"
                            border="1px solid rgba(255, 255, 255, 0.1)"
                        >
                            <HStack spacing={3}>
                                <Text fontSize="2xl" fontWeight="bold" color="white">500+</Text>
                                <Text fontSize="sm" color="whiteAlpha.800">Happy Customers</Text>
                            </HStack>
                            <HStack spacing={1}>
                                <Text fontSize="xl" color="#FFD700">★</Text>
                                <Text fontSize="xl" color="#FFD700">★</Text>
                                <Text fontSize="xl" color="#FFD700">★</Text>
                                <Text fontSize="xl" color="#FFD700">★</Text>
                                <Text fontSize="xl" color="#FFD700">★</Text>
                                <Text fontSize="sm" color="whiteAlpha.800" ml={2}>4.9/5 Rating</Text>
                            </HStack>
                            <HStack spacing={3}>
                                <Text fontSize="2xl" fontWeight="bold" color="white">10+</Text>
                                <Text fontSize="sm" color="whiteAlpha.800">Years Experience</Text>
                            </HStack>
                        </HStack>
                    </MotionBox>
                </VStack>
            </Container>
        </Box>
    )
}
