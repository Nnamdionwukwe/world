import { useState } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function PagesHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  function handleIsOpen() {
    setIsOpen((is) => !is);
    setIsOpen1(false);
  }

  function handleIsOpen1() {
    setIsOpen1((is) => !is);
    setIsOpen(false);
    setIsOpen2(false);
  }

  function handleIsOpen2() {
    setIsOpen2((is) => !is);
  }

  return (
    <>
      <div className={styles.mainHeader}>
        <div>
          <NavLink to="/">
            <img
              className={styles.headerLogo1}
              src="https://menu.stanfordelaze.ng/uploads/thumb/6ca252f775ee8306d1981e6ee2d0d3c7.png"
            />
          </NavLink>
        </div>

        <div>
          <div className={styles.notify}>
            <i
              onClick={handleIsOpen}
              className="fa fa-bell"
              aria-hidden="true"
            ></i>
          </div>

          {isOpen && (
            <div className={styles.notifyDiv}>
              <div className={styles.waiterDiv}>
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
          )}
        </div>

        <div>
          <div className={styles.hamDiv}>
            <i
              onClick={handleIsOpen1}
              className="fa fa-bars"
              aria-hidden="true"
            ></i>
          </div>

          {isOpen1 && (
            <div className={styles.moreDiv}>
              <div>
                <p>Menu</p>
              </div>

              <div>
                <p>Packages</p>
              </div>

              <div>
                <p>Specialities</p>
              </div>

              <div className={styles.arrowDiv} onClick={handleIsOpen2}>
                More
                <button>&darr;</button>
              </div>

              {isOpen2 && (
                <div className={styles.trackDiv}>
                  <div>
                    <p>Track Order</p>
                  </div>

                  <div>
                    <p>Reservation</p>
                  </div>

                  <div>
                    <p>Contacts</p>
                  </div>

                  <div>
                    <p>About Us</p>
                  </div>

                  <div>
                    <p> Login</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className={styles.thirdHeader}>
        <div className={styles.thirdHeaderSubDiv}>
          <div>
            <div>
              <NavLink to="/">
                <img
                  className={styles.dis}
                  src="https://menu.stanfordelaze.ng/uploads/thumb/6ca252f775ee8306d1981e6ee2d0d3c7.png"
                />
              </NavLink>
            </div>
          </div>

          <div>
            <NavLink to="/">
              <button className={styles.menuButtons}>Menu</button>
            </NavLink>

            <NavLink to="/Packages">
              <button className={styles.menuButtons}>Packages</button>
            </NavLink>

            <NavLink to="/Specialities">
              <button className={styles.menuButtons}>Specialities</button>
            </NavLink>
          </div>
        </div>

        <div className={styles.thirdSubDiv}>
          <div onClick={() => handleIsOpen()} className={styles.waiterNotify}>
            <i
              onClick={handleIsOpen}
              className="fa fa-bell"
              aria-hidden="true"
            ></i>
            <button>Call Waiter</button>
          </div>

          <div>
            <NavLink className={styles.logoDiv} to="/Login">
              <i className="fa fa-sign-in" aria-hidden="true"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
