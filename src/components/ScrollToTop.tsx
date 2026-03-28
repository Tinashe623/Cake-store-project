import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop component that automatically scrolls to the top of the page
 * whenever the route changes. This ensures consistent navigation behavior
 * across the application.
 *
 * Features:
 * - Scrolls to top on route changes (both programmatic and browser navigation)
 * - Uses smooth scrolling for better UX
 * - Handles window scroll position reset
 * - Does not interfere with browser's scroll restoration for same-page navigation
 */
export default function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        // Scroll to top with smooth behavior when route changes
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })

        // If there are any scrollable containers that need resetting,
        // you can add them here. For example:
        // const scrollableContainer = document.getElementById('main-content')
        // if (scrollableContainer) {
        //     scrollableContainer.scrollTop = 0
        // }
    }, [pathname])

    return null
}