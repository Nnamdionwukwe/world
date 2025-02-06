/* eslint-disable react/prop-types */
import TequileLoop from "./TequileLoop";

import DishesHeader from "./DishesHeader";
import FullPage from "./FullPage";

export default function Parfait({ taco, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Parfait </DishesHeader>

      <TequileLoop cart={cart} handleSelectId={handleSelectId} taco={taco} />
    </div>
  );
}
