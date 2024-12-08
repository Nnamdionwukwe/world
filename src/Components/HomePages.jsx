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
import StarterLoop from "./StarterLoop";
import TacosLoop from "./TacosLoop";
import QuickEatsLoop from "./QuickEatsLoop";
import WhiskeyLoop from "./WhiskeyLoop";
import GinLoop from "./GinLoop";
import VodkaLoop from "./VodkaLoop";
import BrandyLoop from "./BrandyLoop";

export default function HomePages({
  salad,
  localDish,
  handleSelectId,
  cart,
  sidesExtra,
  grillHouse,
  quickChinese,
  paster,
  starter,
  taco,
  quickEat,
  whiskey,
  brandy,
  vodka,
  gin,
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

      <DishesHeader> Starter </DishesHeader>

      <StarterLoop starter={starter} handleSelectId={handleSelectId} />

      <DishesHeader> Tacos</DishesHeader>

      <TacosLoop taco={taco} handleSelectId={handleSelectId} />

      <DishesHeader> Quick Eats</DishesHeader>

      <QuickEatsLoop taco={quickEat} handleSelectId={handleSelectId} />

      <DishesHeader> Whiskey</DishesHeader>

      <WhiskeyLoop taco={whiskey} handleSelectId={handleSelectId} />

      <DishesHeader> Brandy</DishesHeader>

      <BrandyLoop taco={brandy} handleSelectId={handleSelectId} />

      <DishesHeader> Vodka</DishesHeader>

      <VodkaLoop taco={vodka} handleSelectId={handleSelectId} />

      <DishesHeader> Gin</DishesHeader>

      <GinLoop taco={gin} handleSelectId={handleSelectId} />

      <DishesHeader> Tequila</DishesHeader>

      <GinLoop taco={gin} handleSelectId={handleSelectId} />

      <DishesHeader> Champagne</DishesHeader>

      <GinLoop taco={gin} handleSelectId={handleSelectId} />

      <DishesHeader> Sparkling Wine</DishesHeader>

      <GinLoop taco={gin} handleSelectId={handleSelectId} />

      <DishesHeader> Red Wine</DishesHeader>

      <GinLoop taco={gin} handleSelectId={handleSelectId} />

      <DishesHeader> White Wine</DishesHeader>

      <GinLoop taco={gin} handleSelectId={handleSelectId} />

      <DishesHeader> Classic Cocktail</DishesHeader>

      <GinLoop taco={gin} handleSelectId={handleSelectId} />

      <DishesHeader> SMoothies</DishesHeader>

      <GinLoop taco={gin} handleSelectId={handleSelectId} />

      <DishesHeader> Mocktails</DishesHeader>

      <GinLoop taco={gin} handleSelectId={handleSelectId} />

      <DishesHeader> Special Juice</DishesHeader>

      <GinLoop taco={gin} handleSelectId={handleSelectId} />

      <DishesHeader> Milkshakes </DishesHeader>

      <GinLoop taco={gin} handleSelectId={handleSelectId} />

      <DishesHeader> Parfait</DishesHeader>

      <GinLoop taco={gin} handleSelectId={handleSelectId} />

      <DishesHeader> Beer</DishesHeader>

      <GinLoop taco={gin} handleSelectId={handleSelectId} />

      <DishesHeader> Energy Drinks</DishesHeader>

      <GinLoop taco={gin} handleSelectId={handleSelectId} />

      <DishesHeader> Shisha</DishesHeader>

      <GinLoop taco={gin} handleSelectId={handleSelectId} />

      <DishesHeader> Soft Drinks</DishesHeader>

      <GinLoop taco={gin} handleSelectId={handleSelectId} />

      <FooterHeader cart={cart} />

      <HomeFooter cart={cart} />
    </div>
  );
}
