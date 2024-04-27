import React, { createContext, useEffect, useState } from "react";

// Create context for cart
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Create state of cart
  const [cart, setCart] = useState([]);
  //total price state
  const [total, setTotal] = useState(0);
  //item amount state
  const [itemAmount, SetitemAmount] = useState(0);
  //update total price
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  });
  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      SetitemAmount(amount);
    }
  }, [cart]);
  //Add to cart
  const addToCart = (id, item) => {
    // creates a new object called newItem by copying all the properties from the item object and adding a new property called amount with a value of 1. 
    // This amount property keeps track of how many of this item are in the cart.
    const newItem = { ...item, amount: 1 };
    console.log(`${item.title} added to the cart`);

    // Check if item is already in the cart
    const cartItemIndex = cart.findIndex((cartItem) => cartItem.id === id);
    console.log("hi", cartItemIndex);

    if (cartItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[cartItemIndex].amount += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  console.log("i am", cart);
  //remove from cart
  const removeFromCart = (id) => {
    const newcart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newcart);
  };
  //clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Increment the quantity of a product in the cart
  const increaseAmount = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };
  // decreament the quantity of a product in the cart

  const decreaseAmount = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.amount > 1) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    setCart(updatedCart.filter((item) => item.amount > 0)); // Remove items with amount <= 0
  };

  return (
    <div>
      <CartContext.Provider
        value={{
          cart,
          addToCart,
          removeFromCart,
          clearCart,
          increaseAmount,
          decreaseAmount,
          itemAmount,
          total,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartProvider;
