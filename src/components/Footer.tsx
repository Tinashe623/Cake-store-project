import { Box, Container, SimpleGrid, VStack, HStack, Heading, Text, IconButton, Link } from '@chakra-ui/react'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
    return (
        <Box as="footer" bg="brand.darkText" color="brand.lightText" py={12}>
            <Container maxW="1200px">
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                    {/* Brand */}
                    <VStack align="start" spacing={4}>
                        <HStack spacing={2}>
                            <Text fontSize="2xl">🎂</Text>
                            <Heading size="md" fontFamily="heading">
                                Tarie Cakes
                            </Heading>
                        </HStack>
                        <Text opacity={0.8} fontSize="sm">
                            Handcrafted cakes for every celebration.
                            Making your moments sweeter since 2014.
                        </Text>
                        <HStack spacing={2}>
                            <IconButton
                                aria-label="Instagram"
                                icon={<FaInstagram />}
                                variant="ghost"
                                color="brand.lightText"
                                _hover={{ bg: 'brand.accent', color: 'brand.darkText' }}
                                as="a"
                                href="https://instagram.com"
                                target="_blank"
                            />
                            <IconButton
                                aria-label="Facebook"
                                icon={<FaFacebook />}
                                variant="ghost"
                                color="brand.lightText"
                                _hover={{ bg: 'brand.accent', color: 'brand.darkText' }}
                                as="a"
                                href="https://facebook.com"
                                target="_blank"
                            />
                            <IconButton
                                aria-label="WhatsApp"
                                icon={<FaWhatsapp />}
                                variant="ghost"
                                color="brand.lightText"
                                _hover={{ bg: 'brand.accent', color: 'brand.darkText' }}
                                as="a"
                                href="https://wa.me/263771234567"
                                target="_blank"
                            />
                        </HStack>
                    </VStack>

                    {/* Quick Links */}
                    <VStack align="start" spacing={4}>
                        <Heading size="sm" fontFamily="heading">
                            Quick Links
                        </Heading>
                        <VStack align="start" spacing={2}>
                            <Link href="#home" _hover={{ color: 'brand.accent' }}>Home</Link>
                            <Link href="#menu" _hover={{ color: 'brand.accent' }}>Menu</Link>
                            <Link href="#gallery" _hover={{ color: 'brand.accent' }}>Gallery</Link>
                            <Link href="#about" _hover={{ color: 'brand.accent' }}>About</Link>
                            <Link href="#contact" _hover={{ color: 'brand.accent' }}>Contact</Link>
                        </VStack>
                    </VStack>

                    {/* Contact Info */}
                    <VStack align="start" spacing={4}>
                        <Heading size="sm" fontFamily="heading">
                            Contact
                        </Heading>
                        <VStack align="start" spacing={2} opacity={0.8}>
                            <Text>Harare, Zimbabwe</Text>
                            <Text>+263 77 123 4567</Text>
                            <Text>hello@tariecakes.co.zw</Text>
                        </VStack>
                    </VStack>
                </SimpleGrid>

                <Box
                    mt={10}
                    pt={6}
                    borderTop="1px solid"
                    borderColor="whiteAlpha.200"
                    textAlign="center"
                >
                    <Text opacity={0.6} fontSize="sm">
                        © {new Date().getFullYear()} Tarie Cakes. All rights reserved.
                        Made with ❤️ in Zimbabwe
                    </Text>
                </Box>
            </Container>
        </Box>
    )
}
