import { Box, Container, SimpleGrid, VStack, HStack, Heading, Text, IconButton, Link, Input, Button, InputGroup, InputRightElement, useToast } from '@chakra-ui/react'
import { FaInstagram, FaFacebook, FaWhatsapp, FaPaperPlane } from 'react-icons/fa'
import { useState } from 'react'
import { getWhatsAppUrl } from '../config/constants'
import Logo from './Logo'

export default function Footer() {
    const [email, setEmail] = useState('')
    const toast = useToast()

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        setEmail('')
        toast({
            title: 'Subscribed!',
            description: 'Thank you for joining our newsletter.',
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
    }

    return (
        <Box as="footer" bg="brand.primary" color="white" pt={{ base: 16, md: 24 }} pb={8} position="relative" overflow="hidden">
            {/* Background Texture */}
            <Box position="absolute" top={0} left={0} w="full" h="full" opacity={0.03} bgImage="url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" />
            
            <Container maxW="1400px" position="relative" zIndex={1}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 12, md: 10 }}>
                    {/* Brand & Social */}
                    <VStack align="start" spacing={6}>
                        <Logo height={50} colorScheme="light" />
                        <Text color="whiteAlpha.800" fontSize="md" lineHeight="1.8" maxW="300px">
                            Handcrafted luxury cakes for your most extraordinary moments. Mutare, Zimbabwe
                        </Text>
                        <HStack spacing={4} pt={2}>
                            <IconButton
                                aria-label="Instagram"
                                icon={<FaInstagram size={20} />}
                                variant="ghost"
                                color="white"
                                bg="whiteAlpha.100"
                                _hover={{ bg: 'brand.accent', color: 'brand.primary', transform: 'translateY(-2px)' }}
                                borderRadius="12px"
                                w="44px"
                                h="44px"
                                as="a"
                                href="https://instagram.com"
                                target="_blank"
                            />
                            <IconButton
                                aria-label="Facebook"
                                icon={<FaFacebook size={20} />}
                                variant="ghost"
                                color="white"
                                bg="whiteAlpha.100"
                                _hover={{ bg: 'brand.accent', color: 'brand.primary', transform: 'translateY(-2px)' }}
                                borderRadius="12px"
                                w="44px"
                                h="44px"
                                as="a"
                                href="https://facebook.com"
                                target="_blank"
                            />
                            <IconButton
                                aria-label="WhatsApp"
                                icon={<FaWhatsapp size={20} />}
                                variant="ghost"
                                color="white"
                                bg="whiteAlpha.100"
                                _hover={{ bg: '#25D366', color: 'white', transform: 'translateY(-2px)' }}
                                borderRadius="12px"
                                w="44px"
                                h="44px"
                                as="a"
                                href={getWhatsAppUrl('Hello Tarie Cakes!')}
                                target="_blank"
                            />
                        </HStack>
                    </VStack>

                    {/* Quick Links */}
                    <VStack align="start" spacing={6}>
                        <Heading size="md" fontFamily="heading" fontWeight="700" color="brand.accent">
                            Explore
                        </Heading>
                        <VStack align="start" spacing={4}>
                            {['Home', 'Menu', 'Gallery', 'About', 'Contact'].map((link) => (
                                <Link
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    color="rgba(245, 230, 211, 0.7)"
                                    _hover={{ color: 'brand.accent', pl: 1 }}
                                    transition="all 0.3s ease"
                                    fontSize="md"
                                    fontWeight="500"
                                >
                                    {link}
                                </Link>
                            ))}
                        </VStack>
                    </VStack>

                    {/* Contact Info */}
                    <VStack align="start" spacing={6}>
                        <Heading size="md" fontFamily="heading" fontWeight="700" color="brand.accent">
                            Get in Touch
                        </Heading>
                        <VStack align="start" spacing={4} color="whiteAlpha.800" fontWeight="500">
                            <Text color="whiteAlpha.800">Mutare, Zimbabwe</Text>
                            <Text color="whiteAlpha.800">+263 78 582 6233</Text>
                            <Text color="whiteAlpha.800">hello@tariecakes.co.zw</Text>
                            <Text pt={2} color="brand.accent" fontWeight="700">Open Mon-Sat: 8am - 6pm</Text>
                        </VStack>
                    </VStack>

                    {/* Newsletter Signup */}
                    <VStack align="start" spacing={6}>
                        <Heading size="md" fontFamily="heading" fontWeight="700" color="brand.accent">
                            Join Our Newsletter
                        </Heading>
                        <Text color="whiteAlpha.700" fontSize="sm" lineHeight="1.6">
                            Subscribe to receive sweet updates, exclusive offers, and baking tips directly in your inbox.
                        </Text>
                        <Box as="form" onSubmit={handleSubscribe} w="full" pt={2}>
                            <InputGroup size="lg">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    bg="whiteAlpha.100"
                                    border="1px solid"
                                    borderColor="whiteAlpha.200"
                                    color="white"
                                    _placeholder={{ color: 'whiteAlpha.400', fontSize: 'sm' }}
                                    borderRadius="16px"
                                    _focus={{ borderColor: 'brand.accent', boxShadow: 'none', bg: 'whiteAlpha.200' }}
                                    required
                                />
                                <InputRightElement w="auto" p={1}>
                                    <Button
                                        type="submit"
                                        size="md"
                                        bg="brand.accent"
                                        color="brand.primary"
                                        borderRadius="12px"
                                        _hover={{ bg: 'brand.accentHover' }}
                                        px={4}
                                    >
                                        <FaPaperPlane />
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                    </VStack>
                </SimpleGrid>

                {/* Bottom Bar */}
                <Box
                    mt={16}
                    pt={8}
                    borderTop="1px solid"
                    borderColor="whiteAlpha.100"
                    display="flex"
                    flexDirection={{ base: 'column', md: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                    gap={4}
                >
                    <Text color="whiteAlpha.600" fontSize="sm" fontWeight="500">
                        © {new Date().getFullYear()} Tarie Cakes. All rights reserved.
                    </Text>
                    <HStack spacing={6}>
                        <Link fontSize="sm" color="whiteAlpha.600" _hover={{ color: 'brand.accent' }}>Privacy Policy</Link>
                        <Link fontSize="sm" color="whiteAlpha.600" _hover={{ color: 'brand.accent' }}>Terms of Service</Link>
                    </HStack>
                </Box>

                {/* Developer Credit */}
                <Box
                    mt={8}
                    pt={6}
                    borderTop="1px solid"
                    borderColor="whiteAlpha.100"
                    textAlign="center"
                >
                    <Text color="whiteAlpha.400" fontSize="xs" fontWeight="500" letterSpacing="0.5px">
                        Designed & Developed by{' '}
                        <Link
                            href="https://tinashe-mundieta.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="whiteAlpha.500"
                            fontWeight="600"
                            _hover={{ color: 'brand.accent', textDecoration: 'underline' }}
                            transition="all 0.3s ease"
                        >
                            Tinashe Mundieta
                        </Link>
                    </Text>
                </Box>
            </Container>
        </Box>
    )
}
