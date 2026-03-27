import { Box, Container, Heading, Text, SimpleGrid, VStack, Image, HStack, Icon, Button, Flex } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaAward, FaHeart, FaStar, FaArrowRight } from 'react-icons/fa'
import { useRef } from 'react'
import aboutImg from '../assets/images/about1.jpg'

const MotionBox = motion(Box)

const stats = [
    { icon: FaAward, value: '10+', label: 'Years Experience', color: 'brand.accent' },
    { icon: FaHeart, value: '500+', label: 'Cakes Made', color: 'brand.secondary' },
    { icon: FaStar, value: '4.9', label: 'Average Rating', color: 'brand.accent' },
]

export default function About() {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    })

    const yImg1 = useTransform(scrollYProgress, [0, 1], [30, -30])

    return (
        <Box id="about" py={{ base: 20, md: 32 }} bg="brand.primary" position="relative" overflow="hidden" ref={sectionRef}>
            {/* Smooth gradient transition from Testimonials */}
            <Box
                position="absolute"
                top="-80px"
                left={0}
                w="full"
                h="120px"
                bgGradient="linear(to-b, brand.background, brand.primary)"
                zIndex={1}
            />
            <Container maxW="1400px" position="relative" zIndex={2}>
                <Flex direction={{ base: 'column', lg: 'row' }} gap={{ base: 16, lg: 20 }} alignItems="center">
                    {/* Premium Image Gallery - Decorated Display */}
                    <Box w={{ base: 'full', lg: '50%' }} position="relative" pt={8} pl={8} pb={8} pr={8}>
                        {/* Soft ambient glow */}
                        <Box
                            position="absolute"
                            top="-10%"
                            left="10%"
                            w="80%"
                            h="120%"
                            bg="brand.accent"
                            opacity={0.08}
                            filter="blur(150px)"
                            borderRadius="full"
                            zIndex={0}
                        />

                        {/* Decorative top-left corner bracket */}
                        <Box
                            position="absolute"
                            top="0"
                            left="0"
                            w="80px"
                            h="80px"
                            borderTop="3px solid"
                            borderLeft="3px solid"
                            borderColor="#9b7b51"
                            borderRadius="12px 0 0 0"
                            zIndex={5}
                            opacity={0.7}
                        />

                        {/* Decorative bottom-right corner bracket */}
                        <Box
                            position="absolute"
                            bottom="0"
                            right="0"
                            w="80px"
                            h="80px"
                            borderBottom="3px solid"
                            borderRight="3px solid"
                            borderColor="#9b7b51"
                            borderRadius="0 0 12px 0"
                            zIndex={5}
                            opacity={0.7}
                        />

                        {/* Diagonal ribbon - top right */}
                        <Box
                            position="absolute"
                            top="28px"
                            right="-10px"
                            zIndex={6}
                            bg="brand.accent"
                            color="brand.primary"
                            px={10}
                            py={1.5}
                            fontWeight="800"
                            fontSize="2xs"
                            textTransform="uppercase"
                            letterSpacing="3px"
                            boxShadow="0 4px 15px rgba(201, 169, 110, 0.4)"
                            transform="rotate(0deg)"
                            borderRadius="0 0 0 8px"
                        >
                            Award Winning
                        </Box>

                        {/* Main Image - Full display */}
                        <MotionBox
                            position="relative"
                            zIndex={2}
                            borderRadius="24px"
                            overflow="hidden"
                            boxShadow="0 40px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,169,110,0.1)"
                            style={{ y: yImg1 }}
                        >
                            <Image
                                src={aboutImg}
                                alt="Master Baker at work"
                                w="full"
                                objectFit="contain"
                                loading="lazy"
                            />
                        </MotionBox>

                        {/* Floating glass badge - bottom left */}
                        <MotionBox
                            position="absolute"
                            bottom="20px"
                            left="30px"
                            zIndex={8}
                            bg="rgba(255, 255, 255, 0.9)"
                            backdropFilter="blur(20px)"
                            border="1px solid rgba(201, 169, 110, 0.25)"
                            px={6}
                            py={4}
                            borderRadius="16px"
                            boxShadow="0 20px 40px -10px rgba(45, 10, 10, 0.1)"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <HStack spacing={3}>
                                <Box
                                    w="40px"
                                    h="40px"
                                    borderRadius="12px"
                                    bg="rgba(201, 169, 110, 0.15)"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Icon as={FaAward} color="brand.accent" boxSize={5} />
                                </Box>
                                <VStack align="start" spacing={0}>
                                    <Text fontWeight="800" fontSize="xl" color="brand.primary" lineHeight="1.2">Premium</Text>
                                    <Text fontSize="2xs" fontWeight="600" color="brand.muted" textTransform="uppercase" letterSpacing="1px">Quality Assured</Text>
                                </VStack>
                            </HStack>
                        </MotionBox>

                        {/* Decorative star rating - bottom right */}
                        <MotionBox
                            position="absolute"
                            bottom="50px"
                            right="10px"
                            zIndex={8}
                            bg="rgba(255, 255, 255, 0.9)"
                            backdropFilter="blur(20px)"
                            border="1px solid rgba(201, 169, 110, 0.2)"
                            px={5}
                            py={3}
                            borderRadius="14px"
                            boxShadow="0 15px 30px -10px rgba(45, 10, 10, 0.1)"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                        >
                            <HStack spacing={1.5}>
                                {[...Array(5)].map((_, i) => (
                                    <Icon key={i} as={FaStar} color="brand.accent" boxSize={3.5} />
                                ))}
                                <Text fontSize="xs" fontWeight="700" color="brand.primary" ml={2}>4.9</Text>
                            </HStack>
                        </MotionBox>

                        {/* Decorative dots cluster */}
                        <Box
                            position="absolute"
                            top="0"
                            right="30%"
                            zIndex={1}
                            display="grid"
                            gridTemplateColumns="repeat(3, 6px)"
                            gap="10px"
                        >
                            {[...Array(9)].map((_, i) => (
                                <Box key={i} w="4px" h="4px" borderRadius="full" bg="rgba(201, 169, 110, 0.2)" />
                            ))}
                        </Box>

                        {/* Decorative thin line accent */}
                        <Box
                            position="absolute"
                            bottom="20px"
                            right="40%"
                            w="60px"
                            h="2px"
                            bg="rgba(201, 169, 110, 0.3)"
                            borderRadius="full"
                            zIndex={1}
                        />
                    </Box>

                    {/* Content Column */}
                    <VStack align="start" spacing={8} w={{ base: 'full', lg: '50%' }}>
                        <MotionBox
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Box
                                display="inline-flex"
                                alignItems="center"
                                gap={3}
                                bg="rgba(245, 230, 211, 0.1)"
                                px={5}
                                py={2.5}
                                borderRadius="full"
                            >
                                <Box w="6px" h="6px" borderRadius="full" bg="brand.accent" />
                                <Text
                                    color="brand.lightText"
                                    fontWeight="700"
                                    fontSize="xs"
                                    textTransform="uppercase"
                                    letterSpacing="3px"
                                >
                                    Behind The Art
                                </Text>
                            </Box>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <Heading
                                as="h2"
                                fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                                fontFamily="heading"
                                color="brand.primary"
                                fontWeight="800"
                                lineHeight="1.1"
                                letterSpacing="-0.02em"
                            >
                                Passion Baked Into <br />
                                <Text as="span" color="brand.accent">Every Single Tier</Text>
                            </Heading>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Text
                                fontSize={{ base: 'lg', md: 'xl' }}
                                color="brand.muted"
                                lineHeight="1.8"
                                maxW="580px"
                            >
                                At Tarie Cakes, baking isn't just an occupation—it's an obsession. We source the finest Belgian chocolate, Madagascar vanilla, and farm-fresh ingredients to ensure our cakes taste even better than they look. Our mission is to anchor your life's most precious memories with extraordinary, handcrafted centerpieces.
                            </Text>
                        </MotionBox>

                        {/* Modern Stats Row */}
                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            w="full"
                            pt={4}
                        >
                            <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={8}>
                                {stats.map((stat, index) => (
                                    <HStack key={index} spacing={4} align="center">
                                        <Box bg="rgba(45, 10, 10, 0.05)" p={4} borderRadius="20px">
                                            <Icon as={stat.icon} color={stat.color} boxSize={6} />
                                        </Box>
                                        <VStack align="start" spacing={1}>
                                            <Text fontWeight="800" fontSize="2xl" color="brand.primary">{stat.value}</Text>
                                            <Text fontSize="2xs" fontWeight="700" color="brand.muted" textTransform="uppercase" letterSpacing="1px">{stat.label}</Text>
                                        </VStack>
                                    </HStack>
                                ))}
                            </SimpleGrid>
                        </MotionBox>

                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            pt={4}
                        >
                            <Button
                                size="lg"
                                bg="brand.accent"
                                color="brand.primary"
                                _hover={{
                                    bg: 'brand.lightText',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 10px 20px -5px rgba(201, 169, 110, 0.4)'
                                }}
                                rightIcon={<FaArrowRight />}
                                px={8}
                                h="54px"
                                borderRadius="16px"
                                fontWeight="800"
                            >
                                Meet the Team
                            </Button>
                        </MotionBox>
                    </VStack>
                </Flex>
            </Container>
        </Box>
    )
}
