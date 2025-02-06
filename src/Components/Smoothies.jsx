/* eslint-disable react/prop-types */

import DishesHeader from "./DishesHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import SmoothiesLoop from "./SmoothiesLoop";

export default function Smoothies({ taco, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Smoothies </DishesHeader>

      <SmoothiesLoop cart={cart} handleSelectId={handleSelectId} taco={taco} />

      <HomeFooter />
    </div>
  );
}
