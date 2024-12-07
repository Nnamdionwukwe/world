/* eslint-disable react/prop-types */
import FullPage from "./FullPage";
import StarterLoop from "./StarterLoop";
import FooterHeader from "./FotterHeader";
import HomeFooter from "./HomeFooter";

import DishesHeader from "./DishesHeader";

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

      <FooterHeader cart={cart} />

      <HomeFooter cart={cart} />
    </div>
  );
}
