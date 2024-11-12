import { Link, NavLink } from "react-router-dom";
import styles from "./HomeFooter.module.css";

export default function HomeFooter() {
  return (
    <div>
      <div className={styles.homeFooterMain}>
        <div>
          <p className={styles.business}>Business Hours</p>

          <div className={styles.daysList}>
            <p>Sunday</p>

            <div className={styles.timeDiv}>
              <p>time</p>
              <p>Sunday</p>
            </div>
          </div>

          <div className={styles.daysList}>
            <p>Sunday</p>

            <div className={styles.timeDiv}>
              <p>time</p>
              <p>Sunday</p>
            </div>
          </div>

          <div className={styles.daysList}>
            <p>Sunday</p>

            <div className={styles.timeDiv}>
              <p>time</p>
              <p>Sunday</p>
            </div>
          </div>
        </div>

        <div className={styles.headerSub}>
          <p>Quick Links</p>

          <div className={styles.subArrow}>
            <p>&rarr;</p>
            <p>Track Order</p>
          </div>

          <div className={styles.subArrow}>
            <p>&rarr;</p>
            <p>Contacts</p>
          </div>
        </div>
      </div>

      <div className={styles.barcodeDiv}>
        <h3 className={styles.stanforde}>Stanforde Laze</h3>

        <div className={styles.independDiv}>
          <div>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <p>27 Independence Avanue,</p>
          </div>

          <p>Independence Layout Enugu</p>
        </div>

        <div className={styles.mailDiv}>
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <a href="www.gmail.com">
            <p>standfordelaze&#64;gmail.com</p>
          </a>
        </div>
      </div>

      <footer className={styles.footerDiv2}>
        <p>Created by</p>
        <p>DC Tech</p>
      </footer>

      <div className={styles.floatCart}>
        <NavLink to="/CartLoop">
          <p>6</p>
          <i className="fa fa-cart-plus" aria-hidden="true"></i>
        </NavLink>
      </div>
    </div>
  );
}
