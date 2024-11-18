/* eslint-disable react/prop-types */
import FullPage from "./FullPage";
import styles from "./HomePages.module.css";
import LocalDishLoop from "./LocalDishLoop";
import SaladComponent from "./SaladComponentt";
import SaladLoop from "./SaladLoop";
import FooterHeader from "./FotterHeader";
import HomeFooter from "./HomeFooter";

export default function HomePages({ salad, localDish, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />

      <SaladComponent>Salads</SaladComponent>

      <SaladLoop handleSelectId={handleSelectId} salad={salad} />

      <div className={styles.textDiv}>
        <SaladComponent>Main Dishes / Local Dishes</SaladComponent>

        <div className={styles.more}>
          See More <p>&gt; &gt;</p>
        </div>
      </div>

      <LocalDishLoop handleSelectId={handleSelectId} localDish={localDish} />

      <FooterHeader cart={cart} />

      <HomeFooter cart={cart} />
    </div>
  );
}
