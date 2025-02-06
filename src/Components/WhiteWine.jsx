/* eslint-disable react/prop-types */
import DishesHeader from "./DishesHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import WhiteWineLoop from "./WhiteWineLoop";

export default function WhiteWine({ taco, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>White Wine </DishesHeader>

      <WhiteWineLoop cart={cart} handleSelectId={handleSelectId} taco={taco} />

      <HomeFooter />
    </div>
  );
}
