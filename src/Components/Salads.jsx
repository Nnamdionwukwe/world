/* eslint-disable react/prop-types */
import SaladComponent from "./SaladComponentt";
import SaladLoop from "./SaladLoop";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";
import FooterHeader from "./FotterHeader";

export default function Salads({ handleSelectId }) {
  return (
    <div>
      <FullPage />
      <SaladComponent>Salads</SaladComponent>
      <SaladLoop handleSelectId={handleSelectId} />

      <HomeFooter />
      <FooterHeader />
    </div>
  );
}
