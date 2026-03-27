import { Box, Container, Heading, Text, Button, VStack, HStack, Image, Flex, Icon } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaArrowRight, FaGem } from 'react-icons/fa'
import heroImg from '../assets/images/tarie-cakes-hero.jpg'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

const SPARKLE_DATA = [
    { top: '15%', left: '12%', fontSize: 'sm', dx: -8, duration: 7, delay: 0 },
    { top: '65%', left: '75%', fontSize: 'md', dx: 12, duration: 9, delay: 0.5 },
    { top: '30%', left: '55%', fontSize: 'lg', dx: -5, duration: 6, delay: 1 },
    { top: '80%', left: '25%', fontSize: 'sm', dx: 10, duration: 8, delay: 1.5 },
    { top: '45%', left: '85%', fontSize: 'md', dx: -12, duration: 10, delay: 0.3 },
    { top: '20%', left: '40%', fontSize: 'lg', dx: 6, duration: 7, delay: 2 },
    { top: '70%', left: '60%', fontSize: 'sm', dx: -10, duration: 9, delay: 0.8 },
    { top: '55%', left: '18%', fontSize: 'md', dx: 8, duration: 6, delay: 1.2 },
]

const CIRCLE_DATA = [
    { top: '25%', left: '30%', w: '18px', h: '18px', duration: 8, delay: 0 },
    { top: '70%', left: '70%', w: '12px', h: '12px', duration: 6, delay: 1 },
    { top: '40%', left: '80%', w: '22px', h: '22px', duration: 7, delay: 2 },
    { top: '85%', left: '15%', w: '14px', h: '14px', duration: 9, delay: 0.5 },
    { top: '15%', left: '65%', w: '16px', h: '16px', duration: 10, delay: 1.5 },
]

export default function Hero() {
    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 1000], [0, 200])
    const y2 = useTransform(scrollY, [0, 1000], [0, -100])

    return (
        <Box
            id="home"
            position="relative"
            minH={{ base: 'auto', md: '100vh', lg: '110vh' }}
            display="flex"
            alignItems="center"
            overflow="hidden"
            bg="brand.background"
            pb={{ base: 6, md: 0 }}
        >
            {/* Background elements */}
            <Box position="absolute" top={0} left={0} right={0} bottom={0} overflow="hidden">
                <Box
                    position="absolute"
                    top="-10%"
                    left="-10%"
                    w="50vw"
                    h="50vw"
                    borderRadius="full"
                    bg="brand.secondaryLight"
                    opacity={0.15}
                    filter="blur(120px)"
                    animation="pulseFade 8s infinite alternate"
                />
                <Box
                    position="absolute"
                    bottom="-10%"
                    right="-5%"
                    w="40vw"
                    h="40vw"
                    borderRadius="full"
                    bg="brand.accent"
                    opacity={0.1}
                    filter="blur(100px)"
                    animation="pulseFade 6s infinite alternate-reverse"
                />

                {/* Floating Sparkles - hidden on very small screens */}
                <Box display={{ base: 'none', sm: 'block' }}>
                    {SPARKLE_DATA.map((s, i) => (
                        <MotionBox
                            key={i}
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
                
                {CIRCLE_DATA.map((c, i) => (
                    <MotionBox
                        key={`circle-${i}`}
                        position="absolute"
                        top={c.top}
                        left={c.left}
                        w={c.w}
                        h={c.h}
                        borderRadius="full"
                        bg={i % 2 === 0 ? 'brand.secondaryLight' : 'brand.accent'}
                        opacity={0.3}
                        animate={{
                            y: [0, -40, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: c.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: c.delay,
                        }}
                        zIndex={1}
                    />
                ))}
            </Box>

            <Container maxW="1400px" position="relative" zIndex={2} mt={{ base: '60px', md: 0 }} px={{ base: 4, sm: 6, md: 8 }}>
                <Flex
                    direction={{ base: 'column', lg: 'row' }}
                    align="center"
                    justify="space-between"
                    gap={{ base: 4, md: 10, lg: 8 }}
                >
                    {/* Text Content */}
                    <VStack
                        spacing={{ base: 3, md: 8 }}
                        align={{ base: 'center', lg: 'flex-start' }}
                        textAlign={{ base: 'center', lg: 'left' }}
                        w={{ base: 'full', lg: '50%' }}
                        pt={{ base: 4, sm: 6, md: 16, lg: 24 }}
                        order={{ base: 1, lg: 0 }}
                    >
                        <MotionBox
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Box
                                display="inline-block"
                                px={{ base: 4, md: 5 }}
                                py={{ base: 2, md: 2.5 }}
                                mb={2}
                                borderRadius="full"
                                bg="brand.primary"
                                color="brand.accent"
                                fontWeight="700"
                                fontSize={{ base: '2xs', sm: 'xs', md: 'sm' }}
                                letterSpacing={{ base: '1px', md: '2px' }}
                                textTransform="uppercase"
                                boxShadow="0 10px 20px -5px rgba(45, 10, 10, 0.2)"
                            >
                                ✨ Premium Handcrafted Cakes
                            </Box>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Heading
                                as="h1"
                                fontSize={{ base: '4xl', sm: '5xl', md: '6xl', lg: '7xl', xl: '8xl' }}
                                fontFamily="heading"
                                color="brand.primary"
                                lineHeight="0.95"
                                fontWeight="800"
                                letterSpacing="-0.04em"
                                mb={{ base: 2, md: 4 }}
                            >
                                Baking Dreams{' '}
                                <Box as="br" display={{ base: 'none', sm: 'inline' }} />
                                Into{' '}
                                <Text as="span" color="brand.accent" fontStyle="italic">
                                    Reality
                                </Text>
                            </Heading>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Text
                                fontSize={{ base: 'sm', sm: 'lg', md: '2xl' }}
                                color="brand.muted"
                                maxW="580px"
                                fontWeight="500"
                                lineHeight="1.6"
                                px={{ base: 1, sm: 0 }}
                            >
                                Elevate your celebrations with our bespoke, luxury cakes. Every tier is crafted with the finest ingredients and an artisan's touch.
                            </Text>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            w={{ base: 'full', sm: 'auto' }}
                        >
                            <HStack spacing={{ base: 3, md: 4 }} flexDir={{ base: 'column', sm: 'row' }} w={{ base: 'full', sm: 'auto' }}>
                                <Button
                                    size={{ base: 'md', md: 'lg' }}
                                    bg="brand.primary"
                                    color="brand.accent"
                                    px={{ base: 6, md: 10 }}
                                    py={{ base: 5, md: 7 }}
                                    fontSize={{ base: 'sm', md: 'lg' }}
                                    leftIcon={<FaArrowRight />}
                                    as="a"
                                    href="#menu"
                                    w={{ base: 'full', sm: 'auto' }}
                                    h={{ base: '50px', md: 'auto' }}
                                    boxShadow="0 15px 30px -5px rgba(45, 10, 10, 0.25)"
                                    _hover={{
                                        transform: 'translateY(-3px)',
                                        boxShadow: '0 20px 40px -5px rgba(45, 10, 10, 0.35)',
                                    }}
                                >
                                    Explore Menus
                                </Button>
                                <Button
                                    variant="outline"
                                    size={{ base: 'md', md: 'lg' }}
                                    px={{ base: 6, md: 10 }}
                                    py={{ base: 5, md: 7 }}
                                    fontSize={{ base: 'sm', md: 'lg' }}
                                    border="2px solid"
                                    borderColor="brand.primary"
                                    color="brand.primary"
                                    _hover={{
                                        bg: 'brand.surface',
                                        borderColor: 'brand.primary',
                                    }}
                                    as="a"
                                    href="#contact"
                                    w={{ base: 'full', sm: 'auto' }}
                                    h={{ base: '50px', md: 'auto' }}
                                >
                                    Book a Tasting
                                </Button>
                            </HStack>
                        </MotionBox>

                        {/* Social Proof — hidden on mobile */}
                        <MotionBox
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            pt={{ base: 2, md: 8 }}
                            display={{ base: 'none', sm: 'block' }}
                        >
                            <HStack spacing={{ base: 3, md: 4 }} align="center">
                                <HStack spacing={-3}>
                                    {[1, 2, 3].map((i) => (
                                        <Image
                                            key={i}
                                            src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                            boxSize={{ base: '34px', md: '40px' }}
                                            borderRadius="full"
                                            border="2px solid white"
                                            boxShadow="sm"
                                        />
                                    ))}
                                </HStack>
                                <VStack align="start" spacing={0}>
                                    <Text fontWeight="700" color="brand.primary" fontSize={{ base: 'xs', md: 'sm' }}>500+ Happy Clients</Text>
                                    <HStack spacing={1}>
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Box key={i} color="brand.accent" fontSize="xs">★</Box>
                                        ))}
                                    </HStack>
                                </VStack>
                            </HStack>
                        </MotionBox>
                    </VStack>

                    {/* Image Area */}
                    <MotionFlex
                        w={{ base: '100%', lg: '50%' }}
                        justify="center"
                        position="relative"
                        style={{ y: y1 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        order={{ base: 2, lg: 0 }}
                    >
                        {/* Decorative Background for Image */}
                        <Box
                            position="absolute"
                            w={{ base: '85%', sm: '70%', md: '75%', lg: '450px' }}
                            h={{ base: '90%', sm: '80%', md: '75%', lg: '600px' }}
                            bg="brand.accent"
                            borderRadius={{ base: '60px', md: '100px' }}
                            transform="rotate(-5deg)"
                            zIndex={0}
                            opacity={0.15}
                        />

                        {/* Neon Glow Layer */}
                        <Box
                            position="absolute"
                            w={{ base: 'calc(85% + 30px)', sm: 'calc(70% + 40px)', md: '490px' }}
                            h={{ base: 'calc(90% + 30px)', sm: 'calc(80% + 50px)', md: '650px' }}
                            borderRadius={{ base: '45px 120px 45px 45px', md: '65px 205px 65px 65px' }}
                            zIndex={0}
                            boxShadow="0 0 40px rgba(201, 169, 110, 0.4), 0 0 80px rgba(201, 169, 110, 0.2), 0 0 120px rgba(45, 10, 10, 0.15)"
                            animation="neonPulse 3s ease-in-out infinite alternate"
                        />

                        {/* Main Image Container — fully visible on all screens */}
                        <Box
                            position="relative"
                            w={{ base: '90%', sm: '70%', md: '75%', lg: '480px' }}
                            maxW="480px"
                            aspectRatio={{ base: 4 / 5, md: 3 / 4 }}
                            borderRadius={{ base: '40px 100px 40px 40px', md: '60px 200px 60px 60px' }}
                            overflow="hidden"
                            zIndex={1}
                            border="2px solid rgba(201, 169, 110, 0.6)"
                            boxShadow="0 0 15px rgba(201, 169, 110, 0.3), 0 0 30px rgba(201, 169, 110, 0.15), 20px 30px 60px rgba(45,10,10,0.2)"
                            _before={{
                                content: '""',
                                position: 'absolute',
                                inset: '-3px',
                                borderRadius: 'inherit',
                                background: 'conic-gradient(from 180deg, #C9A96E, #2D0A0A, #C9A96E, #2D0A0A, #C9A96E)',
                                zIndex: -1,
                                animation: 'neonBorderRotate 6s linear infinite',
                                opacity: 0.7,
                            }}
                        >
                            <Image
                                src={heroImg}
                                alt="Exquisite Wedding Cake"
                                objectFit="cover"
                                w="100%"
                                h="100%"
                                fallbackSrc="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            />
                        </Box>

                        {/* Floating Badge */}
                        <MotionBox
                            position="absolute"
                            bottom={{ base: '5%', md: '10%' }}
                            left={{ base: '0%', md: '-10%' }}
                            zIndex={3}
                            style={{ y: y2 }}
                        >
                            <Box
                                bg="rgba(45, 10, 10, 0.75)"
                                backdropFilter="blur(20px)"
                                border="1px solid rgba(201, 169, 110, 0.4)"
                                boxShadow="0 0 20px rgba(201, 169, 110, 0.15), 0 8px 32px rgba(0,0,0,0.2)"
                                px={{ base: 3, md: 5 }}
                                py={{ base: 2.5, md: 3.5 }}
                                borderRadius={{ base: '14px', md: '20px' }}
                                display="flex"
                                alignItems="center"
                                gap={{ base: 1.5, md: 3 }}
                            >
                                <Box
                                    w={{ base: '28px', md: '42px' }}
                                    h={{ base: '28px', md: '42px' }}
                                    borderRadius={{ base: '10px', md: '14px' }}
                                    bg="linear-gradient(135deg, #C9A96E 0%, #B8944F 100%)"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    boxShadow="0 0 12px rgba(201, 169, 110, 0.4)"
                                >
                                    <Icon as={FaGem} color="brand.primary" boxSize={{ base: 2.5, md: 4 }} />
                                </Box>
                                <VStack align="start" spacing={0}>
                                    <Text fontWeight="800" color="brand.accent" fontSize={{ base: 'sm', md: 'lg' }} lineHeight="1.1" letterSpacing="-0.5px">
                                        100%
                                    </Text>
                                    <Text fontSize={{ base: '3xs', md: '2xs' }} color="rgba(245, 230, 211, 0.7)" fontWeight="600" textTransform="uppercase" letterSpacing="1.5px">
                                        Bespoke Design
                                    </Text>
                                </VStack>
                            </Box>
                        </MotionBox>
                    </MotionFlex>
                </Flex>
            </Container>

        </Box>
    )
}
