/* eslint-disable react/prop-types */

import DishesHeader from "./DishesHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import ClassicLoop from "./ClassicLoop";

export default function Classic({ taco, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Classic Cocktail </DishesHeader>

      <ClassicLoop cart={cart} handleSelectId={handleSelectId} taco={taco} />

      <HomeFooter />
    </div>
  );
}
