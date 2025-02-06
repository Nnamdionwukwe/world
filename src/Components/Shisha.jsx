/* eslint-disable react/prop-types */

import DishesHeader from "./DishesHeader";
import FooterHeader from "./FotterHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import ShishaLoop from "./ShishaLoop";

export default function Shisha({ handleSelectId }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Shisha </DishesHeader>

      <ShishaLoop handleSelectId={handleSelectId} />

      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
