import { lazy } from 'react'

const Menu = lazy(() => import('../components/Menu'))

export default function MenuPage() {
    return <Menu />
}