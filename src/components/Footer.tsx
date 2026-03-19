import { Box, Container, SimpleGrid, VStack, HStack, Heading, Text, IconButton, Link, Image } from '@chakra-ui/react'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
    return (
        <Box as="footer" bg="#0A192F" color="white" py={{ base: 12, md: 16 }}>
            <Container maxW="1400px">
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 10, md: 12 }}>
                    {/* Brand */}
                    <VStack align="start" spacing={5}>
                        <HStack spacing={3}>
                            <Image src="/tarie logo.png" h="50px" w="auto" alt="Tarie Cakes" />
                        </HStack>
                        <Text opacity={0.7} fontSize="md" lineHeight="1.8" maxW="300px">
                            Handcrafted cakes for every celebration.
                            Making your moments sweeter since 2014.
                        </Text>
                        <HStack spacing={3} pt={2}>
                            <IconButton
                                aria-label="Instagram"
                                icon={<FaInstagram />}
                                variant="ghost"
                                color="white"
                                bg="whiteAlpha.100"
                                _hover={{ bg: '#C5A059', color: 'white' }}
                                borderRadius="full"
                                as="a"
                                href="https://instagram.com"
                                target="_blank"
                            />
                            <IconButton
                                aria-label="Facebook"
                                icon={<FaFacebook />}
                                variant="ghost"
                                color="white"
                                bg="whiteAlpha.100"
                                _hover={{ bg: '#C5A059', color: 'white' }}
                                borderRadius="full"
                                as="a"
                                href="https://facebook.com"
                                target="_blank"
                            />
                            <IconButton
                                aria-label="WhatsApp"
                                icon={<FaWhatsapp />}
                                variant="ghost"
                                color="white"
                                bg="whiteAlpha.100"
                                _hover={{ bg: '#25D366', color: 'white' }}
                                borderRadius="full"
                                as="a"
                                href="https://wa.me/263771234567"
                                target="_blank"
                            />
                        </HStack>
                    </VStack>

                    {/* Quick Links */}
                    <VStack align="start" spacing={5}>
                        <Heading size="md" fontFamily="heading" fontWeight="600">
                            Quick Links
                        </Heading>
                        <VStack align="start" spacing={3}>
                            {['Home', 'Menu', 'Gallery', 'About', 'Contact'].map((link) => (
                                <Link
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    opacity={0.7}
                                    _hover={{ color: '#C5A059', opacity: 1 }}
                                    transition="all 0.2s"
                                    fontSize="md"
                                >
                                    {link}
                                </Link>
                            ))}
                        </VStack>
                    </VStack>

                    {/* Contact Info */}
                    <VStack align="start" spacing={5}>
                        <Heading size="md" fontFamily="heading" fontWeight="600">
                            Contact Us
                        </Heading>
                        <VStack align="start" spacing={3} opacity={0.7}>
                            <Text fontSize="md">Harare, Zimbabwe</Text>
                            <Text fontSize="md">+263 77 123 4567</Text>
                            <Text fontSize="md">hello@tariecakes.co.zw</Text>
                        </VStack>
                    </VStack>
                </SimpleGrid>

                <Box
                    mt={12}
                    pt={8}
                    borderTop="1px solid"
                    borderColor="whiteAlpha.100"
                    textAlign="center"
                >
                    <Text opacity={0.5} fontSize="sm">
                        © {new Date().getFullYear()} Tarie Cakes. All rights reserved.
                        Made with ❤️ in Zimbabwe
                    </Text>
                </Box>
            </Container>
        </Box>
    )
}
