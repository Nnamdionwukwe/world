/* eslint-disable react/prop-types */

import DishesHeader from "./DishesHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import BeerLoop from "./BeerLoop";

export default function Beer({ handleSelectId }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Beer </DishesHeader>

      <BeerLoop handleSelectId={handleSelectId} />

      <HomeFooter />
    </div>
  );
}
