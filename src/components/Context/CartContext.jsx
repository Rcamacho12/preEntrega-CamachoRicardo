import { createContext, useContext, useState } from "react";

// Crear el contexto
const CartContext = createContext();

// Hook para usar el contexto más fácilmente
export const useCart = () => useContext(CartContext);

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Estado para los productos en el carrito

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevCart, product];
      }
    });
  };

  // Calcular el total de productos en el carrito
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};
