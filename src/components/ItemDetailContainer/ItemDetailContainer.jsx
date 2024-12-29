import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/index.js";
import { useCart } from "../Context/CartContext.jsx"; // Importa el contexto
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { itemId } = useParams();
  const { addToCart } = useCart(); // Accede a la función para agregar al carrito

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const productRef = doc(db, "products", itemId);
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

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
      alert("Producto agregado al carrito");
    }
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
    <ItemDetail
      product={product}
      quantity={quantity}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onAddToCart={handleAddToCart}
    />
  );
}
