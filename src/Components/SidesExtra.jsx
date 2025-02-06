/* eslint-disable react/prop-types */
import SidesExtraDishLoop from "./SidesExtraDishLoop";

import DishesHeader from "./DishesHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";

export default function SidesExtra({ sidesExtra, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />

      <DishesHeader>Sides / Extras </DishesHeader>

      <SidesExtraDishLoop
        cart={cart}
        handleSelectId={handleSelectId}
        sidesExtra={sidesExtra}
      />

      <HomeFooter />
    </div>
  );
}
