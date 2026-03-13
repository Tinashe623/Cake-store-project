import { Box, Container, Heading, Text, SimpleGrid, VStack, Image, HStack, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaAward, FaHeart, FaStar } from 'react-icons/fa'

const MotionBox = motion(Box)

const stats = [
    { icon: FaAward, value: '10+', label: 'Years Experience' },
    { icon: FaHeart, value: '500+', label: 'Cakes Made' },
    { icon: FaStar, value: '4.9', label: 'Star Rating' },
]

export default function About() {
    return (
        <Box id="about" py={{ base: 16, md: 20 }} bg="brand.background">
            <Container maxW="1200px">
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
                    {/* Image */}
                    <MotionBox
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Box position="relative">
                            <Box
                                position="absolute"
                                top="-20px"
                                left="-20px"
                                w="100%"
                                h="100%"
                                border="3px solid"
                                borderColor="brand.primary"
                                borderRadius="24px"
                                zIndex={0}
                            />
                            <Image
                                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&h=600&fit=crop"
                                alt="Baker at work"
                                borderRadius="24px"
                                boxShadow="0 25px 50px rgba(255, 107, 107, 0.15)"
                                position="relative"
                                zIndex={1}
                            />
                            {/* Floating Stats Card */}
                            <Box
                                position="absolute"
                                bottom="-30px"
                                right="-20px"
                                bg="white"
                                p={4}
                                borderRadius="20px"
                                boxShadow="0 15px 40px rgba(0, 0, 0, 0.1)"
                                zIndex={2}
                                display={{ base: 'none', md: 'block' }}
                            >
                                <HStack spacing={4}>
                                    <Box
                                        w="50px"
                                        h="50px"
                                        bg="brand.primary"
                                        borderRadius="full"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Icon as={FaAward} color="white" boxSize={5} />
                                    </Box>
                                    <VStack align="start" spacing={0}>
                                        <Text fontWeight="700" fontSize="xl" color="brand.darkText">10+</Text>
                                        <Text fontSize="xs" color="brand.muted">Years of Excellence</Text>
                                    </VStack>
                                </HStack>
                            </Box>
                        </Box>
                    </MotionBox>

                    {/* Content */}
                    <VStack align="start" spacing={6}>
                        <MotionBox
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <HStack spacing={2}>
                                <Box w="40px" h="2px" bg="brand.primary" borderRadius="full" />
                                <Text
                                    color="brand.primary"
                                    fontWeight="600"
                                    fontSize="sm"
                                    textTransform="uppercase"
                                    letterSpacing="2px"
                                >
                                    About Us
                                </Text>
                            </HStack>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <Heading
                                as="h2"
                                fontSize={{ base: '2xl', md: '3xl' }}
                                fontFamily="heading"
                                color="brand.darkText"
                                lineHeight="1.2"
                            >
                                Baking Dreams, One Cake at a Time
                            </Heading>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Text fontSize="md" color="brand.muted" lineHeight="1.8">
                                Welcome to Tarie Cakes! I'm Tarie, and I've been baking delicious cakes
                                for over 10 years. Every cake I make is crafted with the finest ingredients
                                and lots of love, ensuring each bite is a memorable experience.
                            </Text>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <Text fontSize="md" color="brand.muted" lineHeight="1.8">
                                From elegant wedding cakes to fun birthday cupcakes, I take pride in creating
                                beautiful desserts that not only look stunning but taste absolutely delicious.
                                Customer satisfaction is my top priority!
                            </Text>
                        </MotionBox>

                        {/* Stats */}
                        <MotionBox
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            pt={4}
                            w="full"
                        >
                            <SimpleGrid columns={3} spacing={4} w="full">
                                {stats.map((stat) => (
                                    <VStack
                                        key={stat.label}
                                        p={4}
                                        bg="brand.surface"
                                        borderRadius="16px"
                                        spacing={1}
                                    >
                                        <Icon as={stat.icon} color="brand.primary" boxSize={5} />
                                        <Text fontWeight="700" fontSize="xl" color="brand.darkText">
                                            {stat.value}
                                        </Text>
                                        <Text fontSize="xs" color="brand.muted" textAlign="center">
                                            {stat.label}
                                        </Text>
                                    </VStack>
                                ))}
                            </SimpleGrid>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <Text fontSize="md" fontWeight="600" color="brand.primary">
                                ✨ Making your celebrations sweeter since 2014
                            </Text>
                        </MotionBox>
                    </VStack>
                </SimpleGrid>
            </Container>
        </Box>
    )
}
