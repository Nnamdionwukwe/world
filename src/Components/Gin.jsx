/* eslint-disable react/prop-types */
import FullPage from "./FullPage";
import FooterHeader from "./FotterHeader";
import HomeFooter from "./HomeFooter";

import DishesHeader from "./DishesHeader";
import GinLoop from "./GinLoop";

export default function Gin({ taco, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />

      <DishesHeader>Gin </DishesHeader>

      <GinLoop cart={cart} handleSelectId={handleSelectId} taco={taco} />

      <FooterHeader cart={cart} />

      <HomeFooter cart={cart} />
    </div>
  );
}
