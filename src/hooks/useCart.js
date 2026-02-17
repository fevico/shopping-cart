import { useState, useEffect } from "react";

export function useCart() { 
 const [cart, setCart] = useState(() => {
    try {
        const savedCart = localStorage.getItem("cart")
        const parseData = savedCart ? JSON.parse(savedCart): []
        return Array.isArray(parseData) ? parseData : []
    } catch (error) {
        console.log("failed to load cart from local storage")
        return []
    }
 })

//  persist cart data when it changes
useEffect(() => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart))
  } catch (error) {
    console.log("failed to save cart to localstorage")
  }
}, [cart])

 useEffect(() => {
  const handleStorage = (e) => {
    if (e.key === "cart") {
      try {
        const parsed = e.newValue ? JSON.parse(e.newValue) : []
        if (Array.isArray(parsed)) {
          setCart(parsed)
        }
      } catch {
        console.error("Invalid cart data in localStorage")
      }
    }
  }

  window.addEventListener("storage", handleStorage)
  return () => window.removeEventListener("storage", handleStorage) 
}, [])

const addToCart = (product) => {
    try {
        // we would check the cart state and if the item the user is trying  to add is already in the carrt
        // then we would increase ttthe quantity 
        setCart(currentCart => {
         const existingProduct = currentCart.find((item) =>item.id === product.id)
         if(existingProduct){
            return currentCart.map((item) => item.id === product.id ? {
                ...item, quantity: item.quantity + 1
            }: item)
         }
         return [...currentCart, {...product, quantity: 1}]
        })
    } catch (error) {
        console.log("error adding item to cart ")
    }
}

const removeFromCart = (productId) => {
    try {
        setCart(currentItem => currentItem.filter((item) => item.id !== productId))
    } catch (error) {
        console.log("error removing item from cart", error)
    }
}

const updateQuantity = (productId, quantity) => {
    if(quantity < 1) return
    setCart(currentCart => currentCart.map(item => item.id === productId ?  {...item, quantity} : item))
 }

return {cart, addToCart, removeFromCart, updateQuantity}
  
}