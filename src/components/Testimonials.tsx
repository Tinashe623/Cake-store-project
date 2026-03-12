import { useState, useEffect } from 'react'
import { Box, Container, Heading, Text, VStack, HStack, Avatar, Icon, Flex } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import { testimonials } from '../data/cakes'

const MotionBox = motion(Box)

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const currentTestimonial = testimonials[currentIndex]

    return (
        <Box py={{ base: 16, md: 20 }} bg="brand.secondary">
            <Container maxW="800px">
                <VStack spacing={4} mb={12} textAlign="center">
                    <Text
                        color="brand.accent"
                        fontWeight="600"
                        fontSize="sm"
                        textTransform="uppercase"
                        letterSpacing="2px"
                    >
                        Testimonials
                    </Text>
                    <Heading
                        as="h2"
                        fontSize={{ base: '2xl', md: '4xl' }}
                        fontFamily="heading"
                        color="brand.darkText"
                    >
                        What Our Clients Say
                    </Heading>
                </VStack>

                <Box position="relative" minH="300px">
                    <AnimatePresence mode="wait">
                        <MotionBox
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <VStack
                                spacing={6}
                                bg="brand.cardBg"
                                p={{ base: 6, md: 10 }}
                                borderRadius="24px"
                                boxShadow="0 10px 40px rgba(74, 55, 40, 0.1)"
                                textAlign="center"
                            >
                                {/* Stars */}
                                <HStack spacing={1}>
                                    {[...Array(5)].map((_, i) => (
                                        <Icon
                                            key={i}
                                            as={FaStar}
                                            color="brand.accent"
                                            boxSize={5}
                                        />
                                    ))}
                                </HStack>

                                {/* Quote */}
                                <Text
                                    fontSize={{ base: 'md', md: 'lg' }}
                                    color="brand.darkText"
                                    fontStyle="italic"
                                    maxW="600px"
                                >
                                    "{currentTestimonial.text}"
                                </Text>

                                {/* Author */}
                                <HStack spacing={4} pt={4}>
                                    <Avatar
                                        src={currentTestimonial.photo}
                                        name={currentTestimonial.name}
                                        size="lg"
                                        border="3px solid"
                                        borderColor="brand.primary"
                                    />
                                    <VStack align="start" spacing={0}>
                                        <Text fontWeight="600" color="brand.darkText">
                                            {currentTestimonial.name}
                                        </Text>
                                        <Text fontSize="sm" color="brand.darkText" opacity={0.6}>
                                            {currentTestimonial.date}
                                        </Text>
                                    </VStack>
                                </HStack>
                            </VStack>
                        </MotionBox>
                    </AnimatePresence>
                </Box>

                {/* Dots */}
                <Flex justify="center" mt={8} gap={2}>
                    {testimonials.map((_, index) => (
                        <Box
                            key={index}
                            w={index === currentIndex ? '24px' : '8px'}
                            h="8px"
                            borderRadius="full"
                            bg={index === currentIndex ? 'brand.accent' : 'brand.primary'}
                            cursor="pointer"
                            onClick={() => setCurrentIndex(index)}
                            transition="all 0.3s ease"
                        />
                    ))}
                </Flex>
            </Container>
        </Box>
    )
}
