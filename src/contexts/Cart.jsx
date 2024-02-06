import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  // loading from local storage
  useEffect(() => {
    const getLocalStoredCart = JSON.parse(localStorage.getItem("cartItems"));
    if (getLocalStoredCart) {
      setCartItems(getLocalStoredCart);
    }
  }, []);

  //   adding to local storage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // function to add to cart
  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    console.log(cartItems);
  };

  // function to remove from cart
  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      if (isItemInCart.quantity > 1) {
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
        );
      } else {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
      }
    }
  };

  // function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // function to add the total
  const getCartTotal = () => {
    const total = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return total.toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
