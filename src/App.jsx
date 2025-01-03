import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Checkout from "./components/Checkout/Checkout"; // Importar Checkout
import { CartProvider } from "./components/Context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar title={"TemaUno"} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} /> {/* Nueva ruta */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
