/* eslint-disable react/prop-types */
import GrillHouseLoop from "./GrillHouseLoop";

import DishesHeader from "./DishesHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import FooterHeader from "./FotterHeader";

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

      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
