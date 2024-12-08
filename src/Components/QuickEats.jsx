/* eslint-disable react/prop-types */
import FullPage from "./FullPage";
import QuickEatsLoop from "./QuickEatsLoop";
import FooterHeader from "./FotterHeader";
import HomeFooter from "./HomeFooter";

import DishesHeader from "./DishesHeader";

export default function QuickEats({ taco, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />

      <DishesHeader>Quick Eats </DishesHeader>

      <QuickEatsLoop cart={cart} handleSelectId={handleSelectId} taco={taco} />

      <FooterHeader cart={cart} />

      <HomeFooter cart={cart} />
    </div>
  );
}
