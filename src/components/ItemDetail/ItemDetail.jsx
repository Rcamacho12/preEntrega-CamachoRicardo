import { useNavigate } from "react-router-dom";

export default function ItemDetail({ name, img, price, description, quantity, onIncrement, onDecrement, onAddToCart }) {
  const navigate = useNavigate();

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6">
          <img src={img} alt={name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{name}</h2>
          <p>{description}</p>
          <h4>${price}</h4>
          <div className="d-flex align-items-center my-3">
            <button
              className="btn btn-danger me-2"
              onClick={onDecrement}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button className="btn btn-success ms-2" onClick={onIncrement}>
              +
            </button>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              onAddToCart();
              navigate("/checkout"); // Redirige al usuario a la página de checkout
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
