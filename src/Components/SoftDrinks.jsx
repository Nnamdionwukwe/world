/* eslint-disable react/prop-types */
import FullPage from "./FullPage";
import TequileLoop from "./TequileLoop";
import FooterHeader from "./FotterHeader";
import HomeFooter from "./HomeFooter";

import DishesHeader from "./DishesHeader";

export default function SoftDrinks({ taco, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />

      <DishesHeader>Soft Drinks </DishesHeader>

      <TequileLoop cart={cart} handleSelectId={handleSelectId} taco={taco} />

      <FooterHeader cart={cart} />

      <HomeFooter cart={cart} />
    </div>
  );
}
