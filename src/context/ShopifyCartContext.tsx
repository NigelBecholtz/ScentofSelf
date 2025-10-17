import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import shopifyClient from '../lib/shopify'

interface ShopifyCartContextType {
  checkout: any
  addToCart: (variantId: string, quantity: number) => Promise<void>
  updateQuantity: (lineItemId: string, quantity: number) => Promise<void>
  removeFromCart: (lineItemId: string) => Promise<void>
  getTotalPrice: () => string
  getTotalItems: () => number
  openCheckout: () => void
  isLoading: boolean
}

const ShopifyCartContext = createContext<ShopifyCartContextType | undefined>(undefined)

export const ShopifyCartProvider = ({ children }: { children: ReactNode }) => {
  const [checkout, setCheckout] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Initialize or retrieve checkout
  useEffect(() => {
    const initializeCheckout = async () => {
      if (!shopifyClient) return

      try {
        const checkoutId = localStorage.getItem('shopify_checkout_id')
        
        if (checkoutId) {
          // Try to fetch existing checkout
          const existingCheckout = await shopifyClient.checkout.fetch(checkoutId)
          
          if (existingCheckout && !existingCheckout.completedAt) {
            setCheckout(existingCheckout)
            return
          }
        }
        
        // Create new checkout if none exists or completed
        const newCheckout = await shopifyClient.checkout.create()
        setCheckout(newCheckout)
        localStorage.setItem('shopify_checkout_id', newCheckout.id)
      } catch (error) {
        console.error('Error initializing checkout:', error)
      }
    }

    initializeCheckout()
  }, [])

  const addToCart = async (variantId: string, quantity: number) => {
    if (!shopifyClient || !checkout) return

    setIsLoading(true)
    try {
      const updatedCheckout = await shopifyClient.checkout.addLineItems(checkout.id, [
        {
          variantId,
          quantity,
        },
      ])
      setCheckout(updatedCheckout)
    } catch (error) {
      console.error('Error adding to cart:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateQuantity = async (lineItemId: string, quantity: number) => {
    if (!shopifyClient || !checkout) return

    setIsLoading(true)
    try {
      const updatedCheckout = await shopifyClient.checkout.updateLineItems(checkout.id, [
        {
          id: lineItemId,
          quantity,
        },
      ])
      setCheckout(updatedCheckout)
    } catch (error) {
      console.error('Error updating quantity:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const removeFromCart = async (lineItemId: string) => {
    if (!shopifyClient || !checkout) return

    setIsLoading(true)
    try {
      const updatedCheckout = await shopifyClient.checkout.removeLineItems(checkout.id, [
        lineItemId,
      ])
      setCheckout(updatedCheckout)
    } catch (error) {
      console.error('Error removing from cart:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const getTotalPrice = () => {
    if (!checkout || !checkout.totalPrice) return '0.00'
    return checkout.totalPrice.amount
  }

  const getTotalItems = () => {
    if (!checkout || !checkout.lineItems) return 0
    return checkout.lineItems.reduce((total: number, item: any) => total + item.quantity, 0)
  }

  const openCheckout = () => {
    if (checkout && checkout.webUrl) {
      window.location.href = checkout.webUrl
    }
  }

  return (
    <ShopifyCartContext.Provider
      value={{
        checkout,
        addToCart,
        updateQuantity,
        removeFromCart,
        getTotalPrice,
        getTotalItems,
        openCheckout,
        isLoading,
      }}
    >
      {children}
    </ShopifyCartContext.Provider>
  )
}

export const useShopifyCart = () => {
  const context = useContext(ShopifyCartContext)
  if (context === undefined) {
    throw new Error('useShopifyCart must be used within a ShopifyCartProvider')
  }
  return context
}

