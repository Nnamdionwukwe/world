/* eslint-disable react/prop-types */
import StarterLoop from "./StarterLoop";

import DishesHeader from "./DishesHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import FooterHeader from "./FotterHeader";

export default function Starter({ starter, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Stater </DishesHeader>

      <StarterLoop
        cart={cart}
        handleSelectId={handleSelectId}
        starter={starter}
      />
      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
