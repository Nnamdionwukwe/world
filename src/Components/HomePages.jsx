/* eslint-disable react/prop-types */
import FullPage from "./FullPage";
import styles from "./HomePages.module.css";
import LocalDishLoop from "./LocalDishLoop";
import SaladComponent from "./SaladComponentt";
import SaladLoop from "./SaladLoop";
import FooterHeader from "./FotterHeader";
import HomeFooter from "./HomeFooter";
import SidesExtraDishLoop from "./SidesExtraDishLoop";

export default function HomePages({
  salad,
  localDish,
  handleSelectId,
  cart,
  sidesExtra,
}) {
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

      <div className={styles.textDiv}>
        <SaladComponent>Main Dishes / Local Dishes</SaladComponent>

        <div className={styles.more}>
          See More <p>&gt; &gt;</p>
        </div>
      </div>

      <SidesExtraDishLoop
        cart={cart}
        handleSelectId={handleSelectId}
        sidesExtra={sidesExtra}
      />

      <FooterHeader cart={cart} />

      <HomeFooter cart={cart} />
    </div>
  );
}
