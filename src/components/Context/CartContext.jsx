import { createContext, useContext, useState } from "react";

// Crear el contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto
export const useCart = () => {
  return useContext(CartContext);
};

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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
      }
      return [...prevCart, product];
    });
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Función para obtener la cantidad total de productos en el carrito
  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Función para obtener el precio total del carrito
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
