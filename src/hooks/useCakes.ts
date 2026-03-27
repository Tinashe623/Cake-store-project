import { useState, useEffect, useCallback } from 'react'
import { cakesData, categories, galleryImages } from '../data/cakes'
import { getImageCount } from '../utils/imageLoader'
import { Cake, Category, GalleryImage } from '../types'

interface UseCakesResult {
    cakes: Cake[]
    categories: { id: Category; label: string }[]
    galleryImages: GalleryImage[]
    imageCount: number
    lastUpdated: number
    refresh: () => void
}

export function useCakes(): UseCakesResult {
    const [cakes, setCakes] = useState<Cake[]>(cakesData)
    const [cats, setCats] = useState(categories)
    const [gallery, setGallery] = useState<GalleryImage[]>(galleryImages)
    const [imageCount, setImageCount] = useState(getImageCount())
    const [lastUpdated, setLastUpdated] = useState(Date.now())

    const refresh = useCallback(() => {
        setCakes(cakesData)
        setCats(categories)
        setGallery(galleryImages)
        setImageCount(getImageCount())
        setLastUpdated(Date.now())
    }, [])

    useEffect(() => {
        refresh()

        const handleFocus = () => refresh()
        const handleVisibility = () => {
            if (document.visibilityState === 'visible') refresh()
        }

        window.addEventListener('focus', handleFocus)
        document.addEventListener('visibilitychange', handleVisibility)

        return () => {
            window.removeEventListener('focus', handleFocus)
            document.removeEventListener('visibilitychange', handleVisibility)
        }
    }, [refresh])

    return { cakes, categories: cats, galleryImages: gallery, imageCount, lastUpdated, refresh }
}

interface UseCakesByCategoryResult extends UseCakesResult {
    filteredCakes: Cake[]
}

export function useCakesByCategory(category: Category = 'all'): UseCakesByCategoryResult {
    const base = useCakes()

    const filteredCakes =
        category === 'all' ? base.cakes : base.cakes.filter((c) => c.category === category)

    return { ...base, filteredCakes }
}
