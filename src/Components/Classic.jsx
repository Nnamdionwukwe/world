/* eslint-disable react/prop-types */

import DishesHeader from "./DishesHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import ClassicLoop from "./ClassicLoop";
import FooterHeader from "./FotterHeader";

export default function Classic({ handleSelectId }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Classic Cocktail </DishesHeader>

      <ClassicLoop handleSelectId={handleSelectId} />

      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
