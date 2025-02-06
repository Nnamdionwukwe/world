/* eslint-disable react/prop-types */

import DishesHeader from "./DishesHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import SparklingWine from "./SparklingWineLoop";

export default function Tequila({ taco, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Sparkling Wine </DishesHeader>

      <SparklingWine cart={cart} handleSelectId={handleSelectId} taco={taco} />

      <HomeFooter />
    </div>
  );
}
