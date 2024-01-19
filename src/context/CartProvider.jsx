import React from "react";
import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return [...cart, action.payload];
    }
  }
}

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
    const addItemToCart = (newCartItem) => {
        dispatch({
            type: "ADD_ITEM",
            payload: newCartItem,
          });
    }
  return (
    <CartContext.Provider value={{ cart, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// In order to not import useContext and CartContext in every child component where we want to use the data we can create a helper function. Whenever we required the data we can call this function

export function useCart() {
  return useContext(CartContext);
}
export default CartProvider;
