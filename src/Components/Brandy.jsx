/* eslint-disable react/prop-types */
import FullPage from "./FullPage";
import FooterHeader from "./FotterHeader";
import HomeFooter from "./HomeFooter";

import DishesHeader from "./DishesHeader";
import BrandyLoop from "./BrandyLoop";

export default function Brandy({ taco, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />

      <DishesHeader>Brandy </DishesHeader>

      <BrandyLoop cart={cart} handleSelectId={handleSelectId} taco={taco} />

      <FooterHeader cart={cart} />

      <HomeFooter cart={cart} />
    </div>
  );
}
