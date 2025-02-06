/* eslint-disable react/prop-types */

import DishesHeader from "./DishesHeader";
import FooterHeader from "./FotterHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import SpecialLoop from "./SpecialLoop";

export default function Special({ handleSelectId }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Special Juice </DishesHeader>

      <SpecialLoop handleSelectId={handleSelectId} />

      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
