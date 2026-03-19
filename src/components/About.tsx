import { Box, Container, Heading, Text, SimpleGrid, VStack, Image, HStack, Icon, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaAward, FaHeart, FaStar, FaArrowRight } from 'react-icons/fa'

const MotionBox = motion(Box)

const stats = [
    { icon: FaAward, value: '10+', label: 'Years Experience', color: '#C5A059' },
    { icon: FaHeart, value: '500+', label: 'Cakes Made', color: '#C5A059' },
    { icon: FaStar, value: '4.9', label: 'Star Rating', color: '#C5A059' },
]

export default function About() {
    return (
        <Box id="about" py={{ base: 16, md: 20 }} bg="white" position="relative" overflow="hidden">
            {/* Background decoration */}
            <Box
                position="absolute"
                top="0"
                right="0"
                w="400px"
                h="400px"
                borderRadius="full"
                bg="#C5A059"
                opacity={0.03}
                filter="blur(100px)"
            />

            <Container maxW="1400px" position="relative" zIndex={1}>
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 10, lg: 16 }} alignItems="center">
                    {/* Image */}
                    <MotionBox
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Box position="relative">
                            {/* Decorative border */}
                            <Box
                                position="absolute"
                                top="-20px"
                                left="-20px"
                                w="100%"
                                h="100%"
                                border="2px solid"
                                borderColor="#C5A059"
                                borderRadius="32px"
                                zIndex={0}
                            />
                            <Image
                                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&h=600&fit=crop"
                                alt="Baker at work"
                                borderRadius="32px"
                                boxShadow="0 30px 60px rgba(255, 107, 107, 0.15)"
                                position="relative"
                                zIndex={1}
                            />
                            {/* Floating Stats Card */}
                            <MotionBox
                                position="absolute"
                                bottom="-30px"
                                right={{ base: 0, md: "-30px" }}
                                bg="white"
                                p={5}
                                borderRadius="24px"
                                boxShadow="0 20px 50px rgba(0, 0, 0, 0.1)"
                                zIndex={2}
                                initial={{ y: 20 }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <HStack spacing={4}>
                                    <Box
                                        w="55px"
                                        h="55px"
                                        bg="#C5A059"
                                        borderRadius="16px"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Icon as={FaAward} color="white" boxSize={6} />
                                    </Box>
                                    <VStack align="start" spacing={0}>
                                        <Text fontWeight="700" fontSize="2xl" color="gray.800">10+</Text>
                                        <Text fontSize="sm" color="gray.500">Years of Excellence</Text>
                                    </VStack>
                                </HStack>
                            </MotionBox>
                        </Box>
                    </MotionBox>

                    {/* Content */}
                    <VStack align="start" spacing={7}>
                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
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
                                    About Us
                                </Text>
                                <Box w="8px" h="8px" borderRadius="full" bg="#C5A059" />
                            </Box>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Heading
                                as="h2"
                                fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
                                fontFamily="heading"
                                color="gray.800"
                                fontWeight="700"
                                lineHeight="1.2"
                            >
                                Crafting Sweet{' '}
                                <Text as="span" color="#C5A059">
                                    Memories
                                </Text>{' '}
                                Since 2014
                            </Heading>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Text
                                fontSize={{ base: 'md', md: 'lg' }}
                                color="gray.500"
                                lineHeight="1.9"
                                maxW="550px"
                            >
                                At Tarie Cakes, we believe every celebration deserves a perfect cake.
                                With over 10 years of experience, we've been crafting delicious,
                                beautiful cakes that make your special moments even more memorable.
                            </Text>
                        </MotionBox>

                        {/* Stats */}
                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            pt={2}
                        >
                            <SimpleGrid columns={{ base: 3 }} spacing={6}>
                                {stats.map((stat, index) => (
                                    <VStack key={index} spacing={2} align="start">
                                        <HStack spacing={2}>
                                            <Icon as={stat.icon} color={stat.color} boxSize={4} />
                                            <Text fontWeight="700" fontSize="2xl" color="gray.800">
                                                {stat.value}
                                            </Text>
                                        </HStack>
                                        <Text fontSize="sm" color="gray.500">
                                            {stat.label}
                                        </Text>
                                    </VStack>
                                ))}
                            </SimpleGrid>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Button
                                size="lg"
                                bg="#C5A059"
                                color="white"
                                px={8}
                                py={6}
                                fontWeight="600"
                                rightIcon={<FaArrowRight />}
                                _hover={{
                                    bg: '#B89545',
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 15px 40px rgba(197, 160, 89, 0.35)',
                                }}
                                transition="all 0.3s ease"
                                borderRadius="14px"
                            >
                                Learn Our Story
                            </Button>
                        </MotionBox>
                    </VStack>
                </SimpleGrid>
            </Container>
        </Box>
    )
}
