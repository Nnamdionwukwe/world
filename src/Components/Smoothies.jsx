/* eslint-disable react/prop-types */

import DishesHeader from "./DishesHeader";
import FooterHeader from "./FotterHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import SmoothiesLoop from "./SmoothiesLoop";

export default function Smoothies({ handleSelectId }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Smoothies </DishesHeader>

      <SmoothiesLoop handleSelectId={handleSelectId} />

      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
