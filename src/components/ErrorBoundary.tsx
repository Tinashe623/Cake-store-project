import { Component, ReactNode } from 'react'
import { Box, Text, Button, VStack } from '@chakra-ui/react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box p={8} textAlign="center">
          <VStack spacing={4}>
            <Text fontSize="xl" color="red.500">
              Something went wrong.
            </Text>
            <Text>
              {this.state.error?.message}
            </Text>
            <Button onClick={() => this.setState({ hasError: false })}>
              Try again
            </Button>
          </VStack>
        </Box>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary