import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../asyncMock";

export default function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        getProducts()
        .then((products) => {
            const foundProduct = products.find((p) => p.id === parseInt(itemId));
            setProduct(foundProduct);
        })
        .catch((error) => console.error("Error al cargar el producto:", error));
    }, [itemId]);

    if (!product) {
        return <div>Cargando producto...</div>;
    }

    return (
        <div className="container my-4">
        <h2>{product.name}</h2>
        <p>Precio: ${product.price}</p>
        <p>Categoría: {product.category}</p>
        <button className="btn btn-primary">Agregar al carrito</button>
        </div>
    );
}
