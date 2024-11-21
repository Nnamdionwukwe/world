/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "./HomeFooter.module.css";

export default function HomeFooter({ cart }) {
  return (
    <div>
      <div className={styles.homeFooterMain}>
        <div>
          <p className={styles.business}>Business Hours</p>

          <div className={styles.daysList}>
            <p>Sunday</p>

            <div className={styles.timeDiv}>
              <div>
                <i className="fa-regular fa-clock"></i>
              </div>

              <div>
                <p>
                  open <span>24</span> <span>hours</span>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.daysList}>
            <p>Monday</p>

            <div className={styles.timeDiv}>
              <i className="fa-regular fa-clock"></i>
              <p>
                open <span>24</span> <span>hours</span>
              </p>
            </div>
          </div>

          <div className={styles.daysList}>
            <p>Tuesday</p>

            <div className={styles.timeDiv}>
              <i className="fa-regular fa-clock"></i>
              <p>
                open <span>24</span> <span>hours</span>
              </p>
            </div>
          </div>

          <div className={styles.daysList}>
            <p>Wednesday</p>

            <div className={styles.timeDiv}>
              <i className="fa-regular fa-clock"></i>
              <p>
                open <span>24</span> <span>hours</span>
              </p>
            </div>
          </div>

          <div className={styles.daysList}>
            <p>Thurday</p>

            <div className={styles.timeDiv}>
              <i className="fa-regular fa-clock"></i>
              <p>
                open <span>24</span> <span>hours</span>
              </p>
            </div>
          </div>

          <div className={styles.daysList}>
            <p>Friday</p>

            <div className={styles.timeDiv}>
              <i className="fa-regular fa-clock"></i>
              <p>
                open <span>24</span> <span>hours</span>
              </p>
            </div>
          </div>

          <div className={styles.daysList}>
            <p>Saturday</p>

            <div className={styles.timeDiv}>
              <i className="fa-regular fa-clock"></i>
              <p>
                open <span>24</span> <span>hours</span>
              </p>
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
            <a href="www.gmail.com">
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
