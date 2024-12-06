/* eslint-disable react/prop-types */
import FullPage from "./FullPage";
import SidesExtraDishLoop from "./SidesExtraDishLoop";
import FooterHeader from "./FotterHeader";
import HomeFooter from "./HomeFooter";

import DishesHeader from "./DishesHeader";

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

      <FooterHeader cart={cart} />

      <HomeFooter cart={cart} />
    </div>
  );
}
