import { lazy } from 'react'

const Contact = lazy(() => import('../components/Contact'))

export default function ContactPage() {
    return <Contact />
}