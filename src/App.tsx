import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import HowItWorks from './components/HowItWorks'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'

function App() {
    return (
        <Box>
            <Header />
            <Hero />
            <Menu />
            <HowItWorks />
            <Gallery />
            <Testimonials />
            <About />
            <Contact />
            <Footer />
            <CartDrawer />
        </Box>
    )
}

export default App
