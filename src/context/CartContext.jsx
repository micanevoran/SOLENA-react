import React, { useState, createContext } from 'react'
export const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
   
    const addToCart = (item, cantidad) => { 
        if (isInCart(item.id)){
            sumarCantidad (item, cantidad)
        }else{
            setCart([...cart, {...item, cantidad}])
        }
    }
    
    const isInCart = (id) => {
        return cart.some(prod=>prod.id===id)
    }
    
    const sumarCantidad = (item, cantidad) =>{
        const cartActualizado = cart.map((prod => prod.id===item.id ? {...prod, cantidad} : prod))
        setCart(cartActualizado)
    }
    
    const deleteOne = (id) =>{
        const prodFiltrados = cart.filter((prod)=> prod.id !== id)
        setCart(prodFiltrados)
    }
    
    const totalPrecio = () => {
        let total = 0
        let copia = [...cart]
        copia.forEach((prod => total += prod.precio * prod.cantidad))
        return total
    }

    const totalUnidades = ()=> {
        let count = 0 
        let copia = [...cart]
        copia.forEach((prod => count += prod.cantidad))
        return count
    }

    const deleteAll = () => {
        setCart([])
    }

    return (
    <CartContext.Provider value={{cart, addToCart, deleteOne, totalPrecio, totalUnidades, deleteAll}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider