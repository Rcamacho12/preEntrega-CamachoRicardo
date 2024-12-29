import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/index.js"; // Importa la configuración de Firebase

const ItemListContainer = () => {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const { categoryId } = useParams(); // Obtén el parámetro de la categoría desde la URL

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Muestra el spinner de carga
      try {
        const productsCollection = collection(db, "products");
        const productsQuery = categoryId
          ? query(productsCollection, where("category", "==", categoryId)) // Filtra por categoría si existe
          : productsCollection;

        const querySnapshot = await getDocs(productsQuery);
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productsData); // Actualiza el estado con los productos obtenidos
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      } finally {
        setLoading(false); // Oculta el spinner una vez completada la operación
      }
    };

    fetchProducts();
  }, [categoryId]); // Vuelve a ejecutar si cambia la categoría

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">
        {categoryId ? `Productos de la categoría: ${categoryId}` : "Bienvenidos a TemaUno"}
      </h2>

      {loading ? (
        // Spinner de carga
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        // Renderiza la lista de productos
        <div className="row">
          <ItemList products={products} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
