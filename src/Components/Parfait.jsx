/* eslint-disable react/prop-types */

import DishesHeader from "./DishesHeader";
import FooterHeader from "./FotterHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import ParfaitLoop from "./ParfaitLoop";

export default function Parfait({ handleSelectId }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Parfait </DishesHeader>

      <ParfaitLoop handleSelectId={handleSelectId} />

      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
