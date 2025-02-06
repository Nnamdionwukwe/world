/* eslint-disable react/prop-types */
import QuickChineseLoop from "./QuickChineseLoop";

import DishesHeader from "./DishesHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";

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

      <HomeFooter />
    </div>
  );
}
