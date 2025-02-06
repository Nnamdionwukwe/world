/* eslint-disable react/prop-types */

import DishesHeader from "./DishesHeader";
import FullPage from "./FullPage";
import ParfaitLoop from "./ParfaitLoop";

export default function Parfait({ handleSelectId }) {
  return (
    <div>
      <FullPage />
      <DishesHeader>Parfait </DishesHeader>

      <ParfaitLoop handleSelectId={handleSelectId} />
    </div>
  );
}
