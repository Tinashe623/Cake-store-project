import { useState } from 'react'
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    VStack,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    HStack,
    Icon,
    useToast,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const MotionBox = motion(Box)

export default function Contact() {
    const toast = useToast()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const message = `Hello Tarie Cakes!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
        window.open(`https://wa.me/263771234567?text=${encodeURIComponent(message)}`, '_blank')
        toast({
            title: 'Message sent!',
            description: 'We\'ll get back to you soon.',
            status: 'success',
            duration: 3000,
        })
    }

    return (
        <Box id="contact" py={{ base: 16, md: 20 }} bg="#FAFAFA" position="relative" overflow="hidden">
            <Container maxW="1400px">
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
                            Contact Us
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
                            Get In Touch
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
                            Have a question or want to place an order? We'd love to hear from you!
                        </Text>
                    </MotionBox>
                </VStack>

                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
                    {/* Contact Info */}
                    <VStack align="start" spacing={8}>
                        <MotionBox
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <VStack align="start" spacing={6}>
                                <HStack spacing={4}>
                                    <Box
                                        w="50px"
                                        h="50px"
                                        borderRadius="full"
                                        bg="brand.primary"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Icon as={FaPhone} color="brand.darkText" />
                                    </Box>
                                    <VStack align="start" spacing={0}>
                                        <Text fontWeight="600" color="brand.darkText">Phone</Text>
                                        <Text color="brand.darkText" opacity={0.7}>+263 77 123 4567</Text>
                                    </VStack>
                                </HStack>

                                <HStack spacing={4}>
                                    <Box
                                        w="50px"
                                        h="50px"
                                        borderRadius="full"
                                        bg="brand.primary"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Icon as={FaEnvelope} color="brand.darkText" />
                                    </Box>
                                    <VStack align="start" spacing={0}>
                                        <Text fontWeight="600" color="brand.darkText">Email</Text>
                                        <Text color="brand.darkText" opacity={0.7}>hello@tariecakes.co.zw</Text>
                                    </VStack>
                                </HStack>

                                <HStack spacing={4}>
                                    <Box
                                        w="50px"
                                        h="50px"
                                        borderRadius="full"
                                        bg="brand.primary"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Icon as={FaMapMarkerAlt} color="brand.darkText" />
                                    </Box>
                                    <VStack align="start" spacing={0}>
                                        <Text fontWeight="600" color="brand.darkText">Location</Text>
                                        <Text color="brand.darkText" opacity={0.7}>Harare, Zimbabwe</Text>
                                    </VStack>
                                </HStack>
                            </VStack>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Button
                                size="lg"
                                bg="brand.accent"
                                color="brand.darkText"
                                leftIcon={<FaWhatsapp />}
                                _hover={{
                                    bg: 'brand.accentHover',
                                    transform: 'translateY(-2px)',
                                }}
                                transition="all 0.3s ease"
                                as="a"
                                href="https://wa.me/263771234567"
                                target="_blank"
                            >
                                Chat on WhatsApp
                            </Button>
                        </MotionBox>
                    </VStack>

                    {/* Contact Form */}
                    <MotionBox
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Box
                            as="form"
                            onSubmit={handleSubmit}
                            bg="brand.cardBg"
                            p={8}
                            borderRadius="24px"
                            boxShadow="0 10px 40px rgba(74, 55, 40, 0.1)"
                        >
                            <VStack spacing={5}>
                                <FormControl isRequired>
                                    <FormLabel color="brand.darkText">Name</FormLabel>
                                    <Input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        bg="brand.background"
                                        border="2px solid"
                                        borderColor="brand.primary"
                                        _focus={{
                                            borderColor: 'brand.accent',
                                            boxShadow: '0 0 0 1px #C5A059',
                                        }}
                                    />
                                </FormControl>

                                <FormControl isRequired>
                                    <Input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        bg="brand.background"
                                        border="2px solid"
                                        borderColor="brand.primary"
                                        _focus={{
                                            borderColor: 'brand.accent',
                                            boxShadow: '0 0 0 1px #C5A059',
                                        }}
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel color="brand.darkText">Phone</FormLabel>
                                    <Input
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+263 77 123 4567"
                                        bg="brand.background"
                                        border="2px solid"
                                        borderColor="brand.primary"
                                        _focus={{
                                            borderColor: 'brand.accent',
                                            boxShadow: '0 0 0 1px #C5A059',
                                        }}
                                    />
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel color="brand.darkText">Message</FormLabel>
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your order or inquiry..."
                                        rows={4}
                                        bg="brand.background"
                                        border="2px solid"
                                        borderColor="brand.primary"
                                        _focus={{
                                            borderColor: 'brand.accent',
                                            boxShadow: '0 0 0 1px #C5A059',
                                        }}
                                    />
                                </FormControl>

                                <Button
                                    type="submit"
                                    size="lg"
                                    w="full"
                                    bg="brand.accent"
                                    color="brand.darkText"
                                    _hover={{
                                        bg: 'brand.accentHover',
                                        transform: 'translateY(-2px)',
                                    }}
                                    transition="all 0.3s ease"
                                >
                                    Send Message
                                </Button>
                            </VStack>
                        </Box>
                    </MotionBox>
                </SimpleGrid>
            </Container>
        </Box>
    )
}
