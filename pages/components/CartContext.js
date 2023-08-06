import { createContext, useState, useEffect } from "react"


export const CartContext= createContext({})

export function CartContextProvider({children}){
    const [cartProducts, setCartProducts] = useState([])
    useEffect(()=>{
        if(cartProducts?.length>0){
            localStorage.setItem('cart',JSON.stringify(cartProducts))
        }
    },[cartProducts])
    useEffect(()=>{
        if(localStorage.getItem('cart')){
            setCartProducts(JSON.parse(localStorage.getItem('cart')))
        }
        
    },[])

    function addProduct(productId){
        setCartProducts(prev=> [...prev, productId])
    }
    function removeProduct(productId){
        setCartProducts(prev=>{
            const pos= prev.indexOf(productId)
            if(pos!==-1){
                return prev.filter((value, index)=>index!==pos)
            }
            return prev
        })
        localStorage.clear()
    }
    function clearCart(){
        setCartProducts([])
        localStorage.clear()
    }
    return(
        <CartContext.Provider value={{cartProducts, setCartProducts, addProduct, removeProduct, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}