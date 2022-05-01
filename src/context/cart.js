import React, { useState, useEffect } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [localCart, setLocalCart] = useState();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      const total = [...cart].reduce((total, { amount, price }) => {
        return (total += amount * price);
      }, 0);
      setTotal(parseFloat(total.toFixed(2)));
    }
  }, [cart]);

  const increaseAmount = (id, category) => {
    if (cart.length > 0) {
      const updatedCart = [...cart].map((item) => {
        return item.id === id && item.category === category
          ? { ...item, amount: item.amount + 1 }
          : item;
      });
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const thecart = JSON.parse(localStorage.getItem("cart"));

      const updatedCart = [...thecart].map((item) => {
        return item.id === id && item.category === category
          ? { ...item, amount: item.amount + 1 }
          : item;
      });
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const decreaseAmount = (id, amount, category) => {
    if (cart.length > 0) {
      let updatedCart = [];
      if (amount === 1) {
        updatedCart = [...cart].filter(
          (item) => item.id !== id || item.category !== category
        );
      } else {
        updatedCart = [...cart].map((item) => {
          return item.id === id && item.category === category
            ? { ...item, amount: item.amount - 1 }
            : item;
        });
      }
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const thecart = JSON.parse(localStorage.getItem("cart"));

      let updatedCart = [];
      if (amount === 1) {
        updatedCart = [...thecart].filter(
          (item) => item.id !== id || item.category !== category
        );
      } else {
        updatedCart = [...thecart].map((item) => {
          return item.id === id && item.category === category
            ? { ...item, amount: item.amount - 1 }
            : item;
        });
      }
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };
  //change the title and quantity
  const addToCart = (book) => {
    const {
      id,
      title,
      price,
      image,
      quantity,
      category,
      featured,
      ProdctTypeId,
    } = book;
    const cartItem = [...cart].find(
      (item) => item.id === id && item.category === category
    );

    if (cartItem) {
      increaseAmount(id);
    } else {
      const cartItems = [
        ...cart,
        {
          id,
          title,
          image,
          quantity,
          category,
          featured,
          ProdctTypeId,
          price,
          amount: 1,
        },
      ];
      setCart(cartItems);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        addToCart,
        increaseAmount,
        decreaseAmount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
