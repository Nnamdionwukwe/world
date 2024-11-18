import { BrowserRouter, Route, Routes } from "react-router-dom";

import styles from "./App.module.css";
import Salads from "./Components/Salads";
import PageNotFound from "./Components/PageNotFound";
import HomePages from "./Components/HomePages";
import MainDishes from "./Components/MainDishes";
import SidesExtra from "./Components/SideExtra";
import GrillHouse from "./Components/GrillHouse";
import QuickChinese from "./Components/QuickChinese";
import { useState } from "react";
import SelectedDishMenu from "./Components/SelectedDishMenu";
import SpinnerFullPage from "../components/SpinnerFullPage";
import CartLoop from "./Components/CartLoop";
import TrackOrder from "./Components/TrackOrder";
import Packages from "./Components/Packages";
import Specialities from "./Components/Specialities";
import Reservations from "./Components/Reservations";
import Contacts from "./Components/Contacts";
import Login from "./Components/Login";
import AboutUs from "./Components/AboutUs";

const salads = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/3efc548a7601ac563d18cd3af549f31e.jpeg",
    dishName: "Chefs Grilled Chicken Salad",
    price: "10,000",
    note: "Tossed",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/e3737de2f87a40b97f3eca0ff12e10c7.jpeg",
    dishName: "Turkey and Egg Salad",
    price: "12,000",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/36e3e2939aba6b83f53281cff327728e.jpeg",
    dishName: "Vegan Delight",
    price: "9,000",
    id: crypto.randomUUID(),
  },
];

const localDishes = [
  {
    id: crypto.randomUUID(),
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/3d380af34d37be5a7bbe18102f02140b.jpg",
    dishName: " Egusi Soup",
    price: "8,000",
    note: "Egusi soup loaded with crayfish, Beef, Dry fish,",
  },

  {
    id: crypto.randomUUID(),
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/8d0fefdb487fa8c1daebae62c4d43c54.jfif",
    dishName: "Special Vegetable Soup",
    price: "8,500",
    note: "Vegetable soup loaded with crayfish, Beef, Dry fish,",
  },

  {
    id: crypto.randomUUID(),
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/a0b510d534f7371b62032bf4940e98a0.jfif",
    dishName: "Seafood Okoro",
    price: "25,000",
    note: "Delicious Okro soup loaded with an assortment of fish,",
  },
];

const CartItem = [
  {
    id: crypto.randomUUID(),
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/8d0fefdb487fa8c1daebae62c4d43c54.jfif",
    dishName: "Special Vegetable Soup",
    price: Number("25, 000"),
    note: "Vegetable soup loaded with crayfish, Beef, Dry fish,",
    qty: 1,
  },

  {
    id: crypto.randomUUID(),
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/a0b510d534f7371b62032bf4940e98a0.jfif",
    dishName: "Seafood Okoro",
    price: Number("25, 000"),
    note: "Delicious Okro soup loaded with an assortment of fish,",
    qty: 1,
  },
];

export default function App() {
  const [salad, setSalad] = useState(salads);
  const [localDish, setLocalDish] = useState(localDishes);
  const [selectedId, setSelectedId] = useState(null);
  const [cart, setCart] = useState([]);

  const [qty, setQty] = useState(1);

  function handleAddToCart(dish) {
    setCart((cart) => [...cart, dish]);

    setSelectedId(null);
  }

  function handleSelectId(dish) {
    // setSelectedId(id);
    setSelectedId((selected) => (selected?.id === dish?.id ? null : dish));
  }

  function handleDeleteItem(id) {
    setCart((cart) => cart.filter((cart) => cart.id !== id));
  }

  function handleUpdateCart(id) {
    setCart((cart) =>
      cart.map((cart) => (cart.id === id ? { ...cart, qty: qty + 1 } : cart))
    );
  }

  function handleDishClose() {
    setSelectedId(null);
  }

  function handleAddQty() {
    setQty((qty) => qty + 1);
  }
  //setQty((qty) => qty + 1);
  //console.log(selectedId);

  return (
    <div className={styles.mainDiv}>
      <>
        {selectedId && <SpinnerFullPage /> && (
          <div className={styles.enu}>
            <SelectedDishMenu
              handleDishClose={handleDishClose}
              selectedId={selectedId}
              handleAddToCart={handleAddToCart}
              qty={qty}
            />
          </div>
        )}
      </>

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePages
                handleSelectId={handleSelectId}
                salad={salad}
                localDish={localDish}
                cart={cart}
              />
            }
          />

          <Route
            path="salads"
            element={<Salads handleSelectId={handleSelectId} salad={salad} />}
          />

          <Route
            path="maindishes"
            element={
              <MainDishes
                handleSelectId={handleSelectId}
                localDish={localDish}
              />
            }
          />

          <Route
            path="cartLoop"
            element={
              <CartLoop
                handleAddQty={handleAddQty}
                cart={cart}
                handleDeleteItem={handleDeleteItem}
              />
            }
          />

          <Route path="sidesextra" element={<SidesExtra />} />

          <Route path="grillhouse" element={<GrillHouse />} />

          <Route path="quickchinese" element={<QuickChinese />} />

          <Route path="trackorder" element={<TrackOrder />} />

          <Route path="packages" element={<Packages />} />

          <Route path="specialities" element={<Specialities />} />

          <Route path="trackoder" element={<TrackOrder />} />

          <Route path="reservations" element={<Reservations />} />

          <Route path="contacts" element={<Contacts />} />

          <Route path="aboutus" element={<AboutUs />} />

          <Route path="login" element={<Login />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// import { useEffect, useState } from "reac0t";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import HomePage from "./pages/HomePage";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayOut from "./pages/AppLayout";
// import Login from "./pages/Login";
// import CityList from "./components/CityList";
// import CountryList from "./components/CountryList";
// import City from "./components/City";

// const BASE_URL = "http://localhost:9000";

// function App() {
//   const [cities, setCities] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   // function HandleDeleteCity(id) {
//   //   setCities((city) => city.filter((city) => city.id !== id));
//   // }

//   useEffect(function () {
//     async function FetchCities() {
//       setIsLoading(true);
//       setError("");
//       try {
//         const res = await fetch(`${BASE_URL}/cities`);

//         if (!res.ok) throw new Error("There was an error fetching data");

//         const data = await res.json();

//         console.log(data);
//         setCities(data);
//       } catch (err) {
//         setError(err.message);
//         console.error(err.message);
//         alert("There was an error loading data");
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     FetchCities();
//   }, []);

//   return (
//     <div>
//       {/* <h1>Hello Router!</h1> */}
//       <BrowserRouter>
//         <Routes>
//           <Route path="homepage" element={<HomePage />} />

//           <Route path="product" element={<Product />} />

//           <Route path="pricing" element={<Pricing />} />

//           <Route path="app" element={<AppLayOut />}>
//             <Route
//               index
//               element={
//                 <CityList cities={cities} isLoading={isLoading} error={error} />
//               }
//             />

//             <Route
//               path="cities"
//               element={
//                 <CityList cities={cities} isLoading={isLoading} error={error} />
//               }
//             />

//             <Route path="cities/:id" element={<City />} />

//             <Route
//               path="countries"
//               element={<CountryList cities={cities} isLoading={isLoading} />}
//             />

//             <Route path="form" element={<p>Form</p>} />
//           </Route>

//           <Route path="login" element={<Login />} />

//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
