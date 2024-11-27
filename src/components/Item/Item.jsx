export default function Item({ id, name, price, imagen }) {
    return (
      <div className="card h-100">
        <img src={imagen} className="card-img-top" alt={name} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Precio: ${price}</p>
          <button className="btn btn-primary mt-auto">Ver Detalle</button>
        </div>
      </div>
    );
  }
  