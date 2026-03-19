import { Box, Container, Heading, Text, SimpleGrid, Image, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { galleryImages } from '../data/cakes'

const MotionBox = motion(Box)

export default function Gallery() {
    return (
        <Box id="gallery" py={{ base: 16, md: 20 }} bg="#FAFAFA" position="relative" overflow="hidden">
            {/* Background decoration */}
            <Box
                position="absolute"
                top="10%"
                right="-100px"
                w="300px"
                h="300px"
                borderRadius="full"
                bg="#C5A059"
                opacity={0.04}
                filter="blur(80px)"
            />

            <Container maxW="1400px" position="relative" zIndex={1}>
                <VStack spacing={4} mb={{ base: 10, md: 14 }} textAlign="center">
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Box
                            display="inline-flex"
                            alignItems="center"
                            gap={2}
                            bg="#0A192F"
                            px={5}
                            py={2.5}
                            borderRadius="full"
                            boxShadow="0 4px 20px rgba(0,0,0,0.05)"
                        >
                            <Box w="8px" h="8px" borderRadius="full" bg="#C5A059" />
                            <Text
                                color="#C5A059"
                                fontWeight="600"
                                fontSize="sm"
                                textTransform="uppercase"
                                letterSpacing="2px"
                            >
                                Our Gallery
                            </Text>
                            <Box w="8px" h="8px" borderRadius="full" bg="#C5A059" />
                        </Box>
                    </MotionBox>

                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <Heading
                            as="h2"
                            fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
                            fontFamily="heading"
                            color="gray.800"
                            fontWeight="700"
                        >
                            Our Beautiful{' '}
                            <Text as="span" color="#C5A059">
                                Creations
                            </Text>
                        </Heading>
                    </MotionBox>

                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Text
                            fontSize={{ base: 'md', md: 'lg' }}
                            color="gray.500"
                            maxW="500px"
                            lineHeight="1.8"
                        >
                            A showcase of our stunning custom cake designs
                        </Text>
                    </MotionBox>
                </VStack>

                <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
                    {galleryImages.map((image, index) => (
                        <MotionBox
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <Box
                                overflow="hidden"
                                borderRadius="20px"
                                boxShadow="0 4px 20px rgba(0, 0, 0, 0.06)"
                                _hover={{
                                    transform: 'scale(1.03)',
                                    boxShadow: '0 20px 40px rgba(197, 160, 89, 0.15)',
                                }}
                                transition="all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                                cursor="pointer"
                                role="group"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    w="full"
                                    h={{ base: '140px', md: '180px', lg: '200px' }}
                                    objectFit="cover"
                                    transition="transform 0.6s ease"
                                    _groupHover={{ transform: 'scale(1.1)' }}
                                />
                            </Box>
                        </MotionBox>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    )
}
