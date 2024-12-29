import React from "react";
import { useCart } from "../Context/CartContext";

export default function Cart() {
  const { cart, getTotalPrice, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <div className="text-center my-4">El carrito está vacío.</div>;
  }

  return (
    <div className="container my-4">
      <h1>Carrito de Compras</h1>
      <ul className="list-group mb-4">
        {cart.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{item.name}</h5>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${item.price}</p>
            </div>
            <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <h3>Total: ${getTotalPrice()}</h3>
      <button className="btn btn-warning me-3" onClick={clearCart}>
        Vaciar Carrito
      </button>
      <button className="btn btn-success">Finalizar Compra</button>
    </div>
  );
}
