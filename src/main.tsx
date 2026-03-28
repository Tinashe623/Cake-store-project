import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import { theme } from './theme'
import { CartProvider } from './context/CartContext'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <CartProvider>
                    <App />
                </CartProvider>
            </ChakraProvider>
        </BrowserRouter>
    </StrictMode>,
)
