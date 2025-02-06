/* eslint-disable react/prop-types */

import DishesHeader from "./DishesHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import EnergyDrinksLoop from "./EnergyDrinksLoop";
import FooterHeader from "./FotterHeader";

export default function EnergyDrinks({ handleSelectId }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Energy Drinks </DishesHeader>

      <EnergyDrinksLoop handleSelectId={handleSelectId} />

      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
