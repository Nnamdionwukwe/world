import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./storeComponents/NavBar";
import { Cart } from "./pages/cart/Cart";
import { Shop } from "./pages/shop/Shop";
import { ShopContextProvider } from "./context/ShopContextProvider";

export default function PhoneStore() {
  return (
    <div>
      <ShopContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}
