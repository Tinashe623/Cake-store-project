import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiShoppingBag, FiTruck, FiHeart } from 'react-icons/fi'

const MotionBox = motion(Box)

const steps = [
    {
        icon: FiHeart,
        title: 'Choose Your Cake',
        description: "Browse our delicious selection and pick your perfect cake for any occasion.",
        color: '#C5A059',
    },
    {
        icon: FiShoppingBag,
        title: 'Place Your Order',
        description: "Add to cart or order directly via WhatsApp. We'll confirm your order right away.",
        color: '#0A192F',
    },
    {
        icon: FiTruck,
        title: 'Fast Delivery',
        description: "Sit back and relax! We'll deliver your fresh cake right to your doorstep.",
        color: '#C5A059',
    },
]

export default function HowItWorks() {
    return (
        <Box py={{ base: 16, md: 20 }} bg="white" position="relative" overflow="hidden">
            {/* Background decoration */}
            <Box
                position="absolute"
                top="-50px"
                left="-50px"
                w="200px"
                h="200px"
                borderRadius="full"
                bg="#C5A059"
                opacity={0.05}
                filter="blur(60px)"
            />
            <Box
                position="absolute"
                bottom="-50px"
                right="-50px"
                w="250px"
                h="250px"
                borderRadius="full"
                bg="#0A192F"
                opacity={0.05}
                filter="blur(80px)"
            />

            <Container maxW="1400px" position="relative" zIndex={1}>
                <VStack spacing={4} mb={{ base: 10, md: 14 }} textAlign="center">
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Box
                            display="inline-flex"
                            alignItems="center"
                            gap={2}
                            bg="#0A192F"
                            px={5}
                            py={2.5}
                            borderRadius="full"
                        >
                            <Box w="8px" h="8px" borderRadius="full" bg="#C5A059" />
                            <Text
                                color="#C5A059"
                                fontWeight="600"
                                fontSize="sm"
                                textTransform="uppercase"
                                letterSpacing="2px"
                            >
                                How It Works
                            </Text>
                            <Box w="8px" h="8px" borderRadius="full" bg="#C5A059" />
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
                            fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
                            fontFamily="heading"
                            color="gray.800"
                            fontWeight="700"
                        >
                            Easy{' '}
                            <Text as="span" color="#C5A059">
                                3-Step
                            </Text>{' '}
                            Process
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
                            color="gray.500"
                            maxW="500px"
                            lineHeight="1.8"
                        >
                            Getting your perfect cake has never been easier
                        </Text>
                    </MotionBox>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }}>
                    {steps.map((step, index) => (
                        <MotionBox
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <VStack
                                spacing={5}
                                p={{ base: 6, md: 8 }}
                                bg="white"
                                borderRadius="24px"
                                boxShadow="0 4px 24px rgba(0, 0, 0, 0.04)"
                                border="1px solid"
                                borderColor="gray.100"
                                _hover={{
                                    transform: 'translateY(-8px)',
                                    boxShadow: `0 20px 40px ${step.color}15`,
                                    borderColor: step.color
                                }}
                                transition="all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                                h="full"
                            >
                                {/* Step number */}
                                <Text
                                    fontSize="sm"
                                    fontWeight="700"
                                    color={step.color}
                                    opacity={0.6}
                                    alignSelf="flex-start"
                                >
                                    0{index + 1}
                                </Text>

                                <Box
                                    w="70px"
                                    h="70px"
                                    borderRadius="20px"
                                    bg={`${step.color}15`}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Icon as={step.icon} boxSize={7} color={step.color} />
                                </Box>

                                <Heading
                                    as="h3"
                                    size="md"
                                    fontFamily="heading"
                                    color="gray.800"
                                    textAlign="center"
                                    fontWeight="600"
                                >
                                    {step.title}
                                </Heading>

                                <Text
                                    fontSize="sm"
                                    color="gray.500"
                                    textAlign="center"
                                    lineHeight="1.7"
                                >
                                    {step.description}
                                </Text>
                            </VStack>
                        </MotionBox>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    )
}
