/* eslint-disable react/prop-types */
import Button from "./Button";
import Header from "./Header";
import MenuLetter from "./MenuLetter";
import SearchBox from "./SearchBox";
import SaladComponent from "./SaladComponentt";
import SaladLoop from "./SaladLoop";
import FooterHeader from "./FotterHeader";

export default function Salads({ salad, handleSelectId }) {
  return (
    <div>
      <Header />
      <SearchBox />
      <MenuLetter />
      <Button />
      <SaladComponent>Salads</SaladComponent>
      <SaladLoop handleSelectId={handleSelectId} salad={salad} />
      <FooterHeader />
    </div>
  );
}
