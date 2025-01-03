import React from "react";
import PropTypes from "prop-types";
import Item from "../Item/Item";

export default function ItemList({ products }) {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-3 mb-3">
          <Item product={product} />
        </div>
      ))}
    </div>
  );
}

ItemList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      img: PropTypes.string,
    })
  ).isRequired,
};
