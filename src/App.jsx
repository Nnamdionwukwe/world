import { BrowserRouter, Route, Routes } from "react-router-dom";

import styles from "./App.module.css";
import Salads from "./Components/Salads";
import PageNotFound from "./Components/PageNotFound";
import HomePages from "./Components/HomePages";
import MainDishes from "./Components/MainDishes";
import SidesExtra from "./Components/SideExtra";
import GrillHouse from "./Components/GrillHouse";
import QuickChinese from "./Components/QuickChinese";
import { useEffect, useState } from "react";
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
import Spinner from "./Components/Spinner";
import ErrorMessage from "./Components/ErrorMessage";

export default function App() {
  const [salad, setSalad] = useState([]);
  const [localDish, setLocalDish] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [cart, setCart] = useState([]);

  const [qty, setQty] = useState(1);

  const BASE_URL = "http://localhost:5000";

  useEffect(function () {
    async function fetchSalads() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`${BASE_URL}/salads`);

        if (!res.ok)
          throw new Error("Something went wrong with fetching dishes");

        const data = await res.json();

        if (data.Reponse === "False")
          throw new Error("Dish not Found, Try new Dish");

        setSalad(data);
        setError("");
      } catch (err) {
        console.error(err.message);

        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSalads();
  }, []);

  useEffect(function () {
    async function fetchSalads() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`${BASE_URL}/localDishes`);

        if (!res.ok)
          throw new Error("Something went wrong with fetching dishes");

        const data = await res.json();

        if (data.Reponse === "False")
          throw new Error("Dish not Found, Try new Dish");

        setLocalDish(data);
        setError("");
      } catch (err) {
        console.error(err.message);

        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSalads();
  }, []);

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
              <>
                {isLoading && <Spinner />}

                {error && <ErrorMessage message={error} />}

                {!isLoading && !error && (
                  <HomePages
                    handleSelectId={handleSelectId}
                    salad={salad}
                    localDish={localDish}
                    cart={cart}
                    isLoading={isLoading}
                  />
                )}
              </>
            }
          />

          <Route
            path="salads"
            element={
              <>
                {isLoading && <Spinner />}

                {error && <ErrorMessage />}

                {!isLoading && !error && (
                  <Salads
                    handleSelectId={handleSelectId}
                    salad={salad}
                    cart={cart}
                    isLoading={isLoading}
                  />
                )}
              </>
            }
          />

          <Route
            path="maindishes"
            element={
              <>
                {isLoading && <Spinner />}

                {error && <ErrorMessage />}

                {!isLoading && !error && (
                  <MainDishes
                    handleSelectId={handleSelectId}
                    localDish={localDish}
                    cart={cart}
                    isLoading={isLoading}
                  />
                )}
              </>
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
