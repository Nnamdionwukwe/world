import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

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

const salads = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/3efc548a7601ac563d18cd3af549f31e.jpeg",
    dishName: "Chefs Grilled Chicken Salad",
    price: 10,
    note: "Tossed",
    id: crypto.randomUUID(),
    qty: 1,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/e3737de2f87a40b97f3eca0ff12e10c7.jpeg",
    dishName: "Turkey and Egg Salad",
    price: 12,
    id: crypto.randomUUID(),
    qty: 1,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/36e3e2939aba6b83f53281cff327728e.jpeg",
    dishName: "Vegan Delight",
    price: 9,
    id: crypto.randomUUID(),
    qty: 1,
  },
];

const localDishes = [
  {
    id: crypto.randomUUID(),
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/3d380af34d37be5a7bbe18102f02140b.jpg",
    dishName: " Egusi Soup",
    price: 8,
    note: "Egusi soup loaded with crayfish, Beef, Dry fish,",
  },
  {
    id: crypto.randomUUID(),
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/8d0fefdb487fa8c1daebae62c4d43c54.jfif",
    dishName: "Special Vegetable Soup",
    price: "8,5",
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

  {
    id: crypto.randomUUID(),
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/a655ad4fccefb0aa66f55e9486681c7b.jfif",
    dishName: "Jollof Rice",
    price: "11,000",
    note: "Delicious and flavourful Nigerian Jollof rice, served,",
  },

  {
    id: crypto.randomUUID(),
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/a9b5c72198ce789bd9bd054b97a34d24.jfif",
    dishName: "Nigerian Fried Rice ",
    price: "12,000",
    note: "Delicious and flavourful Nigerian style friedrce,",
  },

  {
    id: crypto.randomUUID(),
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/045e1a2489c95a527e057521f020a2be.jfif",
    dishName: "Grilled Chicken Rice ",
    price: "10,000",
    note: "",
  },

  {
    id: crypto.randomUUID(),
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/10d7ef6ed130ad87a172e93f186e0ea7.jfif",
    dishName: "Grilled Turkey Rice ",
    price: "12,000",
    note: "",
  },

  {
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/4c270845d444fde366c2c0c98bb9310e.png",
    dishName: "Yam Fries",
    price: "3,000",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/96656c9b26ebc7760673bd28cbdf1802.jfif",
    dishName: "Sweet Potato Fries ",
    price: "2,000",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/307a7f8a7573361aea2e630c5e8db119.jfif",
    dishName: "Extra Swallow",
    price: "15,000",
    note: "Poundo, Semo, Eba",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/d757ec0e1c73483714f567314858e637.jfif",
    dishName: "Plantain",
    price: "2,000",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/cfbc731552819afab4a74e6b253894bf.jfif",
    dishName: "Coleslaw ",
    price: "2,000",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/86c69bd119294b460befd6dd65904b2d.jpg",
    dishName: "Peppered Turkey",
    price: "7,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/ebb18f169fa9e83509931b77729bd902.jfif",
    dishName: "Peppered hicken",
    price: "6,000",
    id: crypto.randomUUID(),
  },
];

const grillHouses = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/b6c4a5e3b5e8f6dcfc9e10ff58f1f216.png",
    dishName: "Beff Burger",
    price: "12,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/996a7b296c7bd4540dde3ec9841f7148.jfif",
    dishName: "Chicken Burger",
    price: "13,000",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/74bd19f4a3ca1cdfe54ee01c5526eb5e.jfif",
    dishName: "Chicken Sharwama  ",
    price: "3,000",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/ac226985bbf3d04f9681cfd16ee63396.jfif",
    dishName: "Mixed Sharwama",
    price: "4,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/544bd779a236119b5d2f82166e24a7f1.jfif",
    dishName: "Grilled jumbo",
    price: "20,000",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/bddcfa77756d6346b46472e75d38fcaa.jfif",
    dishName: "Prawns ",
    price: "15,000",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/a3f97ec16d651ace417a69f0860ce03c.jfif",
    dishName: "Chicken Suya",
    price: "8,000",
    note: "",
    id: crypto.randomUUID(),
  },
];

const quickChineses = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/37c37816b5ff4e506ca47b6089ccfa97.jpg",
    dishName: "Beff Burger",
    price: "13,000",
    note: "Basmati rice stir fried with Aromatics, beef strips,",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/b9466f1ee0ae880f793318994c6f4ed5.jfif",
    dishName: "Chicken Burger",
    price: "12,000",
    note: "Egg  noodles stir fried with Aromatics, beef strips,",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/15a82db53702ef6d027dcb48094d0bfd.jfif",
    dishName: "Chicken Sharwama  ",
    price: "12,500",
    note: "Rice  noodles stir fried with Aromatics, beef strips,",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/bd6b830586a93d86e2b31905825a7dbe.jpg",
    dishName: "Special Hot Plate ",
    price: "15,000",
    note: "",
    id: crypto.randomUUID(),
  },
];

const pasters = [
  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/8bae4791eaa70bdb3d162c74716f771e.png",
    dishName: "Spaghetti Bolognese",
    price: "12,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/635515fdd01b52f2f8a31c1d799db142.jfif",
    dishName: "Spicy Grilled Chicken Penne",
    price: "11,000",
    note: "Penne pasta stirred in a grilled chicken spicy tomatos,",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/4cd8b9209452205dda6a529f2073083c.jfif",
    dishName: "Coconut Pasta  ",
    price: "10,500",
    note: "Linguin pasta, slowly cooked in coconut mllk,,",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/973c0a5165e09323cbcc43af948ec107.jfif",
    dishName: "Chef's Special Native Pasta ",
    price: "10,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/c2c30fc0fa88919de435030d1ae632ca.jpg",
    dishName: "Seafood Pasta ",
    price: "20,000",
    note: "Assorted seafood (shrimps, calamar, fsh and prawn),",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/a302171538f27c764ffc01cc5450dec6.jpeg",
    dishName: "Rasta Pasta (PENNE/TAGLITELLE",
    price: "10,000",
    note: "",
    id: crypto.randomUUID(),
  },
];

const starters = [
  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/b5b7a59144fd527f09774bb2427de571.jpg",
    dishName: "Catfish Peppersoup",
    price: "20,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/031c389cf87ba094c660dfac466a2f91.jpg",
    dishName: "Goat Meat Peppersoup ",
    price: "10,000",
    note: ",",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/e55e4a38f9209f5d0daeac237947c26b.jfif",
    dishName: "Turkey Peppersoup  ",
    price: "10,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/337bfca69e8d431578de4b065535d5d9.jfif",
    dishName: "Beef Peppersoup",
    price: "8,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/388ef1453eebf9c8adb2281b3a0a7121.jpg",
    dishName: "Chicken Peppersoup ",
    price: "10,000",
    note: ",",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/3da618d7a37cd8e6c71e216cd7a70c91.jpg",
    dishName: "Special HotWing",
    price: "8,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/39012df9ec583186c809e672c2bf99c2.jpg",
    dishName: "Chicken On Skewers",
    price: "8,000",
    note: "",
    id: crypto.randomUUID(),
  },
];

const tacos = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/a9dfa99e70e54ed086f1a6c37f37e866.jfif",
    dishName: "Braised Beef Tacos",
    price: "8,500",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/d94f682cba26542bdcc05fba7509c92e.jfif",
    dishName: "Smoked Chicken Tacos",
    price: "8,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/ad72b165d778eb74d8a415dd984c9ea5.jfif",
    dishName: "Shrimp Tacos  ",
    price: "10,000",
    note: ",",
    id: crypto.randomUUID(),
  },
];

const quickEats = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/d443aecb2234d0dd5e79e4bd992304a0.jfif",
    dishName: "Chicken And Chips",
    price: "10,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/a4f39b4d4f6c47800898edb113eb9d58.jfif",
    dishName: "Turkey ANd Chips",
    price: "11,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/9d52f46e898efe36355d9a0aa3154b36.jfif",
    dishName: "Shrimp Tacos  ",
    price: "11,000",
    note: "",
    id: crypto.randomUUID(),
  },
];

const whiskeys = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/269ebceb078aa63eb0a8dcce787c5c76.jpeg",
    dishName: "The Observatory ",
    price: "60,000",
    note: "Served Chilled",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/91b55b9ce57c3c93eda92ee6b9812729.jpeg",
    dishName: "Jagermeister  ",
    price: "50,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/286fd8f4796e7d6a0ef504a4201e498c.png",
    dishName: "Grants   ",
    price: "40,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/9eb52ce97717614b6278a0d182ef2258.png",
    dishName: "The Balvine ",
    price: "100,000",
    note: " ",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/eb03ed1114085f86540ee3a7d3f45592.webp",
    dishName: "Macallan Rare Cask  ",
    price: "700,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/e6ff356e09e3f90afdab95c54e6350f7.png",
    dishName: "Glenfiddlch 23yrs   ",
    price: "700,000",
    note: "Served Chilled",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/c58893c105f8c1771017e17f97e92966.png",
    dishName: "Blue Label   ",
    price: "500,000",
    note: "Served Chilled",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/1322ee3d2faeca00a58233759783be44.png",
    dishName: "Glenfiddlch 21yrs   ",
    price: "550,000",
    note: "Served Chilled",
    id: crypto.randomUUID(),
  },
];

const brandys = [
  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/4dcedf559eaba483d2de0f51301bc743.png",
    dishName: "Hennessy XO ",
    price: "600,000",
    note: " ",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/4a9bf0d8bf48debba7fec0c289c56e6a.jfif",
    dishName: "Jagermeister  ",
    price: "500,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/d18e853e8eeac24e53981f1d2eaa70ad.png",
    dishName: "Hennessy VSOP   ",
    price: "160,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/d18e853e8eeac24e53981f1d2eaa70ad.png",
    dishName: "Hennessy VSOP  Shots  ",
    price: "8,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/ff4a5b71968638e58aa648a526143a15.jfif",
    dishName: "Remy Martins XO ",
    price: "500,000",
    note: " ",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/08b3e99e2b62dc810ba06b60b41db8ab.jfif",
    dishName: "Martel Blue Swift  ",
    price: "150,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/e6ff356e09e3f90afdab95c54e6350f7.png",
    dishName: "Remy Martins 1738   ",
    price: "180,000",
    note: " ",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/b40719a72278e17a9214dc43b586f0b5.png",
    dishName: "Hennessy VS   ",
    price: "140,000",
    note: " ",
    id: crypto.randomUUID(),
  },
];

const vodkas = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/064a3687d40553a965be4684ffc386bc.jfif",
    dishName: "Ciroc  ",
    price: "80,000",
    note: " ",
    id: crypto.randomUUID(),
  },
];

const gins = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/dabe806b0a107656ea2c5ec00a960960.jpeg",
    dishName: "Hendrcks Gin ",
    price: "50,000",
    note: " ",
    id: crypto.randomUUID(),
  },
];

const champagnes = [
  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/abb2fc2f6f3c300c472bccb7d40f54bf.jfif",
    dishName: "Crystal  ",
    price: "550,000",
    note: " ",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/ab3a9bcada57b625cf26ce539c718d92.jfif",
    dishName: "Ace of Spades  ",
    price: "600,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/ccc87cec3fff597564cc639986ff83a4.jfif",
    dishName: "Dom Perignon   ",
    price: "600,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/c791e846f26506ef6b9ed041f5267d0d.png",
    dishName: "Moet Rose ",
    price: "200,000",
    note: " ",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/3c2e643365806ba2b323180391a36cca.jfif",
    dishName: "Veuve Clicqout Rose  ",
    price: "250,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/e7aac795f1656023f330d8e34d2e9684.jfif",
    dishName: "Veuve Clicqout Brut   ",
    price: "200,000",
    note: " ",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/413b916cd568215ea6cc48428e13e464.webp",
    dishName: "Bellaire Rose   ",
    price: "150,000",
    note: " ",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/8efc178e94344c99ddf0c11b916a8815.jpeg",
    dishName: "Laurent Perriier   ",
    price: "150,000",
    note: " ",
    id: crypto.randomUUID(),
  },
];

const sparklingWines = [
  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/82e5d727fd8f24dc9a6c1894a2bd1ae8.jfif",
    dishName: "Martnelli  ",
    price: "30,000",
    note: " ",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/b78b78350d38c42491c695f58460a6e6.png",
    dishName: "Castle Ice  ",
    price: "40,000",
    note: "",
    id: crypto.randomUUID(),
  },
];

const redWines = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/856e37817c2b9a4084bc8b4923832f77.jfif",
    dishName: "Vartely  ",
    price: "40,000",
    note: " ",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/679d9d828531b5e0c200e892a4278510.jfif",
    dishName: "Whistling  ",
    price: "25,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/15412d6e9917de3ab1c38ff5a9454ef3.jfif",
    dishName: "Sweet Lips   ",
    price: "30,000",
    note: "",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/d5d5afc98d9900c9ac2176001574975c.jfif",
    dishName: "Rbbertson  ",
    price: "30,000",
    note: " ",
    id: crypto.randomUUID(),
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/2433f5972ed0923399b5b9c31698f7f4.jfif",
    dishName: "Escudo Rojo  ",
    price: "40,000",
    note: " ",
    id: 238965,
  },
];

const whiteWines = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/e796617761eedb64af61cb7d2f6ec137.jfif",
    dishName: "Sweet Lips ",
    price: "30,000",
    note: " ",
    id: 923568356,
  },
];

const classics = [
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

const smoothies = [
  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/bb26ad5522399d5d457f4858c8d5f37c.jfif",
    dishName: "Frut Esctacy ",
    price: "5,500",
    note: "Banana, Pineapple, Watermelon, Seedless Grapes ",
    id: 782562379,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/cfb40f31a4b0f556007d941476494dfc.jfif",
    dishName: "Standard Cleanser  ",
    price: "4,500",
    note: "Apple, Pineapple, Celery",
    id: 3646563568,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/e7dae75a02b6a8c3021c7d4feb5ce28f.jfif",
    dishName: "Coco Banana   ",
    price: "5,000",
    note: "",
    id: 3487642753,
  },
];

const mocktails = [
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

const specials = [
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

const milkshakes = [
  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/b4b8ebbd3043ef47f1c53de48243193a.jfif",
    dishName: "Oreo Milkshake ",
    price: "9,000",
    note: "Vanilla Ice Cream, Mlk Oreo Cookies",
    id: 763457648296,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/79cd32faffd680bd908dbd7acde18e78.png",
    dishName: "Strawberry Milkshake  ",
    price: "8,000",
    note: "Strawberry Ice Cream, Milk",
    id: 785682345643,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/67e992c42c6c83d54a47299fd2432f0e.jfif",
    dishName: "Peanut Banana   ",
    price: "8,500",
    note: "Banana, Milk, Peanut",
    id: 657234646,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/7db6c6e833fed88116de9ca50b120a3d.png",
    dishName: "Chocolate Banana ",
    price: "8,000",
    note: "Chocolate Ice Cream, Milk, Banana ",
    id: 5628465653,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/9a0eac15f62a23e2d63cd85d505f106a.jfif",
    dishName: "Macallan Rare Cask  ",
    price: "8,000",
    note: "Strawberry, Banana, Milk",
    id: 436528464,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/34ff0a7f794fe37af3808d38942ff3a2.png",
    dishName: "Chocolate Milkshake   ",
    price: "8,000",
    note: " ",
    id: 658945634,
  },
];

const freshJuices = [
  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/8a39171000df009f9695df4f3b00fe70.jfif",
    dishName: "Pitcher Fresh Juice ",
    price: "10,000",
    note: " ",
    id: 437568926,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/a097b127c6eeb357b1057c47bc0de519.png",
    dishName: "Orange Juice  ",
    price: "4,000",
    note: "",
    id: 24568658245,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/c61a334ab078fc9d190534ef9dcc3a14.jfif",
    dishName: "Watermelon Juice   ",
    price: "4,000",
    note: "",
    id: 7548628564,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/a097b127c6eeb357b1057c47bc0de519.png",
    dishName: "Pineapple Juice ",
    price: "5,000",
    note: " ",
    id: 8523652869,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/d038f7a6e7c3071b7d929757a9a67689.png",
    dishName: "Apple Juice    ",
    price: "700,000",
    note: "",
    id: 3457648,
  },
];

const parfaits = [
  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/69190da41f4abb06bae35c462846048b.jfif",
    dishName: "Banana Parfait ",
    price: "7,000",
    note: " ",
    id: 73864895,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/cf5c488caf0560dd0c9ac8c662db9f3f.jfif",
    dishName: "Pineapple Parfait  ",
    price: "7,000",
    note: "",
    id: 3646735391,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/080c7a31eefc6ffd86fbe381f75cd10b.jfif",
    dishName: "Apple Parfait   ",
    price: "7,500",
    note: "",
    id: 3568346893,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/82a11a14c7e9d7c649ed00be88091bd1.jfif",
    dishName: "Combo Parfait ",
    price: "8,000",
    note: " ",
    id: 3785683964,
  },
];

const beers = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/7052caed217dcb7b4dfd0c5aa2b2da78.png",
    dishName: "Heineen  ",
    price: "25,000",
    note: "Served Chilled",
    id: 27300936,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/409c6c28dc7f16a2e96073d0a04574ab.png",
    dishName: "Budweiser  ",
    price: "25,000",
    note: "",
    id: 47648374,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/9c2995a6d442785e8f291fa7f5800f19.jpg",
    dishName: "Star   ",
    price: "2,000",
    note: "",
    id: 6464727823,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/8141e51d3c95eec12f16e68759e505e0.jfif",
    dishName: "Desperado  ",
    price: "2,000",
    note: " ",
    id: 273009986,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/cbf966c6023bdefc736bb8639d587625.jfif",
    dishName: "Tiger",
    price: "2,000",
    note: "",
    id: 74643689236,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/812cdaf4696b1ed757b4bbb231cec6d4.jfif",
    dishName: "Big Stout    ",
    price: "2,500",
    note: " ",
    id: 8324698326,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/4380d399e6725499a51feb40aa702b82.jpg",
    dishName: "3'3 Beer   ",
    price: "2,000",
    note: " ",
    id: 73467454792,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/e67b41057526ba9c2d5a27d1585e881a.jfif",
    dishName: "Life    ",
    price: "2,000",
    note: " ",
    id: 475742923,
  },
];

const energyDrinks = [
  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/4224ee6bda2f50c81dab2f3b12e40de0.jpg",
    dishName: "Red Bull ",
    price: "3,000",
    note: " ",
    id: 374656288,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/6af260513d63c532f1da3d3ae7aec1fc.jpeg",
    dishName: "Kabisa  ",
    price: "3,000",
    note: "",
    id: 23745782854,
  },
];

const shishas = [
  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/18760e95c1838fa3fdb2500114f9a621.jpeg",
    dishName: "Shisha ",
    price: "13,000",
    note: " ",
    id: 2730093846356,
  },
];

const softDrnks = [
  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/ad877751f41d977aa4780f32aea77da7.jfif",
    dishName: "Water  ",
    price: "500",
    note: " ",
    id: 27300997636,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/c3794c99a725621b6e1a9c4741fdf39b.jfif",
    dishName: "Coke  ",
    price: "1,000",
    note: "",
    id: 2736431482432,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/facb8909480e9895823f167592f5dd4f.jpg",
    dishName: "Sprte",
    price: "1,000",
    note: "",
    id: 2736422654317,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/27aac97f23078922d37d697a8e8b2f70.jfif",
    dishName: "Soda Water ",
    price: "1,000",
    note: " ",
    id: 2730052439986,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/d85e1f6f9525b614ec54b4167189011b.jfif",
    dishName: "Tonci Water  ",
    price: "1,000",
    note: "",
    id: 273643312312,
  },
];

const tequilas = [
  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/fbb4d654ac8140fb9f8197a4a5b87573.jpg",
    dishName: "Azul Reposado  ",
    price: "650,000",
    note: " ",
    id: 2365256892345,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/b0f8c6d48e744a4d6916a5b02f2427d8.jfif",
    dishName: "Azul Plata  ",
    price: "500,000",
    note: "",
    id: 7352545628956,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/b59f2f970af966ca4b54f190a7180ac3.jfif",
    dishName: "Don Julio",
    price: "550,000",
    note: "",
    id: 8596348956,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/9b02a96d050c4f3ba236d4b4910b0302.jpeg",
    dishName: "Casa Maestri ",
    price: "350,000",
    note: " ",
    id: 2384532745,
  },

  {
    image:
      "	https://menu.stanfordelaze.ng/uploads/thumb/0b8eb7b929ef2a4147ff50ceb0283360.jpeg",
    dishName: "Sierra   ",
    price: "40,000",
    note: "",
    id: 75672384,
  },

  {
    image:
      "https://menu.stanfordelaze.ng/uploads/thumb/fa7ea2380f2f8b86f32fa50232e484f3.jpeg",
    dishName: "Csamigos Reposada   ",
    price: "400,000",
    note: "",
    id: 745327475,
  },
];

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
  const [salad, setSalad] = useState(salads);
  const [localDish, setLocalDish] = useState(localDishes);
  const [sidesExtra, setSidesExtra] = useState(sidesExtras);
  const [grillHouse, setGrillHouse] = useState(grillHouses);
  const [quickChinese, setQuickChinese] = useState(quickChineses);
  const [paster, setPaster] = useState(pasters);
  const [starter, setStarter] = useState(starters);
  const [taco, setTaco] = useState(tacos);
  const [quickEat, setQuckEats] = useState(quickEats);
  const [whiskey, setWhiskey] = useState(whiskeys);
  const [brandy, setBrandy] = useState(brandys);
  const [vodka, stVodka] = useState(vodkas);
  const [gin, setGin] = useState(gins);

  const [champagne, setChampagne] = useState(champagnes);
  const [sparkling, setSparkling] = useState(sparklingWines);
  const [redWine, setRedWines] = useState(redWines);
  const [whiteWine, setWhiteWnine] = useState(whiteWines);
  const [classic, setClassic] = useState(classics);
  const [smoothie, setSmoothie] = useState(smoothies);
  const [mocktail, setMocktail] = useState(mocktails);
  const [special, setSpecial] = useState(specials);
  const [milkshake, setMilkshakes] = useState(milkshakes);
  const [fresh, setFresh] = useState(freshJuices);
  const [tequila, setTequila] = useState(tequilas);
  const [parfait, setParfaits] = useState(parfaits);
  const [beer, setBeer] = useState(beers);
  const [energyDrink, setEnergyDrinks] = useState(energyDrinks);
  const [shisha, setShisha] = useState(shishas);
  const [softDrink, setSoftDrink] = useState(softDrnks);

  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const [cart, setCart] = useState(
    //   function () {
    //   const storedValue = localStorage?.getItem("cart");
    //   return JSON.parse(storedValue);
    // }
    carts
  );

  const [appQty, setAppQty] = useState(1);
  console.log(appQty);

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

  /*Adds To Cart*/
  function handleAddToCart(dish) {
    // if (cart?.id === dish.id)
    //   setCart((cart) =>
    //     cart?.map((cart) =>
    //       cart?.id === dish.id ? { ...cart, qyt: (cart.qty += 1) } : cart
    //     )
    //   );

    setCart((cart) => [...cart, dish]);
    setAppQty();

    // localStorage.setItem("cart", JSON.stringify([...cart, dish]));

    setSelectedId(null);
  }

  //Update To Increase Cart Quantity

  //Food Details Function
  function handleSelectId(dish) {
    // setSelectedId(id);
    setSelectedId((selected) => (selected?.id === dish?.id ? null : dish));
  }

  //Delete Function
  function handleDeleteItem(id) {
    setCart((cart) => cart?.filter((cart) => cart.id !== id));
  }

  //Close Details
  function handleDishClose() {
    setSelectedId(null);
  }

  // useEffect(
  //   function () {
  //     localStorage.setItem("cart", JSON?.stringify(cart));
  //   },
  //   [cart]
  // );

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
              cart={cart}
              setCart={setCart}
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
                    tequila={tequila}
                    softDrink={softDrink}
                    shisha={shisha}
                    champagne={champagne}
                    sparkling={sparkling}
                    redWine={redWine}
                    whiteWine={whiteWine}
                    classic={classic}
                    smoothies={smoothies}
                    mocktail={mocktail}
                    special={special}
                    milkshake={milkshake}
                    parfait={parfait}
                    beer={beer}
                    energyDrink={energyDrink}
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
            path="tequila"
            element={
              <Tequila
                taco={tequila}
                handleSelectId={handleSelectId}
                cart={cart}
              />
            }
          />

          <Route
            path="champagne"
            element={
              <Champagne
                taco={champagne}
                handleSelectId={handleSelectId}
                cart={cart}
              />
            }
          />

          <Route
            path="sparkilingwine"
            element={
              <SparklingWine
                taco={sparkling}
                handleSelectId={handleSelectId}
                cart={cart}
              />
            }
          />

          <Route
            path="RedWine"
            element={
              <RedWine
                taco={redWine}
                handleSelectId={handleSelectId}
                cart={cart}
              />
            }
          />

          <Route
            path="WhiteWine"
            element={
              <WhiteWine
                taco={whiteWine}
                handleSelectId={handleSelectId}
                cart={cart}
              />
            }
          />

          <Route
            path="Classiccocktail"
            element={
              <Classic
                taco={classic}
                handleSelectId={handleSelectId}
                cart={cart}
              />
            }
          />

          <Route
            path="Smoothies"
            element={
              <Smoothies
                taco={smoothie}
                handleSelectId={handleSelectId}
                cart={cart}
              />
            }
          />

          <Route
            path="MockTails"
            element={
              <Mocktails
                taco={mocktail}
                handleSelectId={handleSelectId}
                cart={cart}
              />
            }
          />

          <Route
            path="MilkShakes"
            element={
              <MilkShakes
                taco={milkshake}
                handleSelectId={handleSelectId}
                cart={cart}
              />
            }
          />

          <Route
            path="Parfait"
            element={
              <Parfait
                taco={parfait}
                handleSelectId={handleSelectId}
                cart={cart}
              />
            }
          />

          <Route
            path="beer"
            element={
              <Beer taco={beer} handleSelectId={handleSelectId} cart={cart} />
            }
          />

          <Route
            path="energydrink"
            element={
              <EnergyDrinks
                taco={energyDrink}
                handleSelectId={handleSelectId}
                cart={cart}
              />
            }
          />

          <Route
            path="Shisha"
            element={
              <Shisha
                taco={shisha}
                handleSelectId={handleSelectId}
                cart={cart}
              />
            }
          />

          <Route
            path="softdrink"
            element={
              <SoftDrinks
                taco={softDrink}
                handleSelectId={handleSelectId}
                cart={cart}
              />
            }
          />

          <Route
            path="specialjuice"
            element={
              <Special
                taco={special}
                handleSelectId={handleSelectId}
                cart={cart}
              />
            }
          />

          <Route
            path="freshjuices"
            element={
              <Fresh taco={fresh} handleSelectId={handleSelectId} cart={cart} />
            }
          />

          <Route
            path="cartLoop"
            element={
              <CartLoop
                cart={cart}
                handleDeleteItem={handleDeleteItem}
                isLoading={isLoading}
                setAppQty={setAppQty}
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
        ; ;
      </BrowserRouter>
    </div>
  );
}
