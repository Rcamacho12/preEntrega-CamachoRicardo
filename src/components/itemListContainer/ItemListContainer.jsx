import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../../asyncMock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const { categoryId } = useParams(); // Obtén el parámetro de la categoría desde la URL

    useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts;

    asyncFunction(categoryId) // Si hay una categoría, llama a getProductsByCategory
      .then((data) => setProducts(data)) // Actualiza los productos en el estado
      .catch((error) => console.error("Error al cargar los productos:", error)); // Maneja errores
  }, [categoryId]); // Ejecuta el efecto cada vez que cambia categoryId

    return (
    <div className="container my-4">
        <h2 className="text-center mb-4">
            {categoryId ? `Productos de la categoría: ${categoryId}` : "Bienvenidos a TemaUno"}
        </h2>
      {/* Renderiza la lista de productos */}
        <ItemList products={products} />
    </div>
    );
}
