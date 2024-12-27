import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const { categoryId } = useParams(); // Obtén el parámetro de la categoría desde la URL

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Mostrar el spinner de carga
      try {
        let productsCollection = collection(db, "products");

        // Si hay una categoría, crear una consulta filtrada
        if (categoryId) {
          const q = query(productsCollection, where("category", "==", categoryId));
          productsCollection = q;
        }

        const querySnapshot = await getDocs(productsCollection);
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      } finally {
        setLoading(false); // Ocultar el spinner una vez que la operación termina
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">
        {categoryId ? `Productos de la categoría: ${categoryId}` : "Bienvenidos a TemaUno"}
      </h2>

      {/* Spinner de carga */}
      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        /* Renderiza la lista de productos */
        <div className="row">
          <ItemList products={products} />
        </div>
      )}
    </div>
  );
}
