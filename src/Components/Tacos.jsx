/* eslint-disable react/prop-types */
import TacosLoop from "./TacosLoop";

import DishesHeader from "./DishesHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import FooterHeader from "./FotterHeader";

export default function Tacos({ taco, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Tacos </DishesHeader>

      <TacosLoop cart={cart} handleSelectId={handleSelectId} taco={taco} />

      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
