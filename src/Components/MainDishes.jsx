/* eslint-disable react/prop-types */
import FullPage from "./FullPage";
import LocalDishLoop from "./LocalDishLoop";
import styles from "./HomePages.module.css";
import SaladComponent from "./SaladComponentt";
import FooterHeader from "./FotterHeader";

export default function MainDishes({ localDish, handleSelectId }) {
  return (
    <div>
      <FullPage />

      <div className={styles.textDiv}>
        <SaladComponent>Main Dishes / Local Dishes</SaladComponent>

        <div className={styles.more}>
          See More <p>&gt;</p>
        </div>
      </div>

      <LocalDishLoop handleSelectId={handleSelectId} localDish={localDish} />

      <FooterHeader />
    </div>
  );
}
