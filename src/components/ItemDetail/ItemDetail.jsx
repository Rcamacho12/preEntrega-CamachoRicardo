import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductByID } from "../../../asyncMock";

export default function ItemDetail() {
  const { id } = useParams(); // Capturamos el ID de la URL
    const [product, setProduct] = useState(null);

    // Obtener el producto específico según su ID
    useEffect(() => {
        getProductByID(Number(id)).then((product) => {
        setProduct(product);
        });
    }, [id]);

    if (!product) {
        return <div className="text-center">Cargando...</div>;
    }

    return (
        <div className="container mt-5">
        <h2 className="text-center mb-4">Detalles del producto</h2>
        <div className="card mx-auto" style={{ maxWidth: "540px" }}>
            <img
            src={product.imagen}
            className="card-img-top"
            alt={product.name}
            style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">
                <strong>Precio:</strong> ${product.price}
            </p>
            <div className="d-flex align-items-center">
                <input
                type="number"
                className="form-control me-2"
                style={{ width: "80px" }}
                min="1"
                defaultValue="1"
                />
                <button className="btn btn-primary">Agregar al Carrito</button>
            </div>
            </div>
        </div>
        </div>
    );
}
