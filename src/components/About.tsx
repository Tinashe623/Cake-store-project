import { Box, Container, Heading, Text, VStack, Image, HStack, Icon, Flex } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaAward, FaHeart, FaStar } from 'react-icons/fa'
import { useRef } from 'react'
import aboutImg from '../assets/images/about1.jpg'
import teamImg from '../assets/images/team-photo.jpg'
import { useIsMobile, usePrefersReducedMotion } from '../hooks/useResponsive'

const MotionBox = motion(Box)

const stats = [
    { icon: FaAward, value: '3+', label: 'Years Experience', color: 'brand.accent' },
    { icon: FaHeart, value: '100+', label: 'Cakes Made', color: 'brand.secondary' },
    { icon: FaStar, value: '4.9', label: 'Average Rating', color: 'brand.accent' },
]

export default function About() {
    const sectionRef = useRef(null)
    const isMobile = useIsMobile()
    const prefersReducedMotion = usePrefersReducedMotion()
    const disableHeavy = isMobile || prefersReducedMotion
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    })

    const yImg1 = useTransform(scrollYProgress, [0, 1], disableHeavy ? [0, 0] : [0, 0])

    return (
        <Box id="about" py={{ base: 16, md: 32 }} bg="brand.primary" position="relative" overflow="hidden" ref={sectionRef}>
            <Container maxW="1400px" position="relative" zIndex={2}>
                <Flex direction={{ base: 'column', lg: 'row' }} gap={{ base: 16, lg: 20 }} alignItems="center">
                    {/* Premium Image Gallery - Decorated Display */}
                    <Box w={{ base: 'full', lg: '50%' }} position="relative" pt={{ base: 4, md: 8 }} pl={{ base: 4, md: 8 }} pb={{ base: 4, md: 8 }} pr={{ base: 4, md: 8 }}>
                        {/* Soft ambient glow */}
                        <Box
                            position="absolute"
                            top="-10%"
                            left="10%"
                            w="80%"
                            h="120%"
                            bg="brand.accent"
                            opacity={0.08}
                            filter={{ base: 'blur(80px)', md: 'blur(150px)' }}
                            borderRadius="full"
                            zIndex={0}
                        />

                        {/* Decorative top-left corner bracket */}
                        <Box
                            position="absolute"
                            top="0"
                            left="0"
                            w={{ base: '50px', md: '80px' }}
                            h={{ base: '50px', md: '80px' }}
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
                            w={{ base: '50px', md: '80px' }}
                            h={{ base: '50px', md: '80px' }}
                            borderBottom="3px solid"
                            borderRight="3px solid"
                            borderColor="#9b7b51"
                            borderRadius="0 0 12px 0"
                            zIndex={5}
                            opacity={0.7}
                        />

                        {/* Award badge - top left (moved to prevent overflow) */}
                        <MotionBox
                            position="absolute"
                            top={{ base: '16px', md: '28px' }}
                            left={{ base: '16px', md: '0px' }}
                            zIndex={6}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <HStack
                                spacing={{ base: 1.5, md: 2 }}
                                bg="brand.accent"
                                color="brand.primary"
                                px={{ base: 3, md: 5 }}
                                py={{ base: 1.5, md: 2 }}
                                borderRadius="full"
                                boxShadow="0 8px 24px rgba(201, 169, 110, 0.35)"
                            >
                                <Icon as={FaStar} boxSize={{ base: '10px', md: '12px' }} />
                                <Text
                                    fontWeight="700"
                                    fontSize={{ base: '2xs', md: 'xs' }}
                                    textTransform="uppercase"
                                    letterSpacing={{ base: '1.5px', md: '2px' }}
                                >
                                    Award Winning
                                </Text>
                            </HStack>
                        </MotionBox>

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

                        {/* Premium badge - bottom left */}
                        <MotionBox
                            position="absolute"
                            bottom={{ base: '12px', md: '24px' }}
                            left={{ base: '12px', md: '28px' }}
                            zIndex={8}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <HStack
                                spacing={{ base: 2, md: 3 }}
                                bg="rgba(45, 10, 10, 0.85)"
                                backdropFilter={{ base: 'blur(10px)', md: 'blur(16px)' }}
                                border="1px solid rgba(201, 169, 110, 0.3)"
                                px={{ base: 3, md: 5 }}
                                py={{ base: 2.5, md: 3.5 }}
                                borderRadius="16px"
                                boxShadow="0 12px 32px rgba(0, 0, 0, 0.25)"
                            >
                                <Box
                                    w={{ base: '32px', md: '40px' }}
                                    h={{ base: '32px', md: '40px' }}
                                    borderRadius="12px"
                                    bg="linear-gradient(135deg, rgba(201, 169, 110, 0.25) 0%, rgba(201, 169, 110, 0.08) 100%)"
                                    border="1px solid rgba(201, 169, 110, 0.2)"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Icon as={FaAward} color="brand.accent" boxSize={{ base: 3.5, md: 5 }} />
                                </Box>
                                <VStack align="start" spacing={0.5}>
                                    <Text fontWeight="800" fontSize={{ base: 'sm', md: 'md' }} color="white" lineHeight="1.2">Premium</Text>
                                    <Text fontSize={{ base: '3xs', md: '2xs' }} fontWeight="600" color="rgba(245, 230, 211, 0.6)" textTransform="uppercase" letterSpacing="0.5px">Quality Assured</Text>
                                </VStack>
                            </HStack>
                        </MotionBox>

                        {/* Rating badge - bottom right */}
                        <MotionBox
                            position="absolute"
                            bottom={{ base: '50px', md: '60px' }}
                            right={{ base: '12px', md: '20px' }}
                            zIndex={8}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                        >
                            <VStack
                                spacing={{ base: 1.5, md: 2 }}
                                bg="rgba(45, 10, 10, 0.85)"
                                backdropFilter={{ base: 'blur(10px)', md: 'blur(16px)' }}
                                border="1px solid rgba(201, 169, 110, 0.3)"
                                px={{ base: 3, md: 4 }}
                                py={{ base: 2.5, md: 3.5 }}
                                borderRadius="16px"
                                boxShadow="0 12px 32px rgba(0, 0, 0, 0.25)"
                                align="center"
                            >
                                <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="800" color="brand.accent" lineHeight="1">
                                    4.9
                                </Text>
                                <HStack spacing={0.5}>
                                    {[...Array(5)].map((_, i) => (
                                        <Icon key={i} as={FaStar} color="brand.accent" boxSize={{ base: '9px', md: '11px' }} />
                                    ))}
                                </HStack>
                                <Text fontSize={{ base: '3xs', md: '2xs' }} color="rgba(245, 230, 211, 0.5)" fontWeight="600" textTransform="uppercase" letterSpacing="0.5px">
                                    500+ Reviews
                                </Text>
                            </VStack>
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
                            initial={{ opacity: 0, x: disableHeavy ? 10 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: disableHeavy ? 0.4 : 0.6 }}
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
                            initial={{ opacity: 0, x: disableHeavy ? 10 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: disableHeavy ? 0.4 : 0.6, delay: disableHeavy ? 0 : 0.1 }}
                        >
                            <Heading
                                as="h2"
                                fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
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
                            initial={{ opacity: 0, x: disableHeavy ? 10 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: disableHeavy ? 0.4 : 0.6, delay: disableHeavy ? 0 : 0.2 }}
                        >
                            <Text
                                fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
                                color="brand.muted"
                                lineHeight="1.8"
                                maxW="580px"
                            >
                                At Tarie Cakes, baking isn't just an occupation—it's an obsession. We source the finest Belgian chocolate, Madagascar vanilla, and farm-fresh ingredients to ensure our cakes taste even better than they look. Our mission is to anchor your life's most precious memories with extraordinary, handcrafted centerpieces.
                            </Text>
                        </MotionBox>

                        {/* Team Photo Section */}
                        <MotionBox
                            initial={{ opacity: 0, y: disableHeavy ? 10 : 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: disableHeavy ? 0.4 : 0.6, delay: disableHeavy ? 0 : 0.3 }}
                            mt={8}
                        >
                            <Box
                                position="relative"
                                borderRadius="24px"
                                overflow="hidden"
                                boxShadow="0 20px 40px rgba(45, 10, 10, 0.15)"
                                _hover={{ transform: 'translateY(-4px)', boxShadow: '0 25px 50px rgba(45, 10, 10, 0.2)' }}
                                transition="all 0.4s ease"
                            >
                                <Image
                                    src={teamImg}
                                    alt="Tarie and team in the course room"
                                    w="full"
                                    h={{ base: '250px', md: '350px' }}
                                    objectFit="cover"
                                />
                                <Box
                                    position="absolute"
                                    bottom={0}
                                    left={0}
                                    right={0}
                                    bg="linear-gradient(transparent, rgba(45, 10, 10, 0.8))"
                                    p={6}
                                >
                                    <Text
                                        color="brand.lightText"
                                        fontSize={{ base: 'lg', md: 'xl' }}
                                        fontWeight="700"
                                        textAlign="center"
                                    >
                                        Meet Our Passionate Team
                                    </Text>
                                    <Text
                                        color="rgba(245, 230, 211, 0.8)"
                                        fontSize={{ base: 'sm', md: 'md' }}
                                        textAlign="center"
                                        mt={2}
                                    >
                                        Crafting extraordinary cakes with love and expertise
                                    </Text>
                                </Box>
                            </Box>
                        </MotionBox>

                        {/* Modern Stats Row */}
                        <MotionBox
                            initial={{ opacity: 0, y: disableHeavy ? 10 : 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: disableHeavy ? 0.4 : 0.6, delay: disableHeavy ? 0 : 0.3 }}
                            w="full"
                            pt={4}
                        >
                            <VStack spacing={{ base: 4, md: 5 }} align="stretch" w="full">
                                {stats.map((stat, index) => (
                                    <HStack key={index} spacing={3} align="center">
                                        <Box
                                            bg="rgba(201, 169, 110, 0.1)"
                                            p={{ base: 2.5, md: 3 }}
                                            borderRadius="14px"
                                            flexShrink={0}
                                        >
                                            <Icon as={stat.icon} color={stat.color} boxSize={{ base: 4, md: 5 }} />
                                        </Box>
                                        <Text fontWeight="800" fontSize={{ base: 'lg', md: 'xl' }} color="brand.lightText" lineHeight="1">
                                            {stat.value}
                                        </Text>
                                        <Text fontSize={{ base: 'xs', md: 'sm' }} fontWeight="600" color="rgba(245, 230, 211, 0.6)">
                                            {stat.label}
                                        </Text>
                                    </HStack>
                                ))}
                            </VStack>
                        </MotionBox>
                    </VStack>
                </Flex>
            </Container>
        </Box>
    )
}
