
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Layout from "./components/Layout.jsx";
import Error404 from "./components/Error.jsx";
import Cart from "./pages/cart.jsx";
import Checkout from "./context/Checkout.jsx";
import Agregar from "./components/Agregar.jsx";

function App() {


  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<ItemListContainer />} /> 
          <Route path="/productos/:categoriaId" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error404 />} /> 
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} /> 
        </Route>
        
      </Routes>

    </BrowserRouter>
    {/*<Agregar />*/} 
    </> 
  )
}

export default App
