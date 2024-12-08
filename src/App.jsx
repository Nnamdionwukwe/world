import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      "https://menu.stanfordelaze.ng/uploads/thumb/14c2a753d2da31ce26b42d293b93e2c9.jpg",
    dishName: "French Fries",
    price: "3,000",
    note: "",
    id: 27364540,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/4c270845d444fde366c2c0c98bb9310e.png",
    dishName: "Yam Fries",
    price: "3,000",
    id: 2736454349,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/96656c9b26ebc7760673bd28cbdf1802.jfif",
    dishName: "Sweet Potato Fries ",
    price: "2,000",
    id: 273645487457,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/307a7f8a7573361aea2e630c5e8db119.jfif",
    dishName: "Extra Swallow",
    price: "15,000",
    note: "Poundo, Semo, Eba",
    id: 273645407,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/d757ec0e1c73483714f567314858e637.jfif",
    dishName: "Plantain",
    price: "2,000",
    id: 2736543,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/cfbc731552819afab4a74e6b253894bf.jfif",
    dishName: "Coleslaw ",
    price: "2,000",
    id: 276457457,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/86c69bd119294b460befd6dd65904b2d.jpg",
    dishName: "Peppered Turkey",
    price: "7,000",
    note: "",
    id: 2364540,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/ebb18f169fa9e83509931b77729bd902.jfif",
    dishName: "Peppered hicken",
    price: "6,000",
    id: 276454349,
  },
];

const grillHouses = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/b6c4a5e3b5e8f6dcfc9e10ff58f1f216.png",
    dishName: "Beff Burger",
    price: "12,000",
    note: "",
    id: 273640,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/996a7b296c7bd4540dde3ec9841f7148.jfif",
    dishName: "Chicken Burger",
    price: "13,000",
    id: 27364349,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/74bd19f4a3ca1cdfe54ee01c5526eb5e.jfif",
    dishName: "Chicken Sharwama  ",
    price: "3,000",
    id: 2736454457,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/ac226985bbf3d04f9681cfd16ee63396.jfif",
    dishName: "Mixed Sharwama",
    price: "4,000",
    note: "",
    id: 2735407,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/544bd779a236119b5d2f82166e24a7f1.jfif",
    dishName: "Grilled jumbo",
    price: "20,000",
    id: 27365,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/bddcfa77756d6346b46472e75d38fcaa.jfif",
    dishName: "Prawns ",
    price: "15,000",
    id: 2764457,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/a3f97ec16d651ace417a69f0860ce03c.jfif",
    dishName: "Chicken Suya",
    price: "8,000",
    note: "",
    id: 23540,
  },
];

const quickChineses = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/37c37816b5ff4e506ca47b6089ccfa97.jpg",
    dishName: "Beff Burger",
    price: "13,000",
    note: "Basmati rice stir fried with Aromatics, beef strips,",
    id: 27364000,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/b9466f1ee0ae880f793318994c6f4ed5.jfif",
    dishName: "Chicken Burger",
    price: "12,000",
    note: "Egg  noodles stir fried with Aromatics, beef strips,",
    id: 2736434911,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/15a82db53702ef6d027dcb48094d0bfd.jfif",
    dishName: "Chicken Sharwama  ",
    price: "12,500",
    note: "Rice  noodles stir fried with Aromatics, beef strips,",
    id: 2736454457,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/bd6b830586a93d86e2b31905825a7dbe.jpg",
    dishName: "Special Hot Plate ",
    price: "15,000",
    note: "",
    id: 2735407,
  },
];

const pasters = [
  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/8bae4791eaa70bdb3d162c74716f771e.png",
    dishName: "Spaghetti Bolognese",
    price: "12,000",
    note: "",
    id: 2736400022,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/635515fdd01b52f2f8a31c1d799db142.jfif",
    dishName: "Spicy Grilled Chicken Penne",
    price: "11,000",
    note: "Penne pasta stirred in a grilled chicken spicy tomatos,",
    id: 273643491133,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/4cd8b9209452205dda6a529f2073083c.jfif",
    dishName: "Coconut Pasta  ",
    price: "10,500",
    note: "Linguin pasta, slowly cooked in coconut mllk,,",
    id: 273645445744,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/973c0a5165e09323cbcc43af948ec107.jfif",
    dishName: "Chef's Special Native Pasta ",
    price: "10,000",
    note: "",
    id: 27354075511,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/c2c30fc0fa88919de435030d1ae632ca.jpg",
    dishName: "Seafood Pasta ",
    price: "20,000",
    note: "Assorted seafood (shrimps, calamar, fsh and prawn),",
    id: 273540755,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/a302171538f27c764ffc01cc5450dec6.jpeg",
    dishName: "Rasta Pasta (PENNE/TAGLITELLE",
    price: "10,000",
    note: "",
    id: 2735405,
  },
];

const starters = [
  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/b5b7a59144fd527f09774bb2427de571.jpg",
    dishName: "Catfish Peppersoup",
    price: "20,000",
    note: "",
    id: 273600022,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/031c389cf87ba094c660dfac466a2f91.jpg",
    dishName: "Goat Meat Peppersoup ",
    price: "10,000",
    note: ",",
    id: 2736441133,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/e55e4a38f9209f5d0daeac237947c26b.jfif",
    dishName: "Turkey Peppersoup  ",
    price: "10,000",
    note: "",
    id: 2736454744,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/337bfca69e8d431578de4b065535d5d9.jfif",
    dishName: "Beef Peppersoup",
    price: "8,000",
    note: "",
    id: 27357551081,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/388ef1453eebf9c8adb2281b3a0a7121.jpg",
    dishName: "Chicken Peppersoup ",
    price: "10,000",
    note: ",",
    id: 27354075531,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/3da618d7a37cd8e6c71e216cd7a70c91.jpg",
    dishName: "Special HotWing",
    price: "8,000",
    note: "",
    id: 273540507,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/39012df9ec583186c809e672c2bf99c2.jpg",
    dishName: "Chicken On Skewers",
    price: "8,000",
    note: "",
    id: 27354057,
  },
];

const tacos = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/a9dfa99e70e54ed086f1a6c37f37e866.jfif",
    dishName: "Braised Beef Tacos",
    price: "8,500",
    note: "",
    id: 27300,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/d94f682cba26542bdcc05fba7509c92e.jfif",
    dishName: "Smoked Chicken Tacos",
    price: "8,000",
    note: "",
    id: 2736434911432,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/ad72b165d778eb74d8a415dd984c9ea5.jfif",
    dishName: "Shrimp Tacos  ",
    price: "10,000",
    note: ",",
    id: 2736454452317,
  },
];

const quickEats = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/d443aecb2234d0dd5e79e4bd992304a0.jfif",
    dishName: "Chicken And Chips",
    price: "10,000",
    note: "",
    id: 273002435,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/a4f39b4d4f6c47800898edb113eb9d58.jfif",
    dishName: "Turkey ANd Chips",
    price: "11,000",
    note: "",
    id: 273641432,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/9d52f46e898efe36355d9a0aa3154b36.jfif",
    dishName: "Shrimp Tacos  ",
    price: "11,000",
    note: "",
    id: 273052317,
  },
];

const whiskeys = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/269ebceb078aa63eb0a8dcce787c5c76.jpeg",
    dishName: "The Observatory ",
    price: "60,000",
    note: "Served Chilled",
    id: 27300936,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/91b55b9ce57c3c93eda92ee6b9812729.jpeg",
    dishName: "Jagermeister  ",
    price: "50,000",
    note: "",
    id: 2736431432,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/286fd8f4796e7d6a0ef504a4201e498c.png",
    dishName: "Grants   ",
    price: "40,000",
    note: "",
    id: 273642317,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/9eb52ce97717614b6278a0d182ef2258.png",
    dishName: "The Balvine ",
    price: "100,000",
    note: " ",
    id: 273009986,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/eb03ed1114085f86540ee3a7d3f45592.webp",
    dishName: "Macallan Rare Cask  ",
    price: "700,000",
    note: "",
    id: 27364332,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/e6ff356e09e3f90afdab95c54e6350f7.png",
    dishName: "Glenfiddlch 23yrs   ",
    price: "700,000",
    note: "Served Chilled",
    id: 2736417,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/c58893c105f8c1771017e17f97e92966.png",
    dishName: "Blue Label   ",
    price: "500,000",
    note: "Served Chilled",
    id: 2736433092,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/1322ee3d2faeca00a58233759783be44.png",
    dishName: "Glenfiddlch 21yrs   ",
    price: "550,000",
    note: "Served Chilled",
    id: 2736423,
  },
];

const brandys = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/269ebceb078aa63eb0a8dcce787c5c76.jpeg",
    dishName: "The Observatory ",
    price: "60,000",
    note: "Served Chilled",
    id: 27300936,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/91b55b9ce57c3c93eda92ee6b9812729.jpeg",
    dishName: "Jagermeister  ",
    price: "50,000",
    note: "",
    id: 2736431432,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/286fd8f4796e7d6a0ef504a4201e498c.png",
    dishName: "Grants   ",
    price: "40,000",
    note: "",
    id: 273642317,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/9eb52ce97717614b6278a0d182ef2258.png",
    dishName: "The Balvine ",
    price: "100,000",
    note: " ",
    id: 273009986,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/eb03ed1114085f86540ee3a7d3f45592.webp",
    dishName: "Macallan Rare Cask  ",
    price: "700,000",
    note: "",
    id: 27364332,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/e6ff356e09e3f90afdab95c54e6350f7.png",
    dishName: "Glenfiddlch 23yrs   ",
    price: "700,000",
    note: "Served Chilled",
    id: 2736417,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/c58893c105f8c1771017e17f97e92966.png",
    dishName: "Blue Label   ",
    price: "500,000",
    note: "Served Chilled",
    id: 2736433092,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/1322ee3d2faeca00a58233759783be44.png",
    dishName: "Glenfiddlch 21yrs   ",
    price: "550,000",
    note: "Served Chilled",
    id: 2736423,
  },
];

const vodkas = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/269ebceb078aa63eb0a8dcce787c5c76.jpeg",
    dishName: "The Observatory ",
    price: "60,000",
    note: "Served Chilled",
    id: 27300936,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/91b55b9ce57c3c93eda92ee6b9812729.jpeg",
    dishName: "Jagermeister  ",
    price: "50,000",
    note: "",
    id: 2736431432,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/286fd8f4796e7d6a0ef504a4201e498c.png",
    dishName: "Grants   ",
    price: "40,000",
    note: "",
    id: 273642317,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/9eb52ce97717614b6278a0d182ef2258.png",
    dishName: "The Balvine ",
    price: "100,000",
    note: " ",
    id: 273009986,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/eb03ed1114085f86540ee3a7d3f45592.webp",
    dishName: "Macallan Rare Cask  ",
    price: "700,000",
    note: "",
    id: 27364332,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/e6ff356e09e3f90afdab95c54e6350f7.png",
    dishName: "Glenfiddlch 23yrs   ",
    price: "700,000",
    note: "Served Chilled",
    id: 2736417,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/c58893c105f8c1771017e17f97e92966.png",
    dishName: "Blue Label   ",
    price: "500,000",
    note: "Served Chilled",
    id: 2736433092,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/1322ee3d2faeca00a58233759783be44.png",
    dishName: "Glenfiddlch 21yrs   ",
    price: "550,000",
    note: "Served Chilled",
    id: 2736423,
  },
];

const gins = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/269ebceb078aa63eb0a8dcce787c5c76.jpeg",
    dishName: "The Observatory ",
    price: "60,000",
    note: "Served Chilled",
    id: 27300936,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/91b55b9ce57c3c93eda92ee6b9812729.jpeg",
    dishName: "Jagermeister  ",
    price: "50,000",
    note: "",
    id: 2736431432,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/286fd8f4796e7d6a0ef504a4201e498c.png",
    dishName: "Grants   ",
    price: "40,000",
    note: "",
    id: 273642317,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/9eb52ce97717614b6278a0d182ef2258.png",
    dishName: "The Balvine ",
    price: "100,000",
    note: " ",
    id: 273009986,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/eb03ed1114085f86540ee3a7d3f45592.webp",
    dishName: "Macallan Rare Cask  ",
    price: "700,000",
    note: "",
    id: 27364332,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/e6ff356e09e3f90afdab95c54e6350f7.png",
    dishName: "Glenfiddlch 23yrs   ",
    price: "700,000",
    note: "Served Chilled",
    id: 2736417,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/c58893c105f8c1771017e17f97e92966.png",
    dishName: "Blue Label   ",
    price: "500,000",
    note: "Served Chilled",
    id: 2736433092,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/1322ee3d2faeca00a58233759783be44.png",
    dishName: "Glenfiddlch 21yrs   ",
    price: "550,000",
    note: "Served Chilled",
    id: 2736423,
  },
];

export default function App() {
  const [salad, setSalad] = useState(salads);
  const [localDish, setLocalDish] = useState(localDishes);
  const [sidesExtra, setSidesExtra] = useState(sidesExtras);
  const [grillHouse, setGrillHouse] = useState(grillHouses);
  const [quickChinese, setQuickChinese] = useState(quickChineses);
  const [paster, setPater] = useState(pasters);
  const [starter, setStarter] = useState(starters);
  const [taco, setTaco] = useState(tacos);
  const [quickEat, setQuckEats] = useState(quickEats);
  const [whiskey, setWhiskey] = useState(whiskeys);
  const [brandy, setBrandy] = useState(brandys);
  const [vodka, stVodka] = useState(vodkas);
  const [gin, setGin] = useState(gins);

  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [cart, setCart] = useState([]);

  const [qty, setQty] = useState(1);

  //console.log(sidesExtra);
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
                    sidesExtra={sidesExtra}
                    grillHouse={grillHouse}
                    quickChinese={quickChinese}
                    cart={cart}
                    paster={paster}
                    starter={starter}
                    taco={taco}
                    quickEat={quickEat}
                    whiskey={whiskey}
                    brandy={brandy}
                    vodka={vodka}
                    gin={gin}
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
            path="grillhouse"
            element={
              <GrillHouse
                grillHouse={grillHouse}
                handleSelectId={handleSelectId}
                cart={cart}
              />
            }
          />

          <Route
            path="quickchinese"
            element={
              <QuickChinese
                quickChinese={quickChinese}
                handleSelectId={handleSelectId}
                cart={cart}
              />
            }
          />

          <Route
            path="paster"
            element={
              <Paster
                paster={paster}
                handleSelectId={handleSelectId}
                cart={cart}
              />
            }
          />

          <Route
            path="starter"
            element={
              <Starter
                starter={starter}
                handleSelectId={handleSelectId}
                cart={cart}
              />
            }
          />

          <Route
            path="tacos"
            element={
              <Tacos taco={taco} handleSelectId={handleSelectId} cart={cart} />
            }
          />

          <Route
            path="quickeats"
            element={
              <QuickEats
                taco={quickEat}
                handleSelectId={handleSelectId}
                cart={cart}
              />
            }
          />

          <Route
            path="whiskey"
            element={
              <Whiskey
                taco={whiskey}
                handleSelectId={handleSelectId}
                cart={cart}
              />
            }
          />

          <Route
            path="brandy"
            element={
              <Brandy
                taco={brandy}
                handleSelectId={handleSelectId}
                cart={cart}
              />
            }
          />

          <Route
            path="vodka"
            element={
              <Vodka taco={vodka} handleSelectId={handleSelectId} cart={cart} />
            }
          />

          <Route
            path="gin"
            element={
              <Gin taco={gin} handleSelectId={handleSelectId} cart={cart} />
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
