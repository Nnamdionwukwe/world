import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { NavLink } from "react-router-dom";

export default function Login() {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(function () {

  //   }
  // }, []);

  // if (!phone || !password) {
  //   setPhone("");
  //   setPassword("");
  //   return;
  // }

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
        <div>
          <div>
            <img src="https://menu.stanfordelaze.ng/assets/frontend/images/customer.svg" />
          </div>
          <h3>CUSTOMER LOGIN</h3>

          <p>SignUp to dscover your shop</p>
        </div>
      </section>

      <div className={styles.phone}>
        <div>
          <i className="fa fa-mobile" aria-hidden="true"></i>
          Phone
        </div>

        <div>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Phone"
          />
        </div>

        <div>
          <i className="fa fa-key" aria-hidden="true"></i>
          Password <span>forgot?</span>
        </div>

        <div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </div>
      </div>

      <NavLink to="/" className={styles.signIn}>
        <i className="fa fa-sign-in" aria-hidden="true"></i>
        <span>Sign in</span>
      </NavLink>

      <div className={styles.deliver}>
        <NavLink className={styles.deliver1}>
          <i className="fa fa-user" aria-hidden="true"></i>
          Customer Login
        </NavLink>

        <NavLink className={styles.deliver1}>
          <i className="fa fa-users" aria-hidden="true"></i>
          Customer Login
        </NavLink>

        <NavLink className={styles.deliver1}>
          <i className="fa fa-truck" aria-hidden="true"></i>
          Delvery Guy Login
        </NavLink>
      </div>
    </div>
  );
}
