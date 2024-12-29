import React from "react";

export default function ItemDetail({ product, quantity, onIncrement, onDecrement, onAddToCart }) {
  return (
    <div className="container my-4">
      <div className="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        <div className="row g-0">
          {/* Imagen del producto */}
          <div className="col-md-4">
            <img
              src={product.img || "https://via.placeholder.com/300"}
              className="img-fluid rounded-start"
              alt={product.name}
              style={{ objectFit: "cover", height: "100%" }}
            />
          </div>

          {/* Detalles del producto */}
          <div className="col-md-8">
            <div className="card-body d-flex flex-column justify-content-between">
              <h2 className="card-title mb-3">{product.name}</h2>
              <p className="card-text mb-2">
                Precio: <strong>${product.price}</strong>
              </p>
              <p className="card-text mb-2">Categoría: {product.category}</p>

              {/* Controles de cantidad */}
              <div className="d-flex align-items-center my-3">
                <button className="btn btn-danger me-2" onClick={onDecrement}>
                  -
                </button>
                <span className="fs-5 mx-2">{quantity}</span>
                <button className="btn btn-success ms-2" onClick={onIncrement}>
                  +
                </button>
              </div>

              {/* Botón agregar al carrito */}
              <button
                className="btn btn-primary mt-3"
                onClick={() => onAddToCart(product, quantity)}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
