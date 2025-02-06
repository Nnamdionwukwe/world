/* eslint-disable react/prop-types */
import QuickEatsLoop from "./QuickEatsLoop";

import DishesHeader from "./DishesHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import FooterHeader from "./FotterHeader";

export default function QuickEats({ taco, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Quick Eats </DishesHeader>

      <QuickEatsLoop cart={cart} handleSelectId={handleSelectId} taco={taco} />

      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
