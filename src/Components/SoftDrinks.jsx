/* eslint-disable react/prop-types */

import DishesHeader from "./DishesHeader";
import FooterHeader from "./FotterHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import SoftDrinksLoop from "./SoftDrinksLoop";

export default function SoftDrinks({ handleSelectId }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Soft Drinks </DishesHeader>

      <SoftDrinksLoop handleSelectId={handleSelectId} />

      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
