/* eslint-disable react/prop-types */
import PasterLoop from "./PasterLoop";

import DishesHeader from "./DishesHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import FooterHeader from "./FotterHeader";

export default function Paster({ paster, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Pasta Special </DishesHeader>

      <PasterLoop cart={cart} handleSelectId={handleSelectId} paster={paster} />

      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
