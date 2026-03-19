import { Box, Container, Heading, Text, Button, VStack, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaStar } from 'react-icons/fa'

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
                bgImage="url('/tarie cakes hero.png')"
                bgSize="cover"
                bgPosition="50% -65%"
                bgRepeat="no-repeat"
            />

            {/* Gradient overlay - softer for light image */}
            {/* <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="linear-gradient(180deg, rgba(255, 240, 245, 0.15) 0%, rgba(255, 192, 203, 0.25) 50%, rgba(0, 0, 0, 0.5) 100%)"
            /> */}

            {/* Decorative gradient orbs */}
            <Box
                position="absolute"
                top="5%"
                left="3%"
                w="250px"
                h="250px"
                borderRadius="full"
                bg="#FF6B6B"
                opacity={0.15}
                filter="blur(100px)"
            />
            <Box
                position="absolute"
                bottom="15%"
                right="5%"
                w="350px"
                h="350px"
                borderRadius="full"
                bg="#4ECDC4"
                opacity={0.1}
                filter="blur(120px)"
            />

            <Container maxW="1400px" position="relative" zIndex={1}>
                <VStack
                    spacing={8}
                    align={{ base: 'center', md: 'flex-start' }}
                    textAlign={{ base: 'center', md: 'left' }}
                    maxW={{ base: 'full', lg: '700px' }}
                    py={{ base: 16, md: 0 }}
                >
                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Heading
                            as="h1"
                            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                            fontFamily="heading"
                            color="white"
                            textShadow="0 2px 20px rgba(0, 0, 0, 0.25)"
                            lineHeight="1.15"
                            fontWeight="700"
                            letterSpacing="-0.02em"
                        >
                            <Text as="span" color="#C5A059">
                                Tarie
                            </Text>{' '}
                            Sweet<br />
                            <Text as="span" color="#C5A059">
                                Creations
                            </Text>
                        </Heading>
                    </MotionBox>

                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <Text
                            fontSize={{ base: 'md', md: 'lg' }}
                            color="white"
                            textShadow="0 2px 10px rgba(0, 0, 0, 0.3)"
                            maxW="520px"
                            fontWeight="500"
                            lineHeight="1.8"
                        >
                            From elegant wedding cakes to fun birthday celebrations,
                            we create stunning custom cakes that taste as amazing as they look.
                        </Text>
                    </MotionBox>

                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45 }}
                    >
                        <HStack spacing={4} flexDir={{ base: 'column', sm: 'row' }} w={{ base: 'full', sm: 'auto' }}>
                            <Button
                                size="lg"
                                bg="#C5A059"
                                color="white"
                                px={8}
                                py={6}
                                fontSize="md"
                                fontWeight="600"
                                leftIcon={<FaArrowRight />}
                                _hover={{
                                    bg: '#B89545',
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 20px 40px rgba(197, 160, 89, 0.4)',
                                }}
                                transition="all 0.3s ease"
                                as="a"
                                href="#menu"
                                w={{ base: 'full', sm: 'auto' }}
                                borderRadius="14px"
                            >
                                Explore Menu
                            </Button>
                            <Button
                                size="lg"
                                bg="transparent"
                                border="2px solid"
                                borderColor="whiteAlpha.400"
                                color="white"
                                px={8}
                                py={6}
                                fontSize="md"
                                fontWeight="600"
                                _hover={{
                                    bg: 'whiteAlpha.200',
                                    borderColor: 'white',
                                    transform: 'translateY(-3px)',
                                }}
                                transition="all 0.3s ease"
                                as="a"
                                href="#contact"
                                w={{ base: 'full', sm: 'auto' }}
                                borderRadius="14px"
                            >
                                Get in Touch
                            </Button>
                        </HStack>
                    </MotionBox>
                </VStack>
            </Container>
        </Box>
    )
}
