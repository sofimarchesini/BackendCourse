import { createContext, useState } from "react";
export const context = createContext();
export const { Provider } = context;

const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = producto => {
         if (cart.find(item => item.id === producto.id)) {
            setCart(cart.map(item => item.id === producto.id ? {
                ...item,quantity: item.quantity + producto.quantity
            } : item))

        } else {
            setCart([...cart, producto])}
    }

    const removeFromCart = (prod) => {
        setCart(cart.filter(item => item.id !== prod.id))
        prod.quantity = 0;
    }

    const clearCart = () => setCart([])
    const subTotal = (prod) => {return prod.price * prod.quantity }

    const sumQuantity = () => {
        let sum = 0
        cart.forEach(item => {
            sum += item.quantity
        })
        return sum
    }

    function freshTotal(){
        let tempTotal=0;
        cart.map(item => {
             tempTotal += parseInt(item.price*item.quantity);
        });
        console.log(tempTotal);
        return  tempTotal;
    }

    const context_values = {
        cart: cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        clearCart: clearCart,
        subTotal: subTotal,
        sumQuantity: sumQuantity,
        freshTotal: freshTotal
    }

    return <Provider value={ context_values }>{ children }</Provider>
}


export default CustomProvider;