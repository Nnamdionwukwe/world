/* eslint-disable react/prop-types */

import DishesHeader from "./DishesHeader";
import FooterHeader from "./FotterHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import VodkaLoop from "./VodkaLoop";

export default function Vodka({ taco, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Vodka </DishesHeader>

      <VodkaLoop cart={cart} handleSelectId={handleSelectId} taco={taco} />

      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
