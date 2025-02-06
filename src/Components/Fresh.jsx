/* eslint-disable react/prop-types */

import DishesHeader from "./DishesHeader";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import FreshLoop from "./FreshLoop";

export default function Fresh({ handleSelectId }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Fresh Juices</DishesHeader>

      <FreshLoop handleSelectId={handleSelectId} />

      <HomeFooter />
    </div>
  );
}
