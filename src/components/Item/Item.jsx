import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Item({ product }) {
  return (
    <div className="card h-100">
      <img
        src={product.img || "https://via.placeholder.com/300"}
        alt={product.name}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        {/* El enlace ahora usa el ID del documento */}
        <Link to={`/item/${product.id}`} className="btn btn-primary">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
}

Item.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired, // Ahora utilizamos el ID del documento.
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string,
  }).isRequired,
};
