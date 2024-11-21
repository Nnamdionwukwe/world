/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "./HomeFooter.module.css";

export default function HomeFooter({ cart }) {
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
            <a className={styles.email} href="www.gmail.com">
              <p>standfordelaze&#64;gmail.com</p>
            </a>
          </div>
        </div>
      </div>

      <footer className={styles.footerDiv2}>
        <p>Created by</p>
        <p>DC Tech</p>
      </footer>

      <div className={styles.floatCart}>
        <NavLink to="/CartLoop">
          <div className={styles.zero}>{<p>{cart.length}</p>}</div>

          <i className="fa fa-cart-plus" aria-hidden="true"></i>
        </NavLink>
      </div>
    </div>
  );
}
