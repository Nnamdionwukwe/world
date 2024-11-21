/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "./FotterHeader.module.css";
import { useState } from "react";

export default function FooterHeader({ cart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  function handleIsOpen() {
    setIsOpen((is) => !is);
    setIsOpen1(false);
  }

  function handleIsOpen1() {
    setIsOpen1((is) => !is);
  }

  return (
    <header className={styles.header}>
      <div className={styles.trackDiv}>
        <NavLink to="/TrackOrder">
          <i className="fa fa-arrows-alt" aria-hidden="true"></i>
        </NavLink>
      </div>

      <div className={styles.footerDiv}>
        <i
          onClick={handleIsOpen1}
          className="fa fa-bars"
          aria-hidden="true"
        ></i>

        {isOpen1 && (
          <div className={styles.menuList}>
            <div onClick={handleIsOpen1} className={styles.times}>
              &times;
            </div>

            <div className={styles.menuListSub}>
              <NavLink className={styles.navLink} to="/">
                <div>
                  <img className={styles.icons} src="hamburger.svg" />
                  <p>Menu</p>
                </div>
              </NavLink>

              <NavLink className={styles.navLink} to="/Packages">
                <div>
                  <img
                    className={styles.icons}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn42XqHnIfKwrEklha_-1Dn8950ZKEA5NgsA&s"
                  />
                  <p className={styles.para1}>Packages</p>
                </div>
              </NavLink>

              <NavLink className={styles.navLink} to="/Specialities">
                <div>
                  <img
                    className={styles.icons}
                    src="https://freesvg.org/img/ftdiff.png"
                  />
                  <p>Specialities</p>
                </div>
              </NavLink>

              <NavLink className={styles.navLink} to="/TrackOrder">
                <div>
                  <img
                    className={styles.icons}
                    src="https://www.svgrepo.com/show/326410/i-exam-multiple-choice.svg"
                  />
                  <p>Track Order</p>
                </div>
              </NavLink>

              <NavLink className={styles.navLink} to="/Reservations">
                <div>
                  <p>Reservation</p>
                </div>
              </NavLink>

              <NavLink className={styles.navLink} to="/Contacts">
                <div>
                  <img
                    className={styles.icons}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYRwXDbmmz01bNKgqX6AvK2INDFs48ugk586grkRcru0yNga1IJuddCxnSZZa1JOzC9PE&usqp=CAU"
                  />
                  <p>Contacts</p>
                </div>
              </NavLink>

              <div onClick={handleIsOpen}>
                <img
                  className={styles.icons}
                  src="https://icones.pro/wp-content/uploads/2022/02/icone-de-cloche-grise.png"
                />
                <p>Call Waiter</p>
              </div>

              <NavLink className={styles.navLink} to="/AboutUs">
                <div>
                  <img
                    className={styles.icons}
                    src="https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/info_information_about_help-2-128.png"
                  />
                  <p>About Us</p>
                </div>
              </NavLink>

              <NavLink className={styles.navLink} to="/Login">
                <div className={styles.navLinkDiv}>
                  <i className="fa-solid fa-right-to-bracket"></i>
                  <p> Login</p>
                </div>
              </NavLink>
            </div>
          </div>
        )}
      </div>

      <div className={styles.footerSubDiv2}>
        <div className={styles.notifyDiv}>
          <i
            onClick={handleIsOpen}
            className="fa fa-bell"
            aria-hidden="true"
          ></i>

          {isOpen && (
            <div className={styles.callDivMain}>
              <div className={styles.notifyDiv2}>
                <div className={styles.waiterDiv2}>
                  <h3>Call Waiter</h3>

                  <button onClick={handleIsOpen}>&times;</button>
                </div>

                <div className={styles.selectDiv}>
                  <select>
                    <option>Select Table</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>

                <div className={styles.callDiv}>
                  <button>Call</button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={styles.notifyDivSub}>
          <NavLink to="/cartloop">
            {cart.length > 0 && (
              <div className={styles.zero}>{cart.length}</div>
            )}
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
