import { lazy } from 'react'

const Gallery = lazy(() => import('../components/Gallery'))

export default function GalleryPage() {
    return <Gallery />
}