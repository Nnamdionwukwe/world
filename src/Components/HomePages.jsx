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
  tequila,
  softDrink,
  shisha,

  champagne,
  sparkling,
  redWine,
  whiteWine,
  classic,
  smoothies,
  mocktail,
  special,
  milkshake,
  parfait,
  beer,
  energyDrink,
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

      <GinLoop taco={tequila} handleSelectId={handleSelectId} />

      <DishesHeader> Champagne</DishesHeader>

      <GinLoop taco={champagne} handleSelectId={handleSelectId} />

      <DishesHeader> Sparkling Wine</DishesHeader>

      <GinLoop taco={sparkling} handleSelectId={handleSelectId} />

      <DishesHeader> Red Wine</DishesHeader>

      <GinLoop taco={redWine} handleSelectId={handleSelectId} />

      <DishesHeader> White Wine</DishesHeader>

      <GinLoop taco={whiteWine} handleSelectId={handleSelectId} />

      <DishesHeader> Classic Cocktail</DishesHeader>

      <GinLoop taco={classic} handleSelectId={handleSelectId} />

      <DishesHeader> SMoothies</DishesHeader>

      <GinLoop taco={smoothies} handleSelectId={handleSelectId} />

      <DishesHeader> Mocktails</DishesHeader>

      <GinLoop taco={mocktail} handleSelectId={handleSelectId} />

      <DishesHeader> Special Juice</DishesHeader>

      <GinLoop taco={special} handleSelectId={handleSelectId} />

      <DishesHeader> Milkshakes </DishesHeader>

      <GinLoop taco={milkshake} handleSelectId={handleSelectId} />

      <DishesHeader> Parfait</DishesHeader>

      <GinLoop taco={parfait} handleSelectId={handleSelectId} />

      <DishesHeader> Beer</DishesHeader>

      <GinLoop taco={beer} handleSelectId={handleSelectId} />

      <DishesHeader> Energy Drinks</DishesHeader>

      <GinLoop taco={energyDrink} handleSelectId={handleSelectId} />

      <DishesHeader> Shisha</DishesHeader>

      <GinLoop taco={shisha} handleSelectId={handleSelectId} />

      <DishesHeader> Soft Drinks</DishesHeader>

      <GinLoop taco={softDrink} handleSelectId={handleSelectId} />

      <FooterHeader cart={cart} />

      <HomeFooter cart={cart} />
    </div>
  );
}
