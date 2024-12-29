import React from "react";
import { Link } from "react-router-dom";

export default function ItemList({ products }) {
  return (
    <>
      {products.length === 0 ? (
        <p className="text-center">No se encontraron productos.</p>
      ) : (
        products.map((product) => (
          <div className="col-md-3 mb-3" key={product.id}>
            <div className="card h-100">
              <img
                src={product.img|| "https://via.placeholder.com/300"} // Asegúrate de tener un campo 'image' en tus productos o usa una imagen por defecto
                className="card-img-top"
                alt={product.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Precio: ${product.price}</p>
                <Link to={`/item/${product.id}`} className="mt-auto btn btn-primary">
                  Ver Producto
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}
