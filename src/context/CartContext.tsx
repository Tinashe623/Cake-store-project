import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { CartItem, Cake } from '../types'

interface CartContextType {
    items: CartItem[]
    addToCart: (cake: Cake, selectedFlavor?: string, selectedSize?: string) => void
    removeFromCart: (cakeId: number) => void
    updateQuantity: (cakeId: number, quantity: number) => void
    clearCart: () => void
    totalItems: number
    subtotal: number
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const STORAGE_KEY = 'tarie-cakes-cart'

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY)
            return stored ? JSON.parse(stored) : []
        } catch {
            return []
        }
    })
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    }, [items])

    const addToCart = (cake: Cake, selectedFlavor?: string, selectedSize?: string) => {
        setItems(prev => {
            const existing = prev.find(item =>
                item.cake.id === cake.id &&
                item.selectedFlavor === selectedFlavor &&
                item.selectedSize === selectedSize
            )
            if (existing) {
                return prev.map(item =>
                    item === existing
                        ? { ...item, quantity: Math.min(item.quantity + 1, 10) }
                        : item
                )
            }
            return [...prev, { cake, quantity: 1, selectedFlavor, selectedSize }]
        })
        setIsOpen(true)
    }

    const removeFromCart = (cakeId: number) => {
        setItems(prev => prev.filter(item => item.cake.id !== cakeId))
    }

    const updateQuantity = (cakeId: number, quantity: number) => {
        if (quantity < 1 || quantity > 10) return
        setItems(prev =>
            prev.map(item =>
                item.cake.id === cakeId ? { ...item, quantity } : item
            )
        )
    }

    const clearCart = () => {
        setItems([])
    }

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce((sum, item) => sum + item.cake.price * item.quantity, 0)

    const onOpen = () => setIsOpen(true)
    const onClose = () => setIsOpen(false)

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalItems,
                subtotal,
                isOpen,
                onOpen,
                onClose,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}
