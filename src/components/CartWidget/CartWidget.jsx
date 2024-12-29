import React from "react";
import { useCart } from "../Context/CartContext";

export default function CartWidget() {
  const { getTotalQuantity } = useCart(); // Obtén la cantidad total de productos

  return (
    <button
      type="button"
      className="btn btn-secondary position-relative"
      data-bs-theme="dark"
    >
      <i className="bi bi-cart"></i> Carrito
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {getTotalQuantity()}
        <span className="visually-hidden">productos en el carrito</span>
      </span>
    </button>
  );
}
