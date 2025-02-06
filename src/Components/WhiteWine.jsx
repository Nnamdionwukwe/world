/* eslint-disable react/prop-types */
import DishesHeader from "./DishesHeader";
import FooterHeader from "./FotterHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import WhiteWineLoop from "./WhiteWineLoop";

export default function WhiteWine({ handleSelectId }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>White Wine </DishesHeader>

      <WhiteWineLoop handleSelectId={handleSelectId} />

      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
