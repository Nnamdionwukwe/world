/* eslint-disable react/prop-types */
import TequileLoop from "./TequileLoop";

import DishesHeader from "./DishesHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";

export default function WhiteWine({ taco, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>WHite Wine </DishesHeader>

      <TequileLoop cart={cart} handleSelectId={handleSelectId} taco={taco} />

      <HomeFooter />
    </div>
  );
}
