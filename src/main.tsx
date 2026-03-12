import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import { theme } from './theme'
import { CartProvider } from './context/CartContext'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider theme={theme}>
            <CartProvider>
                <App />
            </CartProvider>
        </ChakraProvider>
    </StrictMode>,
)
