import { Box, Heading, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
    return (
        <Box
            minH="100vh"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            p={8}
        >
            <Heading size="4xl" color="brand.primary" mb={4}>
                404
            </Heading>
            <Heading size="lg" mb={4}>
                Page Not Found
            </Heading>
            <Text mb={8} color="gray.600">
                The page you're looking for doesn't exist.
            </Text>
            <Button as={Link} to="/" colorScheme="brand">
                Go Home
            </Button>
        </Box>
    )
}