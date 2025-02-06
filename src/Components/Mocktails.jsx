/* eslint-disable react/prop-types */

import DishesHeader from "./DishesHeader";
import FooterHeader from "./FotterHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import MockTailsLoop from "./MocktailsLoop";

export default function MockTails({ handleSelectId }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Mocktails </DishesHeader>

      <MockTailsLoop handleSelectId={handleSelectId} />

      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
