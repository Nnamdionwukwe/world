import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import styles from "./App.module.css";
import Salads from "./Components/Salads";
import PageNotFound from "./Components/PageNotFound";
import HomePages from "./Components/HomePages";
import MainDishes from "./Components/MainDishes";
import SidesExtra from "./Components/SideExtra";
import GrillHouse from "./Components/GrillHouse";
import QuickChinese from "./Components/QuickChinese";
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

const salads = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/3efc548a7601ac563d18cd3af549f31e.jpeg",
    dishName: "Chefs Grilled Chicken Salad",
    price: "10,000",
    note: "Tossed",
    id: 2736454,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/e3737de2f87a40b97f3eca0ff12e10c7.jpeg",
    dishName: "Turkey and Egg Salad",
    price: "12,000",
    id: 273645434,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/36e3e2939aba6b83f53281cff327728e.jpeg",
    dishName: "Vegan Delight",
    price: "9,000",
    id: 27364548745,
  },
];

const localDishes = [
  {
    id: 4775869,
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/3d380af34d37be5a7bbe18102f02140b.jpg",
    dishName: " Egusi Soup",
    price: "8,000",
    note: "Egusi soup loaded with crayfish, Beef, Dry fish,",
  },
  {
    id: 4775869864,
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/8d0fefdb487fa8c1daebae62c4d43c54.jfif",
    dishName: "Special Vegetable Soup",
    price: "8,500",
    note: "Vegetable soup loaded with crayfish, Beef, Dry fish,",
  },

  {
    id: 4775869095,
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/a0b510d534f7371b62032bf4940e98a0.jfif",
    dishName: "Seafood Okoro",
    price: "25,000",
    note: "Delicious Okro soup loaded with an assortment of fish,",
  },

  {
    id: 47758690951,
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/a655ad4fccefb0aa66f55e9486681c7b.jfif",
    dishName: "Jollof Rice",
    price: "11,000",
    note: "Delicious and flavourful Nigerian Jollof rice, served,",
  },

  {
    id: 477586909512,
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/a9b5c72198ce789bd9bd054b97a34d24.jfif",
    dishName: "Nigerian Fried Rice ",
    price: "12,000",
    note: "Delicious and flavourful Nigerian style friedrce,",
  },

  {
    id: 4775869095123,
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/045e1a2489c95a527e057521f020a2be.jfif",
    dishName: "Grilled Chicken Rice ",
    price: "10,000",
    note: "",
  },

  {
    id: 47758690951234,
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/10d7ef6ed130ad87a172e93f186e0ea7.jfif",
    dishName: "Grilled Turkey Rice ",
    price: "12,000",
    note: "",
  },

  {
    id: 477586909512345,
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/27f28d9646ccf56c8485322758b8b5c4.jfif",
    dishName: "Special Native Rice Palmol Rice ",
    price: "9,500",
    note: "",
  },
];

const sidesExtras = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/3efc548a7601ac563d18cd3af549f31e.jpeg",
    dishName: "Chefs Grilled Chicken Salad",
    price: "10,000",
    note: "Tossed",
    id: 2736454,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/e3737de2f87a40b97f3eca0ff12e10c7.jpeg",
    dishName: "Turkey and Egg Salad",
    price: "12,000",
    id: 273645434,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/36e3e2939aba6b83f53281cff327728e.jpeg",
    dishName: "Vegan Delight",
    price: "9,000",
    id: 27364548745,
  },
];

export default function App() {
  const [salad, setSalad] = useState(salads);
  const [localDish, setLocalDish] = useState(localDishes);
  const [sidesExtra, setSidesExtra] = useState(sidesExtras);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [cart, setCart] = useState([]);

  const [qty, setQty] = useState(1);

  /*
  const BASE_URL = "http://localhost:5000";

  useEffect(function () {
    async function fetchSalads() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/salads`);

        if (!res.ok)
          throw new Error("Something went wrong with fetching dishes");

        const data = await res.json();

        setSalad(data);
      } catch (err) {
        console.error(err.message);
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
        const res = await fetch(`${BASE_URL}/localDishes`);

        if (!res.ok)
          throw new Error("Something went wrong with fetching dishes");

        const data = await res.json();

        setLocalDish(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSalads();
  }, []);
*/

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
        {!selectedId && <Spinner />}

        <div className={styles.enu}>
          {selectedId && (
            <SelectedDishMenu
              handleDishClose={handleDishClose}
              selectedId={selectedId}
              handleAddToCart={handleAddToCart}
              qty={qty}
            />
          )}
        </div>
      </>

      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <>
                {isLoading && <Spinner />}

                {/* {error && <ErrorMessage message={error} />} */}

                {!isLoading && (
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

                {/* {error && <ErrorMessage />} */}

                {!isLoading && (
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

                {/* {error && <ErrorMessage />} */}

                {!isLoading && (
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
            path="sidesextra"
            element={
              <SidesExtra
                sidesExtra={sidesExtra}
                handleSelectId={handleSelectId}
                cart={cart}
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
                isLoading={isLoading}
              />
            }
          />

          <Route
            path="fulldishimg"
            element={<FullDishImg selectedId={selectedId} />}
          />

          <Route path="grillhouse" element={<GrillHouse />} />

          <Route path="quickchinese" element={<QuickChinese />} />

          <Route path="trackorder" element={<TrackOrder />} />

          <Route path="packages" element={<Packages cart={cart} />} />

          <Route path="specialities" element={<Specialities cart={cart} />} />

          <Route path="trackoder" element={<TrackOrder cart={cart} />} />

          <Route path="reservations" element={<Reservations cart={cart} />} />

          <Route path="contacts" element={<Contacts cart={cart} />} />

          <Route path="aboutus" element={<AboutUs cart={cart} />} />

          <Route path="login" element={<Login />} />

          <Route path="signup" element={<SignUp />} />

          <Route path="checkout" element={<CheckOut />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
