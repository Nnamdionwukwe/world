/* eslint-disable react/prop-types */
import QuickEatsLoop from "./QuickEatsLoop";

import DishesHeader from "./DishesHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import FooterHeader from "./FotterHeader";

export default function Whiskey({ handleSelectId, cart }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Whiskey </DishesHeader>

      <QuickEatsLoop cart={cart} handleSelectId={handleSelectId} />

      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
