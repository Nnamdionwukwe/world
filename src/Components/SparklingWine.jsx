/* eslint-disable react/prop-types */

import DishesHeader from "./DishesHeader";
import FooterHeader from "./FotterHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import SparklingWine from "./SparklingWineLoop";

export default function Tequila({ handleSelectId }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Sparkling Wine </DishesHeader>

      <SparklingWine handleSelectId={handleSelectId} />

      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
