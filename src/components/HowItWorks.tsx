import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiShoppingBag, FiTruck, FiHeart } from 'react-icons/fi'
import { useIsMobile, usePrefersReducedMotion } from '../hooks/useResponsive'

const MotionBox = motion(Box)

const steps = [
    {
        icon: FiHeart,
        title: 'Choose Your Design',
        description: "Browse our artisan collection or request a bespoke design.",
        color: '#F5E6D3', // brand.secondary
        delay: 0.1,
    },
    {
        icon: FiShoppingBag,
        title: 'Place Order',
        description: "Secure your date with a quick WhatsApp message or direct checkout.",
        color: '#C9A96E', // brand.accent
        delay: 0.3,
    },
    {
        icon: FiTruck,
        title: 'White Glove Delivery',
        description: "We handle the transport and setup so you can simply enjoy.",
        color: '#4A1A1A', // brand.primaryLight
        delay: 0.5,
    },
]

const SPARKLE_DATA = [
    { top: '15%', left: '20%', fontSize: 'sm', dx: -8, duration: 7, delay: 0 },
    { top: '70%', left: '65%', fontSize: 'md', dx: 12, duration: 9, delay: 0.5 },
    { top: '35%', left: '45%', fontSize: 'lg', dx: -5, duration: 6, delay: 1 },
    { top: '80%', left: '30%', fontSize: 'sm', dx: 10, duration: 8, delay: 1.5 },
    { top: '50%', left: '80%', fontSize: 'md', dx: -12, duration: 10, delay: 0.3 },
    { top: '25%', left: '70%', fontSize: 'lg', dx: 6, duration: 7, delay: 2 },
]

export default function HowItWorks() {
    const disableHeavy = useIsMobile() || usePrefersReducedMotion()

    return (
        <Box py={{ base: 14, md: 32 }} bg="brand.background" position="relative" overflow="hidden">
            {/* Smooth gradient transition from previous section */}
            <Box
                position="absolute"
                top="-80px"
                left={0}
                w="full"
                h="120px"
                bgGradient="linear(to-b, brand.background, brand.background)"
                zIndex={1}
            />
            {/* Background elements */}
            <Box position="absolute" top={0} left={0} right={0} bottom={0} overflow="hidden">
                <Box
                    position="absolute"
                    top="-10%"
                    left="-5%"
                    w="40vw"
                    h="40vw"
                    borderRadius="full"
                    bg="brand.secondaryLight"
                    opacity={{ base: 0.08, md: 0.15 }}
                    filter={{ base: 'blur(60px)', md: 'blur(120px)' }}
                    animation={disableHeavy ? undefined : "pulseFade 8s infinite alternate"}
                />
                <Box
                    position="absolute"
                    bottom="-10%"
                    right="-10%"
                    w="50vw"
                    h="50vw"
                    borderRadius="full"
                    bg="brand.accent"
                    opacity={{ base: 0.05, md: 0.1 }}
                    filter={{ base: 'blur(80px)', md: 'blur(150px)' }}
                    animation={disableHeavy ? undefined : "pulseFade 6s infinite alternate-reverse"}
                />

                {/* Floating Sparkles — desktop only */}
                {!disableHeavy && SPARKLE_DATA.map((s, i) => (
                    <MotionBox
                        key={`sparkle-${i}`}
                        position="absolute"
                        top={s.top}
                        left={s.left}
                        fontSize={s.fontSize}
                        color={i % 2 === 0 ? 'brand.accent' : 'brand.secondary'}
                        opacity={0.4}
                        animate={{
                            y: [0, -20, 0],
                            x: [0, s.dx, 0],
                            rotate: [0, 180, 360],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: s.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: s.delay,
                        }}
                        zIndex={1}
                    >
                        ✨
                    </MotionBox>
                ))}
            </Box>

            <Container maxW="1400px" position="relative" zIndex={2}>
                <Flex
                    direction={{ base: 'column', lg: 'row' }}
                    align="center"
                    justify="space-between"
                    gap={{ base: 12, lg: 16 }}
                >
                    {/* Text Column */}
                    <VStack
                        spacing={6}
                        align={{ base: 'center', lg: 'flex-start' }}
                        textAlign={{ base: 'center', lg: 'left' }}
                        w={{ base: 'full', lg: '40%' }}
                    >
                        <MotionBox
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Box
                                display="inline-flex"
                                alignItems="center"
                                gap={3}
                                bg="brand.surface"
                                px={5}
                                py={2.5}
                                borderRadius="full"
                                boxShadow="sm"
                            >
                                <Box w="6px" h="6px" borderRadius="full" bg="brand.accent" />
                                <Text
                                    color="brand.primary"
                                    fontWeight="700"
                                    fontSize="xs"
                                    textTransform="uppercase"
                                    letterSpacing="2px"
                                >
                                    Simple Process
                                </Text>
                            </Box>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            <Heading
                                as="h2"
                                fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                                fontFamily="heading"
                                color="brand.primary"
                                fontWeight="800"
                                lineHeight="1.1"
                                letterSpacing="-0.02em"
                            >
                                Seamless from <br />
                                <Text as="span" className="text-gradient">Oven to Table</Text>
                            </Heading>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Text
                                fontSize={{ base: 'md', md: 'lg' }}
                                color="brand.muted"
                                maxW="480px"
                                lineHeight="1.8"
                            >
                                We've redefined the custom cake experience. Enjoy a stress-free process designed to let you focus on what truly matters—celebrating your special day.
                            </Text>
                        </MotionBox>
                    </VStack>

                    {/* Cards Column */}
                    <Box w={{ base: 'full', lg: '60%' }} position="relative">
                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} pt={{ base: 0, lg: 12 }}>
                            {steps.map((step, index) => (
                                <MotionBox
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: step.delay, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <VStack
                                        spacing={6}
                                        p={{ base: 6, md: 8 }}
                                        bg="rgba(255, 255, 255, 0.7)"
                                        backdropFilter="blur(20px)"
                                        border="1px solid rgba(255, 255, 255, 0.9)"
                                        borderRadius="30px"
                                        boxShadow="0 30px 60px -15px rgba(45, 10, 10, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.5)"
                                        position="relative"
                                        align="flex-start"
                                        _hover={{
                                            transform: 'translateY(-10px)',
                                            boxShadow: `0 40px 80px -15px ${step.color}30`,
                                        }}
                                        transition="all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                                        h="full"
                                        role="group"
                                        overflow="hidden"
                                    >
                                        <Box position="relative" zIndex={1}>
                                            <Flex justify="space-between" align="center" w="full" mb={4}>
                                                <Box
                                                    w={{ base: '52px', md: '64px' }}
                                                    h={{ base: '52px', md: '64px' }}
                                                    borderRadius="20px"
                                                    bg={`${step.color}15`}
                                                    display="flex"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                    color={step.color}
                                                    _groupHover={{ bg: step.color, color: 'white', transform: 'scale(1.1) rotate(5deg)' }}
                                                    transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                                                >
                                                    <Icon as={step.icon} boxSize={6} />
                                                </Box>
                                                <Text
                                                    fontSize={{ base: '4xl', md: '6xl' }}
                                                    fontWeight="800"
                                                    color="brand.accent"
                                                    opacity={0.7}
                                                    fontFamily="heading"
                                                    lineHeight="1"
                                                    transition="all 0.4s"
                                                    _groupHover={{ opacity: 1, transform: 'scale(1.1) translateY(-5px)', textShadow: '0 10px 20px rgba(201, 169, 110, 0.4)' }}
                                                >
                                                    0{index + 1}
                                                </Text>
                                            </Flex>

                                            <Heading
                                                as="h3"
                                                size="md"
                                                color="brand.primary"
                                                fontWeight="800"
                                                mb={3}
                                            >
                                                {step.title}
                                            </Heading>

                                            <Text
                                                fontSize="sm"
                                                color="brand.muted"
                                                lineHeight="1.7"
                                            >
                                                {step.description}
                                            </Text>
                                        </Box>
                                    </VStack>
                                </MotionBox>
                            ))}
                        </SimpleGrid>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}
