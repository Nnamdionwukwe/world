/* eslint-disable react/prop-types */
import FullPage from "./FullPage";
import QuickEatsLoop from "./QuickEatsLoop";
import FooterHeader from "./FotterHeader";
import HomeFooter from "./HomeFooter";

import DishesHeader from "./DishesHeader";

export default function Whiskey({ taco, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />

      <DishesHeader>Whiskey </DishesHeader>

      <QuickEatsLoop cart={cart} handleSelectId={handleSelectId} taco={taco} />

      <FooterHeader cart={cart} />

      <HomeFooter cart={cart} />
    </div>
  );
}
