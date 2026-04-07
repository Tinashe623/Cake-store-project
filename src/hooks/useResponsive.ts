import { useState, useEffect } from 'react'

export function useIsMobile(breakpoint = 768): boolean {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (typeof window === 'undefined') return

        const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
        setIsMobile(mq.matches)
        mq.addEventListener('change', handler)
        return () => mq.removeEventListener('change', handler)
    }, [breakpoint])

    return isMobile
}

export function usePrefersReducedMotion(): boolean {
    const [prefers, setPrefers] = useState(false)

    useEffect(() => {
        if (typeof window === 'undefined') return

        const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
        const handler = (e: MediaQueryListEvent) => setPrefers(e.matches)
        setPrefers(mq.matches)
        mq.addEventListener('change', handler)
        return () => mq.removeEventListener('change', handler)
    }, [])

    return prefers
}
