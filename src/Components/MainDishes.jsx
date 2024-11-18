/* eslint-disable react/prop-types */
import FullPage from "./FullPage";
import LocalDishLoop from "./LocalDishLoop";
import styles from "./HomePages.module.css";
import SaladComponent from "./SaladComponentt";
import FooterHeader from "./FotterHeader";
import HomeFooter from "./HomeFooter";

export default function MainDishes({ localDish, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />

      <div className={styles.textDiv}>
        <SaladComponent>Main Dishes / Local Dishes</SaladComponent>

        <div className={styles.more}>
          See More <p>&gt;</p>
        </div>
      </div>

      <LocalDishLoop
        cart={cart}
        handleSelectId={handleSelectId}
        localDish={localDish}
      />

      <FooterHeader cart={cart} />

      <HomeFooter cart={cart} />
    </div>
  );
}
