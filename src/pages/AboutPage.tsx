import { lazy } from 'react'

const About = lazy(() => import('../components/About'))

export default function AboutPage() {
    return <About />
}