/* eslint-disable react/prop-types */

import DishesHeader from "./DishesHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import BeerLoop from "./BeerLoop";
import FooterHeader from "./FotterHeader";

export default function Beer({ handleSelectId }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Beer </DishesHeader>

      <BeerLoop handleSelectId={handleSelectId} />

      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
