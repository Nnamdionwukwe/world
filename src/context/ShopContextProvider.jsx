/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer, useState } from "react";
import Data from "../Data.json";
import CartReduser from "./CartReduser";

export const ShopContext = createContext();

// const BASE_URL = localhost:5000

export const ShopContextProvider = ({ children }) => {
  const [salad, setSalad] = useState([]);
  const [localDish, setLocalDish] = useState(Data.localDishes);
  const [sidesExtra, setSidesExtra] = useState(Data.sidesExtras);
  const [grillHouse, setGrillHouse] = useState(Data.grillHouses);
  const [quickChinese, setQuickChinese] = useState(Data.quickChineses);
  const [paster, setPaster] = useState(Data.pasters);
  const [starter, setStarter] = useState(Data.starters);
  const [taco, setTaco] = useState(Data.tacos);
  const [quickEat, setQuckEats] = useState(Data.quickEats);
  const [whiskey, setWhiskey] = useState(Data.whiskeys);
  const [brandy, setBrandy] = useState(Data.brandys);
  const [vodka, stVodka] = useState(Data.vodkas);
  const [gin, setGin] = useState(Data.gins);

  const [champagne, setChampagne] = useState(Data.champagnes);
  const [sparkling, setSparkling] = useState(Data.sparklingWines);
  const [redWine, setRedWines] = useState(Data.redWines);
  const [whiteWine, setWhiteWnine] = useState(Data.whiteWines);
  const [classic, setClassic] = useState(Data.classics);
  const [smoothie, setSmoothie] = useState(Data.smoothies);
  const [mocktail, setMocktail] = useState(Data.mocktails);
  const [special, setSpecial] = useState(Data.specials);
  const [milkshake, setMilkshakes] = useState(Data.milkshakes);
  const [fresh, setFresh] = useState(Data.freshJuices);
  const [tequila, setTequila] = useState(Data.tequilas);
  const [parfait, setParfaits] = useState(Data.parfaits);
  const [beer, setBeer] = useState(Data.beers);
  const [energyDrink, setEnergyDrinks] = useState(Data.energyDrinks);
  const [shisha, setShisha] = useState(Data.shishas);
  const [softDrink, setSoftDrink] = useState(Data.softDrinks);

  const [cart, dispatch] = useReducer(CartReduser, []);

  const BASE_URL = "http://localhost:5000";

  useEffect(function () {
    async function fetchSalads() {
      try {
        // setIsLoading(true);
        const res = await fetch(`${BASE_URL}/salads`);

        if (!res.ok)
          throw new Error("Something went wrong with fetching dishes");

        const data = await res.json();

        console.log(data);

        setSalad(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        // setIsLoading(false);
      }
    }

    fetchSalads();
  }, []);

  const contextValue = {
    cart,
    dispatch,
    salad,
    sidesExtra,
    grillHouse,
    quickChinese,
    paster,
    starter,
    taco,
    quickEat,
    whiskey,
    brandy,
    vodka,
    gin,
    tequila,
    softDrink,
    shisha,
    champagne,
    sparkling,
    redWine,
    whiteWine,
    classic,
    mocktail,
    special,
    milkshake,
    parfait,
    fresh,
    beer,
    energyDrink,
    localDish,
    smoothie,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
