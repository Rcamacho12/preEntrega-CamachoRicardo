import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/index.js";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let q;

        if (categoryId) {
          q = query(collection(db, "products"), where("category", "==", categoryId));
        } else {
          q = collection(db, "products");
        }

        const querySnapshot = await getDocs(q);

        const fetchedProducts = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Este es el ID único del documento
          ...doc.data(),
        }));

        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error al cargar los productos desde Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return (
      <div className="text-center my-4">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando productos...</span>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center my-4">
        No se encontraron productos {categoryId ? `en la categoría "${categoryId}"` : ""}.
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="text-center my-4">
        {categoryId ? `Categoría: ${categoryId}` : "Todos los Productos"}
      </h1>
      <ItemList products={products} />
    </div>
  );
}
