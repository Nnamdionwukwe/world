/* eslint-disable react/prop-types */
import FullPage from "./FullPage";
import LocalDishLoop from "./LocalDishLoop";
import DishesHeader from "./DishesHeader";
import SaladComponent from "./SaladComponentt";
import SaladLoop from "./SaladLoop";
import FooterHeader from "./FotterHeader";
import HomeFooter from "./HomeFooter";
import SidesExtraDishLoop from "./SidesExtraDishLoop";

export default function HomePages({
  salad,
  localDish,
  handleSelectId,
  cart,
  sidesExtra,
}) {
  return (
    <div>
      <FullPage />

      <SaladComponent>Salads</SaladComponent>

      <SaladLoop handleSelectId={handleSelectId} salad={salad} />

      <DishesHeader>Main Dishes / Local Dishes</DishesHeader>

      <LocalDishLoop handleSelectId={handleSelectId} localDish={localDish} />

      <DishesHeader>Sides / Extras </DishesHeader>

      <SidesExtraDishLoop
        cart={cart}
        handleSelectId={handleSelectId}
        sidesExtra={sidesExtra}
      />

      <FooterHeader cart={cart} />

      <HomeFooter cart={cart} />
    </div>
  );
}
