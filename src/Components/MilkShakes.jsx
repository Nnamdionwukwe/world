/* eslint-disable react/prop-types */

import DishesHeader from "./DishesHeader";
import FooterHeader from "./FotterHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import MilkShakesLoop from "./MlkShakesLoop";

export default function MilkShakes({ handleSelectId }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Milk Shakes </DishesHeader>

      <MilkShakesLoop handleSelectId={handleSelectId} />

      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
