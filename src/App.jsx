import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./components/Context/CartContext";


function App() {
  return (
    <CartProvider>
      <BrowserRouter >
        <NavBar title={"TemaUno"} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer  />} />

          
        </Routes>
      </BrowserRouter>
      </CartProvider>
  );
}

export default App;
