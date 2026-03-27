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
        <Box py={{ base: 20, md: 32 }} bg="brand.background" position="relative" overflow="hidden">
            {/* Smooth gradient transition from Menu */}
            <Box
                position="absolute"
                top="-80px"
                left={0}
                w="full"
                h="120px"
                bgGradient="linear(to-b, brand.primary, brand.background)"
                zIndex={1}
            />

            {/* Background Orbs */}
            <Box
                position="absolute"
                bottom="-10%"
                left="-5%"
                w="500px"
                h="500px"
                borderRadius="full"
                bg="brand.secondaryLight"
                opacity={0.2}
                filter="blur(120px)"
            />
            <Box
                position="absolute"
                top="10%"
                right="-10%"
                w="400px"
                h="400px"
                borderRadius="full"
                bg="brand.accent"
                opacity={0.1}
                filter="blur(100px)"
            />

            <Container maxW="1200px" position="relative" zIndex={2}>
                <VStack spacing={6} mb={{ base: 12, md: 16 }} textAlign="center">
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Text
                            color="brand.accent"
                            fontWeight="700"
                            fontSize="sm"
                            textTransform="uppercase"
                            letterSpacing="3px"
                        >
                            Client Stories
                        </Text>
                    </MotionBox>

                    <Heading
                        as="h2"
                        fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                        fontFamily="heading"
                        color="brand.primary"
                        fontWeight="800"
                        letterSpacing="-0.02em"
                    >
                        Moments of{' '}
                        <Text as="span" className="text-gradient">
                            Joy
                        </Text>
                    </Heading>
                </VStack>

                <Box position="relative" minH={{ base: '320px', md: '360px' }}>
                    <AnimatePresence mode="wait">
                        <MotionBox
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            h="full"
                        >
                            <VStack
                                spacing={8}
                                bg="rgba(255, 255, 255, 0.7)"
                                backdropFilter="blur(20px)"
                                border="1px solid rgba(255, 255, 255, 0.9)"
                                p={{ base: 8, md: 16 }}
                                borderRadius="40px"
                                boxShadow="0 30px 60px -15px rgba(45, 10, 10, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.5)"
                                textAlign="center"
                                position="relative"
                            >
                                {/* Quote icon */}
                                <Box
                                    position="absolute"
                                    top="-20px"
                                    left={{ base: "50%", md: "40px" }}
                                    transform={{ base: "translateX(-50%)", md: "none" }}
                                    bg="brand.accent"
                                    w="60px"
                                    h="60px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    borderRadius="full"
                                    boxShadow="0 10px 20px rgba(201, 169, 110, 0.3)"
                                >
                                    <FaQuoteLeft color="white" size={24} />
                                </Box>

                                {/* Stars */}
                                <HStack spacing={2} pt={4}>
                                    {[...Array(5)].map((_, i) => (
                                        <Icon
                                            key={i}
                                            as={FaStar}
                                            color="brand.accent"
                                            boxSize={5}
                                        />
                                    ))}
                                </HStack>

                                {/* Quote Text */}
                                <Text
                                    fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                                    color="brand.primary"
                                    fontFamily="heading"
                                    fontStyle="italic"
                                    maxW="750px"
                                    lineHeight="1.8"
                                    fontWeight="600"
                                >
                                    "{currentTestimonial.text}"
                                </Text>

                                {/* Author */}
                                <HStack spacing={4} pt={2}>
                                    <Box position="relative">
                                        <Box position="absolute" inset="-3px" borderRadius="full" bgGradient="linear(to-tr, brand.accent, brand.secondary)" zIndex={0} />
                                        <Avatar
                                            src={currentTestimonial.photo}
                                            name={currentTestimonial.name}
                                            size="xl"
                                            border="4px solid white"
                                            position="relative"
                                            zIndex={1}
                                        />
                                    </Box>
                                    <VStack align="start" spacing={1}>
                                        <Text fontWeight="800" color="brand.primary" fontSize="lg">
                                            {currentTestimonial.name}
                                        </Text>
                                        <Text fontSize="sm" color="brand.muted" fontWeight="600">
                                            {currentTestimonial.date}
                                        </Text>
                                    </VStack>
                                </HStack>
                            </VStack>
                        </MotionBox>
                    </AnimatePresence>
                </Box>

                {/* Custom Dots Pagination */}
                <Flex justify="center" mt={10} gap={3}>
                    {testimonials.map((_, index) => (
                        <Box
                            key={index}
                            w={index === currentIndex ? '32px' : '10px'}
                            h="10px"
                            borderRadius="full"
                            bg={index === currentIndex ? 'brand.accent' : 'brand.border'}
                            cursor="pointer"
                            onClick={() => setCurrentIndex(index)}
                            transition="all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                            _hover={{ bg: 'brand.accentHover' }}
                        />
                    ))}
                </Flex>
            </Container>
        </Box>
    )
}
