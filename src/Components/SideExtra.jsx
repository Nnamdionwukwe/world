/* eslint-disable react/prop-types */
import FullPage from "./FullPage";
import SidesExtraDishLoop from "./SidesExtraDishLoop";
import styles from "./HomePages.module.css";
import SaladComponent from "./SaladComponentt";
import FooterHeader from "./FotterHeader";
import HomeFooter from "./HomeFooter";

export default function SidesExtra({ SidesExtra, handleSelectId, cart }) {
  return (
    <div>
      <FullPage />

      <div className={styles.textDiv}>
        <SaladComponent>Main Dishes / Local Dishes</SaladComponent>

        <div className={styles.more}>
          See More <p>&gt; &gt;</p>
        </div>
      </div>

      <SidesExtraDishLoop
        cart={cart}
        handleSelectId={handleSelectId}
        SidesExtra={SidesExtra}
      />

      <FooterHeader cart={cart} />

      <HomeFooter cart={cart} />
    </div>
  );
}
