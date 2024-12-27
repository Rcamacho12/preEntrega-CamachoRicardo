import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad
  const { itemId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const productRef = doc(db, "products", itemId); // Referencia al documento por ID
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          setProduct({ id: productSnap.id, ...productSnap.data() });
        } else {
          console.error("No se encontró el producto.");
        }
      } catch (error) {
        console.error("Error al cargar el producto desde Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  // Funciones para incrementar y decrementar cantidad
  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  if (loading) {
    return (
      <div className="text-center my-4">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando producto...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center my-4">Producto no encontrado.</div>;
  }

  return (
    <div className="container my-4">
      <div className="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        <div className="row g-0">
          {/* Imagen del producto */}
          <div className="col-md-4">
            <img
              src={product.img}
              className="img-fluid rounded-start"
              alt={product.name}
              style={{ objectFit: "cover", height: "100%" }}
            />
          </div>

          {/* Detalles del producto */}
          <div className="col-md-8">
            <div className="card-body d-flex flex-column justify-content-between">
              <h2 className="card-title mb-3">{product.name}</h2>
              <p className="card-text mb-2">Precio: <strong>${product.price}</strong></p>
              <p className="card-text mb-2">Categoría: {product.category}</p>

              {/* Controles de cantidad */}
              <div className="d-flex align-items-center my-3">
                <button className="btn btn-danger me-2" onClick={handleDecrement}>
                  -
                </button>
                <span className="fs-5 mx-2">{quantity}</span>
                <button className="btn btn-success ms-2" onClick={handleIncrement}>
                  +
                </button>
              </div>

              {/* Botón agregar al carrito */}
              <button className="btn btn-primary mt-3">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
