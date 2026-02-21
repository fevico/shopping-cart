import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Layout from "./components/layout";
import Order from "./pages/Order";

    
function App() {
 return (
    <Routes>
      <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/orders" element={<Order />} />

      </Route>
    </Routes>
 )
}  

export default App
