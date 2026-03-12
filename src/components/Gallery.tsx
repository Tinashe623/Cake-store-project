import { Box, Container, Heading, Text, SimpleGrid, Image, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { galleryImages } from '../data/cakes'

const MotionBox = motion(Box)

export default function Gallery() {
    return (
        <Box id="gallery" py={{ base: 16, md: 20 }} bg="brand.background">
            <Container maxW="1200px">
                <VStack spacing={4} mb={12} textAlign="center">
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
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
                            Our Gallery
                        </Text>
                    </MotionBox>

                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <Heading
                            as="h2"
                            fontSize={{ base: '2xl', md: '4xl' }}
                            fontFamily="heading"
                            color="brand.darkText"
                        >
                            Cake Designs
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
                            color="brand.darkText"
                            opacity={0.7}
                            maxW="600px"
                        >
                            A showcase of our beautiful custom cake designs
                        </Text>
                    </MotionBox>
                </VStack>

                <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
                    {galleryImages.map((image, index) => (
                        <MotionBox
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Box
                                overflow="hidden"
                                borderRadius="16px"
                                boxShadow="0 10px 30px rgba(74, 55, 40, 0.1)"
                                _hover={{
                                    transform: 'scale(1.02)',
                                    boxShadow: '0 15px 40px rgba(74, 55, 40, 0.15)',
                                }}
                                transition="all 0.3s ease"
                                cursor="pointer"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    w="full"
                                    h={{ base: '150px', md: '200px' }}
                                    objectFit="cover"
                                    transition="transform 0.5s ease"
                                    _hover={{ transform: 'scale(1.1)' }}
                                />
                            </Box>
                        </MotionBox>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    )
}
