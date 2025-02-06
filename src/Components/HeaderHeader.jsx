import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const HeaderHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  function handleIsOpen() {
    setIsOpen((is) => !is);
    setIsOpen1((is) => !is);
  }

  function handleIsOpen1() {
    setIsOpen1((is) => !is);
    setIsOpen((is) => !is);
    setIsOpen2((is) => !is);
  }

  function handleIsOpen2() {
    setIsOpen2((is) => !is);
  }

  return (
    <>
      <div className={styles.mainHeader}>
        <div>
          <NavLink to="/homepages">
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
                <Link className={styles.moreDivLink} to="/homepages">
                  <p>Menu</p>
                </Link>
              </div>

              <div>
                <Link className={styles.moreDivLink} to="/Packages">
                  <p>Packages</p>
                </Link>
              </div>

              <div>
                <Link className={styles.moreDivLink} to="/Specialities">
                  <p>Specialities</p>
                </Link>
              </div>

              <div className={styles.arrowDiv} onClick={handleIsOpen2}>
                More
                {isOpen2 ? <button>&uarr;</button> : <button>&darr;</button>}
              </div>

              {isOpen2 && (
                <div className={styles.trackDiv}>
                  <div>
                    <Link className={styles.moreDivLink} to="/TrackOrder">
                      <p>Track Order</p>
                    </Link>
                  </div>

                  <div>
                    <Link className={styles.moreDivLink} to="/Reservations">
                      <p>Reservation</p>
                    </Link>
                  </div>

                  <div>
                    <Link className={styles.moreDivLink} to="/Contacts">
                      <p>Contacts</p>
                    </Link>
                  </div>

                  <div>
                    <Link className={styles.moreDivLink} to="/AboutUs">
                      <p>About Us</p>
                    </Link>
                  </div>

                  <div>
                    <Link className={styles.moreDivLink} to="/">
                      <p> Login</p>
                    </Link>
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
              <NavLink to="/homepages">
                <img
                  className={styles.dis}
                  src="https://menu.stanfordelaze.ng/uploads/thumb/6ca252f775ee8306d1981e6ee2d0d3c7.png"
                />
              </NavLink>
            </div>
          </div>

          <div>
            <NavLink to="/homepages">
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
            <NavLink className={styles.logoDiv} to="/">
              <i className="fa fa-sign-in" aria-hidden="true"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderHeader;
