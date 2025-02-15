/* eslint-disable react/prop-types */

import DishesHeader from "./DishesHeader";
import BrandyLoop from "./BrandyLoop";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import FooterHeader from "./FotterHeader";

export default function Brandy({ taco, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Brandy </DishesHeader>

      <BrandyLoop cart={cart} handleSelectId={handleSelectId} taco={taco} />

      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
