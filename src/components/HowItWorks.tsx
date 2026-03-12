import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiShoppingBag, FiTruck, FiStar } from 'react-icons/fi'

const MotionBox = motion(Box)

const steps = [
    {
        icon: FiStar,
        title: 'Choose Your Cake',
        description: "Browse our delicious selection and pick your perfect cake for any occasion.",
    },
    {
        icon: FiShoppingBag,
        title: 'Place Your Order',
        description: "Add to cart or order directly via WhatsApp. We'll confirm your order right away.",
    },
    {
        icon: FiTruck,
        title: 'Delivery',
        description: "Sit back and relax! We'll deliver your fresh cake right to your doorstep.",
    },
]

export default function HowItWorks() {
    return (
        <Box py={{ base: 16, md: 20 }} bg="brand.secondary">
            <Container maxW="1200px">
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
                            How It Works
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
                            Simple 3-Step Process
                        </Heading>
                    </MotionBox>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                    {steps.map((step, index) => (
                        <MotionBox
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <VStack
                                spacing={4}
                                p={8}
                                bg="brand.cardBg"
                                borderRadius="20px"
                                boxShadow="0 10px 40px rgba(74, 55, 40, 0.08)"
                                _hover={{ transform: 'translateY(-5px)', boxShadow: '0 15px 40px rgba(74, 55, 40, 0.12)' }}
                                transition="all 0.3s ease"
                            >
                                <Box
                                    w="70px"
                                    h="70px"
                                    borderRadius="full"
                                    bg="brand.primary"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Icon as={step.icon} boxSize={6} color="brand.darkText" w={6} h={6} />
                                </Box>
                                <Heading
                                    as="h3"
                                    size="md"
                                    fontFamily="heading"
                                    color="brand.darkText"
                                    textAlign="center"
                                >
                                    {step.title}
                                </Heading>
                                <Text
                                    fontSize="sm"
                                    color="brand.darkText"
                                    opacity={0.7}
                                    textAlign="center"
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
