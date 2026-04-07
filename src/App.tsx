import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import GalleryPage from './pages/GalleryPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
    return (
        <ErrorBoundary>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="menu" element={<MenuPage />} />
                    <Route path="gallery" element={<GalleryPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </ErrorBoundary>
    )
}

export default App
