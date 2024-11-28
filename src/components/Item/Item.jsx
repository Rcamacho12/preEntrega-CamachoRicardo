import { Link } from "react-router-dom";

export default function Item({ id, name, price, img }) {
    return (
        <div className="card h-100">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Precio: ${price}</p>
            <Link to={`/item/${id}`} className="btn btn-primary mt-auto">
                Ver Detalle
            </Link>
        </div>
    </div>
    );
}
