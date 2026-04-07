import { Box, Container, Heading, Text, Button, VStack, HStack, Image, Flex, Icon } from '@chakra-ui/react'
import { FaArrowRight, FaGem } from 'react-icons/fa'
import heroImg from '../assets/images/tarie-cakes-hero.jpg'

export default function Hero() {
    return (
        <Box
            id="home"
            position="relative"
            minH={{ base: 'auto', md: 'auto', lg: '110vh' }}
            display="flex"
            alignItems="center"
            overflow="hidden"
            bg="brand.background"
            pb={{ base: 8, md: 12, lg: 0 }}
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
                    filter={{ base: 'blur(80px)', lg: 'blur(120px)' }}
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
                    filter={{ base: 'blur(60px)', lg: 'blur(100px)' }}
                />
            </Box>

            <Container maxW="1400px" position="relative" zIndex={2} mt={{ base: '76px', md: '80px', lg: 0 }} px={{ base: 4, sm: 6, md: 8 }}>
                <Flex
                    direction={{ base: 'column', lg: 'row' }}
                    align="center"
                    justify="space-between"
                    gap={{ base: 6, md: 8, lg: 8 }}
                >
                    {/* Text Content */}
                    <VStack
                        spacing={{ base: 4, md: 5, lg: 8 }}
                        align={{ base: 'center', lg: 'flex-start' }}
                        textAlign={{ base: 'center', lg: 'left' }}
                        w={{ base: 'full', lg: '50%' }}
                        pt={{ base: 4, md: 6, lg: 24 }}
                        order={{ base: 1, lg: 0 }}
                    >
                        {/* Badge */}
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

                        {/* Heading */}
                        <Heading
                            as="h1"
                            fontSize={{ base: '4xl', sm: '5xl', md: '5xl', lg: '7xl', xl: '8xl' }}
                            fontFamily="heading"
                            color="brand.primary"
                            lineHeight="0.95"
                            fontWeight="800"
                            letterSpacing="-0.04em"
                            mb={{ base: 2, md: 3, lg: 4 }}
                        >
                            Baking Dreams{' '}
                            <Box as="br" display={{ base: 'none', lg: 'inline' }} />
                            Into{' '}
                            <Text as="span" color="brand.accent" fontStyle="italic">
                                Reality
                            </Text>
                        </Heading>

                        {/* Subtitle */}
                        <Text
                            fontSize={{ base: 'sm', sm: 'md', md: 'lg', lg: '2xl' }}
                            color="brand.muted"
                            maxW="580px"
                            fontWeight="500"
                            lineHeight="1.6"
                            px={{ base: 1, sm: 0 }}
                        >
                            Elevate your celebrations with our bespoke, luxury cakes. Every tier is crafted with the finest ingredients and an artisan's touch.
                        </Text>

                        {/* CTA Buttons */}
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


                    </VStack>

                    {/* Image Area */}
                    <Box
                        w={{ base: '100%', md: '60%', lg: '50%' }}
                        maxW={{ base: '400px', md: '420px', lg: '480px' }}
                        mx={{ base: 'auto', lg: 0 }}
                        position="relative"
                        order={{ base: 2, lg: 0 }}
                    >
                        {/* Decorative Background */}
                        <Box
                            position="absolute"
                            w="90%"
                            h="90%"
                            top="5%"
                            left="5%"
                            bg="brand.accent"
                            borderRadius={{ base: '40px', md: '60px', lg: '100px' }}
                            transform="rotate(-5deg)"
                            zIndex={0}
                            opacity={0.15}
                        />

                        {/* Main Image Container */}
                        <Box
                            position="relative"
                            w="full"
                            aspectRatio={{ base: 4 / 5, md: 3 / 4, lg: 3 / 4 }}
                            borderRadius={{ base: '30px 80px 30px 30px', md: '40px 120px 40px 40px', lg: '60px 200px 60px 60px' }}
                            overflow="hidden"
                            zIndex={1}
                            border="2px solid rgba(201, 169, 110, 0.6)"
                            boxShadow="20px 30px 60px rgba(45,10,10,0.2)"
                        >
                            <Image
                                src={heroImg}
                                alt="Exquisite Wedding Cake"
                                objectFit="cover"
                                w="100%"
                                h="100%"
                            />
                        </Box>

                        {/* Floating Badge */}
                        <Box
                            position="absolute"
                            bottom="5%"
                            left="0%"
                            zIndex={3}
                        >
                            <Box
                                bg="rgba(45, 10, 10, 0.8)"
                                border="1px solid rgba(201, 169, 110, 0.4)"
                                boxShadow="0 8px 32px rgba(0,0,0,0.2)"
                                px={{ base: 3, md: 4 }}
                                py={{ base: 2, md: 3 }}
                                borderRadius={{ base: '12px', md: '16px' }}
                                display="flex"
                                alignItems="center"
                                gap={{ base: 2, md: 2.5 }}
                            >
                                <Box
                                    w={{ base: '30px', md: '36px' }}
                                    h={{ base: '30px', md: '36px' }}
                                    borderRadius={{ base: '10px', md: '12px' }}
                                    bg="linear-gradient(135deg, #C9A96E 0%, #B8944F 100%)"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    flexShrink={0}
                                >
                                    <Icon as={FaGem} color="brand.primary" boxSize={{ base: 3, md: 3.5 }} />
                                </Box>
                                <VStack align="start" spacing={0}>
                                    <Text fontWeight="800" color="brand.accent" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.1">
                                        100%
                                    </Text>
                                    <Text fontSize={{ base: '3xs', md: '2xs' }} color="rgba(245, 230, 211, 0.7)" fontWeight="600" textTransform="uppercase" letterSpacing="1px">
                                        Bespoke Design
                                    </Text>
                                </VStack>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}
