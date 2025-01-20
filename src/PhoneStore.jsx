import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./storeComponents/NavBar";
import { Cart } from "./pages/cart/Cart";
import { Shop } from "./pages/shop/Shop";

export default function PhoneStore() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
