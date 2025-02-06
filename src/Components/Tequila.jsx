/* eslint-disable react/prop-types */
import TequileLoop from "./TequileLoop";

import DishesHeader from "./DishesHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import FooterHeader from "./FotterHeader";

export default function Tequila({ taco, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Tequila </DishesHeader>

      <TequileLoop cart={cart} handleSelectId={handleSelectId} taco={taco} />

      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
