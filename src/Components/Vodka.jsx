/* eslint-disable react/prop-types */
import FullPage from "./FullPage";
import FooterHeader from "./FotterHeader";
import HomeFooter from "./HomeFooter";

import DishesHeader from "./DishesHeader";
import VodkaLoop from "./VodkaLoop";

export default function Vodka({ taco, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />

      <DishesHeader>Vodka </DishesHeader>

      <VodkaLoop cart={cart} handleSelectId={handleSelectId} taco={taco} />

      <FooterHeader cart={cart} />

      <HomeFooter cart={cart} />
    </div>
  );
}
