/* eslint-disable react/prop-types */
import FooterHeader from "./FotterHeader";
import Header from "./Header";
import HomeFooter from "./HomeFooter";
import styles from "./AboutUs.module.css";

export default function AboutUs({ cart }) {
  return (
    <div>
      <Header />

      <div className={styles.menuLetter}>
        <div>
          <h3>ABOUT US </h3>

          <div className={styles.div1}>
            <div className={styles.div}></div>
            <div className={styles.div2}></div>
          </div>
        </div>
      </div>

      <HomeFooter cart={cart} />

      <FooterHeader cart={cart} />
    </div>
  );
}
