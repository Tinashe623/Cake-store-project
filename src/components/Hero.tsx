import { Box, Container, Heading, Text, Button, VStack, HStack, Image, Flex, Icon } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaArrowRight, FaGem } from 'react-icons/fa'

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
            minH={{ base: '100vh', md: '110vh' }}
            display="flex"
            alignItems="center"
            overflow="hidden"
            bg="brand.background"
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

                {/* Floating Sparkles */}
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

            <Container maxW="1400px" position="relative" zIndex={2} mt={{ base: 20, md: 0 }}>
                <Flex
                    direction={{ base: 'column', lg: 'row' }}
                    align="center"
                    justify="space-between"
                    gap={{ base: 12, lg: 8 }}
                >
                    {/* Text Content */}
                    <VStack
                        spacing={8}
                        align={{ base: 'center', lg: 'flex-start' }}
                        textAlign={{ base: 'center', lg: 'left' }}
                        w={{ base: 'full', lg: '50%' }}
                        pt={{ base: 8, md: 24 }}
                    >
                        <MotionBox
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Box
                                display="inline-block"
                                px={5}
                                py={2.5}
                                mb={2}
                                borderRadius="full"
                                bg="brand.primary"
                                color="brand.accent"
                                fontWeight="700"
                                fontSize="sm"
                                letterSpacing="2px"
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
                                fontSize={{ base: '5xl', sm: '6xl', md: '7xl', lg: '8xl' }}
                                fontFamily="heading"
                                color="brand.primary"
                                lineHeight="0.95"
                                fontWeight="800"
                                letterSpacing="-0.04em"
                                mb={4}
                            >
                                Baking Dreams <br />
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
                                fontSize={{ base: 'lg', md: '2xl' }}
                                color="brand.muted"
                                maxW="580px"
                                fontWeight="500"
                                lineHeight="1.6"
                            >
                                Elevate your celebrations with our bespoke, luxury cakes. Every tier is crafted with the finest ingredients and an artisan's touch.
                            </Text>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <HStack spacing={4} flexDir={{ base: 'column', sm: 'row' }} w={{ base: 'full', sm: 'auto' }}>
                                <Button
                                    size="lg"
                                    bg="brand.primary"
                                    color="brand.accent"
                                    px={10}
                                    py={7}
                                    fontSize="lg"
                                    leftIcon={<FaArrowRight />}
                                    as="a"
                                    href="#menu"
                                    w={{ base: 'full', sm: 'auto' }}
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
                                    size="lg"
                                    px={10}
                                    py={7}
                                    fontSize="lg"
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
                                >
                                    Book a Tasting
                                </Button>
                            </HStack>
                        </MotionBox>

                        {/* Social Proof */}
                        <MotionBox
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            pt={8}
                        >
                            <HStack spacing={4} align="center">
                                <HStack spacing={-3}>
                                    {[1, 2, 3].map((i) => (
                                        <Image
                                            key={i}
                                            src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                            boxSize="40px"
                                            borderRadius="full"
                                            border="2px solid white"
                                            boxShadow="sm"
                                        />
                                    ))}
                                </HStack>
                                <VStack align="start" spacing={0}>
                                    <Text fontWeight="700" color="brand.primary" fontSize="sm">500+ Happy Clients</Text>
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
                        w={{ base: 'full', lg: '50%' }}
                        justify="center"
                        position="relative"
                        style={{ y: y1 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Decorative Background for Image */}
                        <Box
                            position="absolute"
                            w={{ base: '280px', md: '450px' }}
                            h={{ base: '400px', md: '600px' }}
                            bg="brand.accent"
                            borderRadius="100px"
                            transform="rotate(-5deg)"
                            zIndex={0}
                            opacity={0.15}
                        />

                        {/* Neon Glow Layer */}
                        <Box
                            position="absolute"
                            w={{ base: '310px', md: '490px' }}
                            h={{ base: '430px', md: '650px' }}
                            borderRadius="65px 205px 65px 65px"
                            zIndex={0}
                            boxShadow="0 0 40px rgba(201, 169, 110, 0.4), 0 0 80px rgba(201, 169, 110, 0.2), 0 0 120px rgba(45, 10, 10, 0.15)"
                            animation="neonPulse 3s ease-in-out infinite alternate"
                        />

                        {/* Main Image Container */}
                        <Box
                            position="relative"
                            w={{ base: '300px', md: '480px' }}
                            h={{ base: '420px', md: '640px' }}
                            borderRadius="60px 200px 60px 60px"
                            overflow="hidden"
                            zIndex={1}
                            border="2px solid rgba(201, 169, 110, 0.6)"
                            boxShadow="0 0 15px rgba(201, 169, 110, 0.3), 0 0 30px rgba(201, 169, 110, 0.15), 20px 30px 60px rgba(45,10,10,0.2)"
                            _before={{
                                content: '""',
                                position: 'absolute',
                                inset: '-3px',
                                borderRadius: '63px 203px 63px 63px',
                                background: 'conic-gradient(from 180deg, #C9A96E, #2D0A0A, #C9A96E, #2D0A0A, #C9A96E)',
                                zIndex: -1,
                                animation: 'neonBorderRotate 6s linear infinite',
                                opacity: 0.7,
                            }}
                        >
                            <Image
                                src="./images/tarie-cakes-hero.jpg"
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
                            bottom="10%"
                            left={{ base: "-5%", md: "-10%" }}
                            zIndex={3}
                            style={{ y: y2 }}
                        >
                            <Box
                                bg="rgba(45, 10, 10, 0.75)"
                                backdropFilter="blur(20px)"
                                border="1px solid rgba(201, 169, 110, 0.4)"
                                boxShadow="0 0 20px rgba(201, 169, 110, 0.15), 0 8px 32px rgba(0,0,0,0.2)"
                                px={5}
                                py={3.5}
                                borderRadius="20px"
                                display="flex"
                                alignItems="center"
                                gap={3}
                            >
                                <Box
                                    w="42px"
                                    h="42px"
                                    borderRadius="14px"
                                    bg="linear-gradient(135deg, #C9A96E 0%, #B8944F 100%)"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    boxShadow="0 0 12px rgba(201, 169, 110, 0.4)"
                                >
                                    <Icon as={FaGem} color="brand.primary" boxSize={4} />
                                </Box>
                                <VStack align="start" spacing={0}>
                                    <Text fontWeight="800" color="brand.accent" fontSize="lg" lineHeight="1.1" letterSpacing="-0.5px">
                                        100%
                                    </Text>
                                    <Text fontSize="2xs" color="rgba(245, 230, 211, 0.7)" fontWeight="600" textTransform="uppercase" letterSpacing="1.5px">
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
