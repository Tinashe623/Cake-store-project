import { Box, Container, Heading, Text, SimpleGrid, VStack, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

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
                                borderColor="brand.accent"
                                borderRadius="24px"
                                zIndex={0}
                            />
                            <Image
                                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&h=600&fit=crop"
                                alt="Baker at work"
                                borderRadius="24px"
                                boxShadow="0 20px 60px rgba(74, 55, 40, 0.15)"
                                position="relative"
                                zIndex={1}
                            />
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
                            <Text
                                color="brand.accent"
                                fontWeight="600"
                                fontSize="sm"
                                textTransform="uppercase"
                                letterSpacing="2px"
                            >
                                About Us
                            </Text>
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
                            >
                                Handcrafted with Love
                            </Heading>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Text fontSize="md" color="brand.darkText" opacity={0.8} lineHeight="1.8">
                                Welcome to Tarie Cakes! I'm Tarie, and I've been baking delicious cakes
                                for over 10 years. Every cake I make is crafted with the finest ingredients
                                and lots of love.
                            </Text>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <Text fontSize="md" color="brand.darkText" opacity={0.8} lineHeight="1.8">
                                From elegant wedding cakes to fun birthday cupcakes, I take pride in creating
                                beautiful desserts that not only look stunning but taste absolutely delicious.
                                Customer satisfaction is my top priority!
                            </Text>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Text fontSize="md" fontWeight="600" color="brand.accent">
                                🎂 Making your celebrations sweeter since 2014
                            </Text>
                        </MotionBox>
                    </VStack>
                </SimpleGrid>
            </Container>
        </Box>
    )
}
