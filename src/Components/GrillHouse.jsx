/* eslint-disable react/prop-types */
import FullPage from "./FullPage";
import GrillHouseLoop from "./GrillHouseLoop";
import FooterHeader from "./FotterHeader";
import HomeFooter from "./HomeFooter";

import DishesHeader from "./DishesHeader";

export default function GrillHouse({ grillHouse, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />

      <DishesHeader>Grill House Specials </DishesHeader>

      <GrillHouseLoop
        cart={cart}
        handleSelectId={handleSelectId}
        grillHouse={grillHouse}
      />

      <FooterHeader cart={cart} />

      <HomeFooter cart={cart} />
    </div>
  );
}
