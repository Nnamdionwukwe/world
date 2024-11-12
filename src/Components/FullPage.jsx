import Header from "./Header";
import Button from "./Button";
import MenuLetter from "./MenuLetter";
import SearchBox from "./SearchBox";

export default function FullPage() {
  return (
    <div>
      <Header />
      <SearchBox />

      <MenuLetter />

      <Button />
    </div>
  );
}
