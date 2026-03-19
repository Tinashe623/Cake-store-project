import { useState, useEffect } from 'react'
import { Box, Container, Heading, Text, VStack, HStack, Avatar, Icon, Flex } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { testimonials } from '../data/cakes'

const MotionBox = motion(Box)

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 6000)
        return () => clearInterval(timer)
    }, [])

    const currentTestimonial = testimonials[currentIndex]

    return (
        <Box py={{ base: 16, md: 20 }} bg="white" position="relative" overflow="hidden">
            {/* Background decoration */}
            <Box
                position="absolute"
                top="-50px"
                left="-50px"
                w="250px"
                h="250px"
                borderRadius="full"
                bg="#0A192F"
                opacity={0.05}
                filter="blur(80px)"
            />
            <Box
                position="absolute"
                bottom="-50px"
                right="-50px"
                w="200px"
                h="200px"
                borderRadius="full"
                bg="#C5A059"
                opacity={0.05}
                filter="blur(60px)"
            />

            <Container maxW="900px" position="relative" zIndex={1}>
                <VStack spacing={4} mb={{ base: 10, md: 14 }} textAlign="center">
                    <Box
                        display="inline-flex"
                        alignItems="center"
                        gap={2}
                        bg="#0A192F"
                        px={5}
                        py={2.5}
                        borderRadius="full"
                    >
                        <Box w="8px" h="8px" borderRadius="full" bg="#C5A059" />
                        <Text
                            color="#C5A059"
                            fontWeight="600"
                            fontSize="sm"
                            textTransform="uppercase"
                            letterSpacing="2px"
                        >
                            Testimonials
                        </Text>
                        <Box w="8px" h="8px" borderRadius="full" bg="#C5A059" />
                    </Box>

                    <Heading
                        as="h2"
                        fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
                        fontFamily="heading"
                        color="gray.800"
                        fontWeight="700"
                    >
                        What Our{' '}
                        <Text as="span" color="#C5A059">
                            Clients
                        </Text>{' '}
                        Say
                    </Heading>
                </VStack>

                <Box position="relative" minH={{ base: '280px', md: '320px' }}>
                    <AnimatePresence mode="wait">
                        <MotionBox
                            key={currentIndex}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5 }}
                        >
                            <VStack
                                spacing={6}
                                bg="white"
                                p={{ base: 8, md: 12 }}
                                borderRadius="32px"
                                boxShadow="0 8px 40px rgba(0, 0, 0, 0.06)"
                                border="1px solid"
                                borderColor="gray.100"
                                textAlign="center"
                                position="relative"
                            >
                                {/* Quote icon */}
                                <Box
                                    position="absolute"
                                    top={-4}
                                    left={8}
                                    bg="#C5A059"
                                    p={3}
                                    borderRadius="full"
                                >
                                    <FaQuoteLeft color="white" size={20} />
                                </Box>

                                {/* Stars */}
                                <HStack spacing={2} pt={2}>
                                    {[...Array(5)].map((_, i) => (
                                        <Icon
                                            key={i}
                                            as={FaStar}
                                            color="#FFD700"
                                            boxSize={5}
                                            fill="#FFD700"
                                        />
                                    ))}
                                </HStack>

                                {/* Quote */}
                                <Text
                                    fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                                    color="gray.600"
                                    fontStyle="italic"
                                    maxW="650px"
                                    lineHeight="1.9"
                                    fontWeight="500"
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
                                        borderColor="#C5A059"
                                    />
                                    <VStack align="start" spacing={0}>
                                        <Text fontWeight="600" color="gray.800" fontSize="md">
                                            {currentTestimonial.name}
                                        </Text>
                                        <Text fontSize="sm" color="gray.400">
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
                            w={index === currentIndex ? '32px' : '8px'}
                            h="8px"
                            borderRadius="full"
                            bg={index === currentIndex ? '#C5A059' : 'gray.200'}
                            cursor="pointer"
                            onClick={() => setCurrentIndex(index)}
                            transition="all 0.3s ease"
                            _hover={{ bg: index === currentIndex ? '#C5A059' : 'gray.300' }}
                        />
                    ))}
                </Flex>
            </Container>
        </Box>
    )
}
