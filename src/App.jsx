import {  BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import styles from "./App.module.css";
import Salads from "./Components/Salads";
import PageNotFound from "./Components/PageNotFound";
import HomePages from "./Components/HomePages";
import MainDishes from "./Components/MainDishes";
import SidesExtra from "./Components/SidesExtra";
import GrillHouse from "./Components/GrillHouse";
import QuickChinese from "./Components/QuickChinese";
import Paster from "./Components/Paster";
import Starter from "./Components/Starter";
import Tacos from "./Components/Tacos";
import QuickEats from "./Components/QuickEats";
import Whiskey from "./Components/Whiskey";
import Brandy from "./Components/Brandy";
import Vodka from "./Components/Vodka";
import Gin from "./Components/Whiskey";
import Tequila from "./Components/Tequila";
import Champagne from "./Components/Champagne";
import SparklingWine from "./Components/SparklingWine";
import RedWine from "./Components/RedWine";
import WhiteWine from "./Components/WhiteWine";
import Classic from "./Components/Classic";
import Smoothies from "./Components/Smoothies";
import Mocktails from "./Components/Mocktails";
import Special from "./Components/Special";
import Fresh from "./Components/Fresh";
import Parfait from "./Components/Parfait";
import MilkShakes from "./Components/MilkShakes";
import Beer from "./Components/Beer";
import EnergyDrinks from "./Components/EnergyDrinks";
import Shisha from "./Components/Shisha";
import SoftDrinks from "./Components/SoftDrinks";

import SelectedDishMenu from "./Components/SelectedDishMenu";
import CartLoop from "./Components/CartLoop";
import TrackOrder from "./Components/TrackOrder";
import Packages from "./Components/Packages";
import Specialities from "./Components/Specialities";
import Reservations from "./Components/Reservations";
import Contacts from "./Components/Contacts";
import Login from "./Components/Login";
import AboutUs from "./Components/AboutUs";
import Spinner from "./Components/Spinner";
import FullDishImg from "./Components/FullDishImg";
import CheckOut from "./Components/CheckOut";
import SignUp from "./Components/SignUp";
import { ShopContextProvider } from "./context/ShopContextProvider";
import FooterHeader from "./Components/FotterHeader";

const carts = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/3efc548a7601ac563d18cd3af549f31e.jpeg",
    dishName: "Chefs Grilled Chicken Salad",
    price: 10,
    note: "Tossed",
    id: crypto.randomUUID(),
    qty: 2,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/e3737de2f87a40b97f3eca0ff12e10c7.jpeg",
    dishName: "Turkey and Egg Salad",
    price: 12,
    pri: 5,
    id: crypto.randomUUID(),
    qty: 1,
  },
];

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  const [selectedId, setSelectedId] = useState(null);

  function handleSelectId(dish) {
    setSelectedId(dish);
  }

  // const [cart, setCart] = useState([]);

  // useEffect(
  //   function () {
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   },
  //   [cart]
  // );

  // function handleAddToCart(dish) {
  //   setCart((cart) => [...cart, dish]);

  //   setSelectedId(null);
  // }

  // function handleSelectId(dish) {
  //   setSelectedId(dish);
  // }

  // function handleDeleteItem(id) {
  //   setCart((cart) => cart?.filter((cart) => cart.id !== id));
  // }

  // function handleDishClose() {
  //   setSelectedId(null);
  // }

  // function handleBillSubmit(value) {
  //   setCart((cart) =>
  //     cart.map((cart) =>
  //       cart.id === selectedId?.id ? { ...cart, qty: cart.qty + value } : cart
  //     )
  //   );
  // }
  //console.log(sidesExtra);

  // const BASE_URL = "http://localhost:5000";

  // useEffect(function () {
  //   async function fetchSalads() {
  //     try {
  //       setIsLoading(true);
  //       const res = await fetch(`${BASE_URL}/salads`);

  //       if (!res.ok)
  //         throw new Error("Something went wrong with fetching dishes");

  //       const data = await res.json();

  //       setSalad(data);
  //     } catch (err) {
  //       console.error(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchSalads();
  // }, []);

  // useEffect(function () {
  //   async function fetchSalads() {
  //     try {
  //       setIsLoading(true);
  //       const res = await fetch(`${BASE_URL}/localDishes`);

  //       if (!res.ok)
  //         throw new Error("Something went wrong with fetching dishes");

  //       const data = await res.json();

  //       setLocalDish(data);
  //     } catch (err) {
  //       console.error(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchSalads();
  // }, []);

  return (
    <div className={styles.mainDiv}>
      <ShopContextProvider>
        <>
          {isLoading && <Spinner />}

          <div className={styles.enu}>
            {selectedId && (
              <SelectedDishMenu
                selectedId={selectedId}
                setSelectedId={setSelectedId}
              />
            )}
          </div>
        </>

        <BrowserRouter>
          <Routes>
            <Route
              path="homepages"
              element={
                <>
                  {isLoading && <Spinner />}

                  {/* {error && <ErrorMessage message={error} />} */}

                  {!isLoading && (
                    <HomePages
                      handleSelectId={handleSelectId}
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

                  {/* {error && <ErrorMessage />} */}

                  {!isLoading && (
                    <Salads
                      handleSelectId={handleSelectId}
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

                  {/* {error && <ErrorMessage />} */}

                  {!isLoading && (
                    <MainDishes
                      handleSelectId={handleSelectId}
                      isLoading={isLoading}
                    />
                  )}
                </>
              }
            />

            <Route
              path="sidesextra"
              element={<SidesExtra handleSelectId={handleSelectId} />}
            />

            <Route
              path="grillhouse"
              element={<GrillHouse handleSelectId={handleSelectId} />}
            />

            <Route
              path="quickchinese"
              element={<QuickChinese handleSelectId={handleSelectId} />}
            />

            <Route
              path="paster"
              element={<Paster handleSelectId={handleSelectId} />}
            />

            <Route
              path="starter"
              element={<Starter handleSelectId={handleSelectId} />}
            />

            <Route
              path="tacos"
              element={<Tacos handleSelectId={handleSelectId} />}
            />

            <Route
              path="quickeats"
              element={<QuickEats handleSelectId={handleSelectId} />}
            />

            <Route
              path="whiskey"
              element={<Whiskey handleSelectId={handleSelectId} />}
            />

            <Route
              path="brandy"
              element={<Brandy handleSelectId={handleSelectId} />}
            />

            <Route
              path="vodka"
              element={<Vodka handleSelectId={handleSelectId} />}
            />

            <Route
              path="gin"
              element={<Gin handleSelectId={handleSelectId} />}
            />

            <Route
              path="tequila"
              element={<Tequila handleSelectId={handleSelectId} />}
            />

            <Route
              path="champagne"
              element={<Champagne handleSelectId={handleSelectId} />}
            />

            <Route
              path="sparkilingwine"
              element={<SparklingWine handleSelectId={handleSelectId} />}
            />

            <Route
              path="RedWine"
              element={<RedWine handleSelectId={handleSelectId} />}
            />

            <Route
              path="WhiteWine"
              element={<WhiteWine handleSelectId={handleSelectId} />}
            />

            <Route
              path="Classiccocktail"
              element={<Classic handleSelectId={handleSelectId} />}
            />

            <Route
              path="Smoothies"
              element={<Smoothies handleSelectId={handleSelectId} />}
            />

            <Route
              path="MockTails"
              element={<Mocktails handleSelectId={handleSelectId} />}
            />

            <Route
              path="MilkShakes"
              element={<MilkShakes handleSelectId={handleSelectId} />}
            />

            <Route
              path="Parfait"
              element={<Parfait handleSelectId={handleSelectId} />}
            />

            <Route
              path="beer"
              element={<Beer handleSelectId={handleSelectId} />}
            />

            <Route
              path="energydrink"
              element={<EnergyDrinks handleSelectId={handleSelectId} />}
            />

            <Route
              path="Shisha"
              element={<Shisha handleSelectId={handleSelectId} />}
            />

            <Route
              path="softdrink"
              element={<SoftDrinks handleSelectId={handleSelectId} />}
            />

            <Route
              path="specialjuice"
              element={<Special handleSelectId={handleSelectId} />}
            />

            <Route
              path="freshjuices"
              element={<Fresh handleSelectId={handleSelectId} />}
            />

            <Route
              path="cartLoop"
              element={
                <CartLoop isLoading={isLoading} selectedId={selectedId} />
              }
            />

            {/* <Route path="AccountSignUp" element={<AccountSignUp />} />

          <Route path="AccountSignIn" element={<AccountSignIn />} /> */}

            <Route
              path="FullDishImg"
              element={<FullDishImg selectedId={selectedId} />}
            />

            <Route path="trackorder" element={<TrackOrder />} />

            <Route path="packages" element={<Packages />} />

            <Route path="specialities" element={<Specialities />} />

            <Route path="trackoder" element={<TrackOrder />} />

            <Route path="reservations" element={<Reservations />} />

            <Route path="contacts" element={<Contacts />} />

            <Route path="aboutus" element={<AboutUs />} />

            <Route path="login" element={<Login />} />

            <Route index path="/" element={<SignUp />} />

            <Route path="checkout" element={<CheckOut />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>

          <FooterHeader />
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}
