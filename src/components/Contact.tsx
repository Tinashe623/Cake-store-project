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
    FormErrorMessage,
    Input,
    Textarea,
    Button,
    HStack,
    Icon,
    useToast,
    Flex,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaBolt } from 'react-icons/fa'
import { getWhatsAppUrl } from '../config/constants'
import { keyframes } from '@emotion/react'

const pulseGlow = keyframes`
    0% { box-shadow: 0 0 20px rgba(37, 211, 102, 0.3), 0 0 40px rgba(37, 211, 102, 0.1); }
    50% { box-shadow: 0 0 30px rgba(37, 211, 102, 0.5), 0 0 60px rgba(37, 211, 102, 0.2); }
    100% { box-shadow: 0 0 20px rgba(37, 211, 102, 0.3), 0 0 40px rgba(37, 211, 102, 0.1); }
`

const MotionBox = motion(Box)

export default function Contact() {
    const toast = useToast()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [touched, setTouched] = useState<Record<string, boolean>>({})

    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const validatePhone = (phone: string) => !phone || /^[\+]?[\d\s\-\(\)]{7,}$/.test(phone)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))

        if (touched[name]) {
            const newErrors = { ...errors }
            if (name === 'email' && !validateEmail(value)) {
                newErrors.email = 'Please enter a valid email address'
            } else if (name === 'phone' && !validatePhone(value)) {
                newErrors.phone = 'Please enter a valid phone number'
            } else if (name === 'name' && value.trim().length < 2) {
                newErrors.name = 'Name must be at least 2 characters'
            } else {
                delete newErrors[name]
            }
            setErrors(newErrors)
        }
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setTouched(prev => ({ ...prev, [name]: true }))

        const newErrors = { ...errors }
        if (name === 'email' && !validateEmail(value)) {
            newErrors.email = 'Please enter a valid email address'
        } else if (name === 'phone' && value && !validatePhone(value)) {
            newErrors.phone = 'Please enter a valid phone number'
        } else if (name === 'name' && value.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters'
        } else {
            delete newErrors[name]
        }
        setErrors(newErrors)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const newErrors: Record<string, string> = {}
        if (!formData.name.trim() || formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters'
        }
        if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address'
        }
        if (formData.phone && !validatePhone(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number'
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Please enter a message'
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            setTouched({ name: true, email: true, phone: true, message: true })
            return
        }

        const message = `Hello Tarie Cakes!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
        window.open(getWhatsAppUrl(message), '_blank')
        toast({
            title: 'Message ready to send!',
            description: 'Opening WhatsApp...',
            status: 'success',
            duration: 3000,
        })
    }

    const contactCards = [
        { icon: FaPhone, bg: 'brand.primaryLight', label: 'Phone', value: '+263 77 123 4567' },
        { icon: FaEnvelope, bg: 'brand.accent', label: 'Email', value: 'hello@tariecakes.co.zw' },
        { icon: FaMapMarkerAlt, bg: 'brand.primary', label: 'Location', value: 'Mutare, Zimbabwe' },
    ]

    return (
        <Box id="contact" py={{ base: 16, md: 32 }} bg="white" position="relative" overflow="hidden">
            {/* Gradient transition from About */}
            <Box
                position="absolute"
                top="-80px"
                left={0}
                w="full"
                h="120px"
                bgGradient="linear(to-b, brand.primary, white)"
                zIndex={1}
            />

            {/* Ambient glow orbs */}
            <Box
                position="absolute"
                bottom="-10%"
                left="-5%"
                w="500px"
                h="500px"
                borderRadius="full"
                bg="brand.accent"
                opacity={0.08}
                filter="blur(120px)"
            />
            <Box
                position="absolute"
                top="-10%"
                right="-10%"
                w="600px"
                h="600px"
                borderRadius="full"
                bg="brand.accent"
                opacity={0.06}
                filter="blur(140px)"
            />
            <Box
                position="absolute"
                top="30%"
                left="50%"
                w="300px"
                h="300px"
                borderRadius="full"
                bg="brand.primaryLight"
                opacity={0.04}
                filter="blur(100px)"
            />

            {/* Subtle grid pattern overlay */}
            <Box
                position="absolute"
                top={0}
                left={0}
                w="full"
                h="full"
                opacity={0.03}
                backgroundImage="radial-gradient(rgba(45,10,10,0.15) 1px, transparent 1px)"
                backgroundSize="30px 30px"
                zIndex={0}
            />

            <Container maxW="1200px" position="relative" zIndex={2}>
                {/* Section Header */}
                <VStack spacing={4} mb={{ base: 12, md: 16 }} textAlign="center">
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Box
                            display="inline-flex"
                            alignItems="center"
                            gap={3}
                            bg="rgba(201, 169, 110, 0.08)"
                            px={5}
                            py={2.5}
                            borderRadius="full"
                            border="1px solid rgba(201, 169, 110, 0.2)"
                        >
                            <Box w="6px" h="6px" borderRadius="full" bg="brand.accent" />
                            <Text
                                color="brand.accent"
                                fontWeight="700"
                                fontSize="xs"
                                textTransform="uppercase"
                                letterSpacing="3px"
                            >
                                Get In Touch
                            </Text>
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
                            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                            fontFamily="heading"
                            color="brand.darkText"
                            fontWeight="800"
                            letterSpacing="-0.02em"
                            lineHeight="1.1"
                        >
                            Let's Talk About{' '}
                            <Text as="span" color="brand.accent">Your Cake</Text>
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
                            color="brand.muted"
                            maxW="600px"
                            mx="auto"
                            lineHeight="1.8"
                        >
                            Whether it's a birthday, wedding, or just a sweet craving — we'd love to hear from you.
                        </Text>
                    </MotionBox>
                </VStack>

                <Flex direction={{ base: 'column', lg: 'row' }} gap={{ base: 10, lg: 12 }} alignItems="stretch">
                    {/* Left Column - Contact Info + WhatsApp CTA */}
                    <VStack align="start" spacing={8} w={{ base: 'full', lg: '38%' }}>
                        {/* Contact Cards */}
                        <MotionBox
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            w="full"
                        >
                            <VStack align="start" spacing={4} w="full">
                                {contactCards.map((card, idx) => (
                                    <MotionBox
                                        key={idx}
                                        w="full"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    >
                                        <HStack
                                            spacing={4}
                                            w="full"
                                            p={5}
                                            bg="white"
                                            backdropFilter="blur(12px)"
                                            borderRadius="20px"
                                            border="1px solid"
                                            borderColor="brand.border"
                                            boxShadow="0 2px 12px rgba(45, 10, 10, 0.06)"
                                            _hover={{
                                                borderColor: 'brand.accent',
                                                boxShadow: '0 8px 24px rgba(201, 169, 110, 0.15)',
                                                transform: 'translateX(8px)',
                                            }}
                                            transition="all 0.3s ease"
                                            cursor="pointer"
                                        >
                                            <Box
                                                w="48px"
                                                h="48px"
                                                borderRadius="14px"
                                                bg={card.bg}
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                                flexShrink={0}
                                            >
                                                <Icon as={card.icon} color="white" boxSize={4} />
                                            </Box>
                                            <VStack align="start" spacing={0}>
                                                <Text fontWeight="700" color="brand.darkText" fontSize="sm" letterSpacing="0.5px">{card.label}</Text>
                                                <Text color="brand.muted" fontSize="sm" fontWeight="500">{card.value}</Text>
                                            </VStack>
                                        </HStack>
                                    </MotionBox>
                                ))}
                            </VStack>
                        </MotionBox>

                        {/* Urgent WhatsApp CTA - Glassmorphism Card */}
                        <MotionBox
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            w="full"
                        >
                            <Box
                                p={{ base: 6, md: 8 }}
                                bg="rgba(37, 211, 102, 0.04)"
                                backdropFilter="blur(20px)"
                                borderRadius="24px"
                                border="1px solid rgba(37, 211, 102, 0.12)"
                                position="relative"
                                overflow="hidden"
                            >
                                {/* Glow accent */}
                                <Box
                                    position="absolute"
                                    top="-30px"
                                    right="-30px"
                                    w="120px"
                                    h="120px"
                                    bg="#25D366"
                                    borderRadius="full"
                                    opacity={0.12}
                                    filter="blur(40px)"
                                />
                                <Box
                                    position="absolute"
                                    bottom="-20px"
                                    left="-20px"
                                    w="80px"
                                    h="80px"
                                    bg="#25D366"
                                    borderRadius="full"
                                    opacity={0.08}
                                    filter="blur(30px)"
                                />

                                <VStack align="start" spacing={5} position="relative" zIndex={1}>
                                    <HStack spacing={3}>
                                        <Box
                                            w="36px"
                                            h="36px"
                                            borderRadius="10px"
                                            bg="rgba(37, 211, 102, 0.15)"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Icon as={FaBolt} color="#25D366" boxSize={4} />
                                        </Box>
                                        <Heading size="md" fontWeight="800" color="brand.darkText" letterSpacing="-0.01em">
                                            Need it{' '}
                                            <Text as="span" bgGradient="linear(to-r, #25D366, #20BD59)" bgClip="text">fast</Text>?
                                        </Heading>
                                    </HStack>

                                    <Text
                                        fontSize="sm"
                                        color="brand.muted"
                                        lineHeight="1.7"
                                        fontWeight="500"
                                    >
                                        For urgent orders, reach us directly on{' '}
                                        <Text as="span" color="#25D366" fontWeight="700">WhatsApp</Text>{' '}
                                        for an immediate response.
                                    </Text>

                                    <Button
                                        w="full"
                                        size="lg"
                                        h="56px"
                                        bgGradient="linear(135deg, #25D366, #20BD59)"
                                        color="white"
                                        leftIcon={<FaWhatsapp size={22} />}
                                        _hover={{
                                            bgGradient: "linear(135deg, #2BE06E, #25D366)",
                                            transform: 'translateY(-3px)',
                                            boxShadow: '0 15px 30px -5px rgba(37, 211, 102, 0.4)',
                                        }}
                                        _active={{
                                            transform: 'translateY(0)',
                                        }}
                                        as="a"
                                        href={getWhatsAppUrl('Hello Tarie Cakes! I need help with an urgent order.')}
                                        target="_blank"
                                        borderRadius="16px"
                                        fontWeight="700"
                                        fontSize="md"
                                        letterSpacing="0.5px"
                                        transition="all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                                        animation={`${pulseGlow} 3s ease-in-out infinite`}
                                        border="none"
                                    >
                                        Chat on WhatsApp
                                    </Button>
                                </VStack>
                            </Box>
                        </MotionBox>
                    </VStack>

                    {/* Right Column - Contact Form */}
                    <MotionBox
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        w={{ base: 'full', lg: '62%' }}
                    >
                        <Box
                            as="form"
                            onSubmit={handleSubmit}
                            bg="white"
                            backdropFilter="blur(24px)"
                            p={{ base: 6, md: 10 }}
                            borderRadius="28px"
                            border="1px solid"
                            borderColor="brand.border"
                            boxShadow="0 4px 24px rgba(45, 10, 10, 0.06)"
                            position="relative"
                            overflow="hidden"
                        >
                            {/* Form glow accent */}
                            <Box
                                position="absolute"
                                top="-50px"
                                right="-50px"
                                w="200px"
                                h="200px"
                                bg="brand.accent"
                                borderRadius="full"
                                opacity={0.04}
                                filter="blur(60px)"
                            />

                            <VStack spacing={6} position="relative" zIndex={1}>
                                <Box w="full" mb={2}>
                                    <Heading size="lg" color="brand.darkText" fontWeight="800" letterSpacing="-0.01em">
                                        Send us an Inquiry
                                    </Heading>
                                    <Text color="brand.muted" fontSize="sm" mt={2}>
                                        Fill out the form and we'll get back to you shortly.
                                    </Text>
                                </Box>

                                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} w="full">
                                    <FormControl isRequired isInvalid={!!errors.name && touched.name}>
                                        <FormLabel color="brand.muted" fontWeight="600" fontSize="sm" mb={2}>Your Name</FormLabel>
                                        <Input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Jane Doe"
                                            bg="brand.surface"
                                            border="1px solid"
                                            borderColor={errors.name && touched.name ? 'rgba(229, 115, 115, 0.5)' : 'brand.border'}
                                            color="brand.darkText"
                                            h="54px"
                                            borderRadius="14px"
                                            _placeholder={{ color: 'brand.muted' }}
                                            _focus={{ borderColor: 'brand.accent', boxShadow: '0 0 0 2px rgba(201, 169, 110, 0.2)', bg: 'white' }}
                                        />
                                        <FormErrorMessage fontSize="xs">{errors.name}</FormErrorMessage>
                                    </FormControl>

                                    <FormControl isRequired isInvalid={!!errors.email && touched.email}>
                                        <FormLabel color="brand.muted" fontWeight="600" fontSize="sm" mb={2}>Email Address</FormLabel>
                                        <Input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="jane@example.com"
                                            bg="brand.surface"
                                            border="1px solid"
                                            borderColor={errors.email && touched.email ? 'rgba(229, 115, 115, 0.5)' : 'brand.border'}
                                            color="brand.darkText"
                                            h="54px"
                                            borderRadius="14px"
                                            _placeholder={{ color: 'brand.muted' }}
                                            _focus={{ borderColor: 'brand.accent', boxShadow: '0 0 0 2px rgba(201, 169, 110, 0.2)', bg: 'white' }}
                                        />
                                        <FormErrorMessage fontSize="xs">{errors.email}</FormErrorMessage>
                                    </FormControl>
                                </SimpleGrid>

                                <FormControl isInvalid={!!errors.phone && touched.phone}>
                                    <FormLabel color="brand.muted" fontWeight="600" fontSize="sm" mb={2}>Phone Number</FormLabel>
                                    <Input
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="+263 77 123 4567"
                                        bg="brand.surface"
                                        border="1px solid"
                                        borderColor={errors.phone && touched.phone ? 'rgba(229, 115, 115, 0.5)' : 'brand.border'}
                                        color="brand.darkText"
                                        h="54px"
                                        borderRadius="14px"
                                        _placeholder={{ color: 'brand.muted' }}
                                        _focus={{ borderColor: 'brand.accent', boxShadow: '0 0 0 2px rgba(201, 169, 110, 0.2)', bg: 'white' }}
                                    />
                                    <FormErrorMessage fontSize="xs">{errors.phone}</FormErrorMessage>
                                </FormControl>

                                <FormControl isRequired isInvalid={!!errors.message && touched.message}>
                                    <FormLabel color="brand.muted" fontWeight="600" fontSize="sm" mb={2}>Your Message / Order Details</FormLabel>
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="I'd like to order a 2-tier wedding cake..."
                                        rows={5}
                                        bg="brand.surface"
                                        border="1px solid"
                                        borderColor={errors.message && touched.message ? 'rgba(229, 115, 115, 0.5)' : 'brand.border'}
                                        color="brand.darkText"
                                        borderRadius="16px"
                                        p={4}
                                        _placeholder={{ color: 'brand.muted' }}
                                        _focus={{ borderColor: 'brand.accent', boxShadow: '0 0 0 2px rgba(201, 169, 110, 0.2)', bg: 'white' }}
                                    />
                                    <FormErrorMessage fontSize="xs">{errors.message}</FormErrorMessage>
                                </FormControl>

                                <Button
                                    type="submit"
                                    size="lg"
                                    w="full"
                                    h="58px"
                                    bg="brand.accent"
                                    color="brand.primary"
                                    rightIcon={<FaPaperPlane />}
                                    _hover={{
                                        bg: '#D4B87A',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 15px 30px -5px rgba(201, 169, 110, 0.4)',
                                    }}
                                    _active={{
                                        transform: 'translateY(0)',
                                    }}
                                    borderRadius="16px"
                                    fontWeight="800"
                                    fontSize="md"
                                    letterSpacing="0.5px"
                                    transition="all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                                    mt={2}
                                >
                                    Send Inquiry via WhatsApp
                                </Button>
                            </VStack>
                        </Box>
                    </MotionBox>
                </Flex>
            </Container>
        </Box>
    )
}
