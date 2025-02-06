/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "./HomeFooter.module.css";

import { ShopContext } from ".././context/ShopContextProvider";
import { useContext } from "react";

export default function HomeFooter() {
  const { cart } = useContext(ShopContext);

  return (
    <div>
      <div className={styles.homeFooterMain}>
        <div>
          <h5 className={styles.business}>Business Hours</h5>

          <div className={styles.daysList}>
            <p className={styles.days1}>Sunday</p>

            <div className={styles.timeDiv}>
              <i className="fa-regular fa-clock"></i>

              <span>
                open <span>24</span> <span>hours</span>
              </span>
            </div>
          </div>

          <div className={styles.daysList}>
            <p className={styles.days2}>Monday</p>

            <div className={styles.timeDiv}>
              <i className="fa-regular fa-clock"></i>
              <p>
                open <span>24</span> <span>hours</span>
              </p>
            </div>
          </div>

          <div className={styles.daysList}>
            <p className={styles.days3}>Tuesday</p>

            <div className={styles.timeDiv}>
              <i className="fa-regular fa-clock"></i>
              <p>
                open <span>24</span> <span>hours</span>
              </p>
            </div>
          </div>

          <div className={styles.daysList}>
            <p className={styles.days4}>Wednesday</p>

            <div className={styles.timeDiv}>
              <i className="fa-regular fa-clock"></i>
              <p>
                open <span>24</span> <span>hours</span>
              </p>
            </div>
          </div>

          <div className={styles.daysList}>
            <p className={styles.days5}>Thurday</p>

            <div className={styles.timeDiv}>
              <i className="fa-regular fa-clock"></i>
              <p>
                open <span>24</span> <span>hours</span>
              </p>
            </div>
          </div>

          <div className={styles.daysList}>
            <p className={styles.days6}>Friday</p>

            <div className={styles.timeDiv}>
              <i className="fa-regular fa-clock"></i>
              <p>
                open <span>24</span> <span>hours</span>
              </p>
            </div>
          </div>

          <div className={styles.daysList}>
            <p className={styles.days7}>Saturday</p>

            <div className={styles.timeDiv}>
              <i className="fa-regular fa-clock"></i>
              <p>
                open <span>24</span> <span>hours</span>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.headerSub}>
          <h5 className={styles.quick}>Quick Links</h5>

          <NavLink to="/trackorder" className={styles.navLink}>
            <div className={styles.subArrow}>
              <p className={styles.gt}>&gt;</p>
              <p>track order</p>
            </div>
          </NavLink>

          <NavLink to="/contacts" className={styles.navLink}>
            <div className={styles.subArrow}>
              <p className={styles.gt}>&gt;</p>
              <p>contacts</p>
            </div>
          </NavLink>
        </div>
      </div>

      <div className={styles.barcodeDiv}>
        <div>
          <h3 className={styles.stanforde}>Stanford Laze</h3>

          <div className={styles.independDiv}>
            <div>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <p>27 Independence Avanue,</p>
            </div>

            <p>Independence Layout </p>
          </div>

          <div className={styles.mailDiv}>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <a className={styles.email} href="www.gmail.com">
              <p>standfordlaze&#64;gmail.com</p>
            </a>
          </div>
        </div>
      </div>

      <footer className={styles.footerDiv2}>
        <p>Created by</p>
        <p className={styles.footerDiv2P}> Daft Punk</p>
      </footer>

      <div className={cart?.length > 0 ? styles.floatCart : styles.floatCart2}>
        <NavLink to="/CartLoop">
          {cart?.length > 0 && (
            <div
              className={
                (cart?.length > 0 ? styles.zero : styles.floatCartNumber,
                cart?.length >= 10 && styles.floatCartNumber2)
              }
            >
              {<p className={styles.P}>{cart?.length}</p>}
            </div>
          )}
          <i className="fa fa-cart-plus" aria-hidden="true"></i>
        </NavLink>
      </div>
    </div>
  );
}
