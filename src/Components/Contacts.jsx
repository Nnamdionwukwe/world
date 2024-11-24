/* eslint-disable react/prop-types */
import FooterHeader from "./FotterHeader";
import HomeFooter from "./HomeFooter";
import styles from "./Contacts.module.css";
import PagesHeader from "./PagesHeader";

export default function Contacts({ cart }) {
  return (
    <div>
      <PagesHeader />

      <div>
        <div className={styles.menuLetter}>
          <div>
            <h3>CONTACTS </h3>

            <div className={styles.div1}>
              <div className={styles.div}></div>
              <div className={styles.div2}></div>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.phoneDiv}>
            <div>
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className={styles.phoneDivSub}>
              <h2>Phone</h2>
              <p>+2348037748573</p>
            </div>
          </div>

          <div className={styles.phoneDiv}>
            <div className={styles.phoneDi}>
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className={styles.phoneDivSub}>
              <h2>Address</h2>
              <p>27 Independence Avenue,</p>
              <p>Independence Layout Enugu</p>
            </div>
          </div>

          <div className={styles.phoneDiv}>
            <div>
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className={styles.phoneDivSub}>
              <h2>Email</h2>
              <p>standfordlaze@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <HomeFooter cart={cart} />

      <FooterHeader cart={cart} />
    </div>
  );
}
