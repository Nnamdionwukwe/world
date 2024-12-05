import { useState } from "react";
import styles from "./Login.module.css";
import { NavLink } from "react-router-dom";

export default function Login() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.mainHeader}>
      <header className={styles.header}>
        <div>
          <img src="quickmenu.png" />
        </div>

        <div onClick={() => setIsOpen((is) => !is)}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>

        {isOpen && (
          <NavLink to="/" className={styles.login}>
            <div>
              <i className="fa fa-sign-in" aria-hidden="true"></i>
            </div>
            <button>login</button>
          </NavLink>
        )}
      </header>

      <section className={styles.section}>
        <img src="https://menu.stanfordelaze.ng/assets/frontend/images/customer.svg" />

        <h3>CUSTOMER LOGIN</h3>

        <p>SignUp to dscover your shop</p>
      </section>

      <div className={styles.phone}>
        <div>
          <i className="fa fa-mobile" aria-hidden="true"></i>
          Phone
        </div>

        <div>
          <input type="text" placeholder="Phone" />
        </div>

        <div>
          <i className="fa fa-key" aria-hidden="true"></i>
          Password <span>forgot?</span>
        </div>

        <div>
          <input type="password" placeholder="Password" />
        </div>
      </div>
    </div>
  );
}
