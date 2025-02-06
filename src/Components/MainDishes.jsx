/* eslint-disable react/prop-types */
import LocalDishLoop from "./LocalDishLoop";
import styles from "./HomePages.module.css";
import SaladComponent from "./SaladComponentt";
import FullPage from "./FullPage";
import HomeFooter from "./HomeFooter";

export default function MainDishes({ localDish, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />

      <div className={styles.textDiv}>
        <SaladComponent>Main Dishes / Local Dishes</SaladComponent>

        <div className={styles.more}>
          See More <p>&gt; &gt;</p>
        </div>
      </div>

      <LocalDishLoop
        cart={cart}
        handleSelectId={handleSelectId}
        localDish={localDish}
      />

      <HomeFooter />
    </div>
  );
}
