const imageModules = import.meta.glob('/src/assets/images/*.{png,jpg,jpeg,gif,webp,svg}', {
    eager: true,
    query: '?url',
    import: 'default',
}) as Record<string, string>

export interface DiscoveredImage {
    url: string
    filename: string
    name: string
}

const ALL_IMAGES: DiscoveredImage[] = Object.entries(imageModules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, url]) => {
        const filename = path.replace('/src/assets/images/', '')
        return {
            url,
            filename,
            name: filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
        }
    })

export const getAvailableImages = (): DiscoveredImage[] => ALL_IMAGES

export const getImageCount = (): number => ALL_IMAGES.length
