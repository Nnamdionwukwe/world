/* eslint-disable react/prop-types */
import FullPage from "./FullPage";
import PasterLoop from "./PasterLoop";
import FooterHeader from "./FotterHeader";
import HomeFooter from "./HomeFooter";

import DishesHeader from "./DishesHeader";

export default function Paster({ paster, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />

      <DishesHeader>Pasta Special </DishesHeader>

      <PasterLoop cart={cart} handleSelectId={handleSelectId} paster={paster} />

      <FooterHeader cart={cart} />

      <HomeFooter cart={cart} />
    </div>
  );
}
