/* eslint-disable react/prop-types */
import FullPage from "./FullPage";
import LocalDishLoop from "./LocalDishLoop";
import DishesHeader from "./DishesHeader";
import SaladComponent from "./SaladComponentt";
import SaladLoop from "./SaladLoop";
import GrillHouseLoop from "./GrillHouseLoop";
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
import TequilaLoop from "./TequileLoop";
import HomeFooter from "./HomeFooter";
import ChampagneLoop from "./ChampagneLoop";
import SparklingWineLoop from "./SparklingWineLoop";
import RedWineLoop from "./RedWineLoop";
import WhiteWineLoop from "./WhiteWineLoop";
import ClassicLoop from "./ClassicLoop";
import SmoothiesLoop from "./SmoothiesLoop";
import MockTailsLoop from "./MocktailsLoop";
import SpecialLoop from "./SpecialLoop";
import MilkShakesLoop from "./MlkShakesLoop";
import ParfaitLoop from "./ParfaitLoop";
import BeerLoop from "./BeerLoop";
import EnergyDrinksLoop from "./EnergyDrinksLoop";
import ShishaLoop from "./ShishaLoop";
import SoftDrinksLoop from "./SoftDrinksLoop";

export default function HomePages({ handleSelectId }) {
  return (
    <div>
      <FullPage />

      <SaladComponent>Salads</SaladComponent>

      <SaladLoop handleSelectId={handleSelectId} />

      <DishesHeader>Main Dishes / Local Dishes</DishesHeader>

      <LocalDishLoop handleSelectId={handleSelectId} />

      <DishesHeader>Sides / Extras </DishesHeader>

      <SidesExtraDishLoop handleSelectId={handleSelectId} />

      <DishesHeader> Grill House Specials</DishesHeader>

      <GrillHouseLoop handleSelectId={handleSelectId} />

      <DishesHeader> Quick Chinese</DishesHeader>

      <QuickChineseLoop handleSelectId={handleSelectId} />

      <DishesHeader> Pasta Special</DishesHeader>

      <PasterLoop handleSelectId={handleSelectId} />

      <DishesHeader> Starter </DishesHeader>

      <StarterLoop handleSelectId={handleSelectId} />

      <DishesHeader> Tacos</DishesHeader>

      <TacosLoop handleSelectId={handleSelectId} />

      <DishesHeader> Quick Eats</DishesHeader>

      <QuickEatsLoop handleSelectId={handleSelectId} />

      <DishesHeader> Whiskey</DishesHeader>

      <WhiskeyLoop handleSelectId={handleSelectId} />

      <DishesHeader> Brandy</DishesHeader>

      <BrandyLoop handleSelectId={handleSelectId} />

      <DishesHeader> Vodka</DishesHeader>

      <VodkaLoop handleSelectId={handleSelectId} />

      <DishesHeader> Gin</DishesHeader>

      <GinLoop handleSelectId={handleSelectId} />

      <DishesHeader> Tequila</DishesHeader>

      <TequilaLoop handleSelectId={handleSelectId} />

      <DishesHeader> Champagne</DishesHeader>

      <ChampagneLoop handleSelectId={handleSelectId} />

      <DishesHeader> Sparkling Wine</DishesHeader>

      <SparklingWineLoop handleSelectId={handleSelectId} />

      <DishesHeader> Red Wine</DishesHeader>

      <RedWineLoop handleSelectId={handleSelectId} />

      <DishesHeader> White Wine</DishesHeader>

      <WhiteWineLoop handleSelectId={handleSelectId} />

      <DishesHeader> Classic Cocktail</DishesHeader>

      <ClassicLoop handleSelectId={handleSelectId} />

      <DishesHeader> Smoothies</DishesHeader>

      <SmoothiesLoop handleSelectId={handleSelectId} />

      <DishesHeader> Mocktails</DishesHeader>

      <MockTailsLoop handleSelectId={handleSelectId} />

      <DishesHeader> Special Juice</DishesHeader>

      <SpecialLoop handleSelectId={handleSelectId} />

      <DishesHeader> Milkshakes </DishesHeader>

      <MilkShakesLoop handleSelectId={handleSelectId} />

      <DishesHeader> Parfait</DishesHeader>

      <ParfaitLoop handleSelectId={handleSelectId} />

      <DishesHeader> Beer</DishesHeader>

      <BeerLoop handleSelectId={handleSelectId} />

      <DishesHeader> Energy Drinks</DishesHeader>

      <EnergyDrinksLoop handleSelectId={handleSelectId} />

      <DishesHeader> Shisha</DishesHeader>

      <ShishaLoop handleSelectId={handleSelectId} />

      <DishesHeader> Soft Drinks</DishesHeader>

      <SoftDrinksLoop handleSelectId={handleSelectId} />

      <HomeFooter />
    </div>
  );
}
