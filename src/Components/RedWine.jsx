/* eslint-disable react/prop-types */
import DishesHeader from "./DishesHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import RedWineLoop from "./RedWineLoop";

export default function RedWine({ taco, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Red Wine </DishesHeader>

      <RedWineLoop cart={cart} handleSelectId={handleSelectId} taco={taco} />

      <HomeFooter />
    </div>
  );
}
