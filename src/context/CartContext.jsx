import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (name, price, options = {}) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.name === name);

      if (existingItem) {
        return prev.map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prev,
        {
          id: Date.now(),
          name,
          price: Number(price),
          options,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

const total = cart.reduce(
  (sum, item) => sum + Number(item.price) * (item.quantity || 1),
  0
).toFixed(2);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);