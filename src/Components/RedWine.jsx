/* eslint-disable react/prop-types */
import DishesHeader from "./DishesHeader";
import FooterHeader from "./FotterHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import RedWineLoop from "./RedWineLoop";

export default function RedWine({ handleSelectId }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Red Wine </DishesHeader>

      <RedWineLoop handleSelectId={handleSelectId} />

      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
