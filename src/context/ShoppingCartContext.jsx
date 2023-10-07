import {useState, createContext} from 'react'

export const CartContext = createContext(null)


const ShoppingCartProvider = ({children}) => {
  const [cart, setCart] = useState([])

  const addItem = (item,quantity) => {
    if(!isInCart(item.id))  {
      setCart(prev => [...prev, {...item,quantity}])
    } else {
      console.error('El producto ya fue agregado')
    }
  }

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
  }

  const clearCart = () => {
    setCart ([])
  }

  const isInCart = () => {
    return cart.some(prod => prod.id === itemId)
  }


  return (
    <CartContext.Provider value={{setCart, addItem, removeItem, clearCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default ShoppingCartProvider