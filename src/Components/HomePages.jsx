/* eslint-disable react/prop-types */
import FullPage from "./FullPage";
import LocalDishLoop from "./LocalDishLoop";
import DishesHeader from "./DishesHeader";
import SaladComponent from "./SaladComponentt";
import SaladLoop from "./SaladLoop";
import GrillHouseLoop from "./GrillHouseLoop";
import FooterHeader from "./FotterHeader";
import HomeFooter from "./HomeFooter";
import SidesExtraDishLoop from "./SidesExtraDishLoop";
import QuickChineseLoop from "./QuickChineseLoop";
import PasterLoop from "./PasterLoop";

export default function HomePages({
  salad,
  localDish,
  handleSelectId,
  cart,
  sidesExtra,
  grillHouse,
  quickChinese,
  paster,
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
        handleSelectId={handleSelectId}
        sidesExtra={sidesExtra}
      />

      <DishesHeader> Grill House Specials</DishesHeader>

      <GrillHouseLoop grillHouse={grillHouse} handleSelectId={handleSelectId} />

      <DishesHeader> Quick Chinese</DishesHeader>

      <QuickChineseLoop
        quickChinese={quickChinese}
        handleSelectId={handleSelectId}
      />

      <DishesHeader> Pasta Special</DishesHeader>

      <PasterLoop paster={paster} handleSelectId={handleSelectId} />

      <FooterHeader cart={cart} />

      <HomeFooter cart={cart} />
    </div>
  );
}
