/* eslint-disable react/prop-types */
import FullPage from "./FullPage";
import QuickChineseLoop from "./QuickChineseLoop";
import FooterHeader from "./FotterHeader";
import HomeFooter from "./HomeFooter";

import DishesHeader from "./DishesHeader";

export default function QuickChinese({ quickChinese, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />

      <DishesHeader>Quick Chinese </DishesHeader>

      <QuickChineseLoop
        cart={cart}
        handleSelectId={handleSelectId}
        quickChinese={quickChinese}
      />

      <FooterHeader cart={cart} />

      <HomeFooter cart={cart} />
    </div>
  );
}
