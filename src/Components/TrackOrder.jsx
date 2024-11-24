import FooterHeader from "./FotterHeader";
import PagesHeader from "./PagesHeader";

export default function TrackOrder(cart) {
  return (
    <div>
      <PagesHeader />

      <div> </div>

      <FooterHeader cart={cart} />
    </div>
  );
}
