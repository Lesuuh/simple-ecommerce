import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);


//   adding to local storage
useEffect(()=> {
    localStorage.setItem("CartItem", JSON.stringify(cartItems))
}, [cartItems])

  // function to add to cart
  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) => {
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem;
        })
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // function to remove from cart
  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) => {
          cartItem.id == item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem;
        })
      );
    }
  };

  // function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // function to add the total
  const getCartTotal = () => {
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
};
