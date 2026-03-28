import { lazy } from 'react'
import Hero from '../components/Hero'

const HowItWorks = lazy(() => import('../components/HowItWorks'))
const Testimonials = lazy(() => import('../components/Testimonials'))

export default function HomePage() {
    return (
        <>
            <Hero />
            <HowItWorks />
            <Testimonials />
        </>
    )
}