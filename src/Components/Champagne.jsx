/* eslint-disable react/prop-types */

import DishesHeader from "./DishesHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import ChampagneLoop from "./ChampagneLoop";
import FooterHeader from "./FotterHeader";

export default function Champagne({ handleSelectId }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Champagne </DishesHeader>

      <ChampagneLoop handleSelectId={handleSelectId} />

      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
