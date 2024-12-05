import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Login.module.css";

export default function SignUp() {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <header className={styles.header}>
        <div>
          <img src="quickmenu.png" />
        </div>

        <div onClick={() => setIsOpen((is) => !is)}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>

        {isOpen && (
          <NavLink to="/signup" className={styles.login}>
            <div>
              <i className="fa fa-sign-in" aria-hidden="true"></i>
            </div>
            <button>login</button>
          </NavLink>
        )}
      </header>

      <section className={styles.section}>
        <div>
          <h3 className={styles.in}>SIGN IN</h3>

          <p>Login to your Dashboard & Manage your Menu</p>
        </div>
      </section>

      <div className={styles.phone}>
        <div>
          <i className="fa fa-user" aria-hidden="true"></i>
          Username/ Email
        </div>

        <div>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder=" Username/ Email"
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

      <div className={styles.account}>
        Don't have account? <span>Signup</span>
      </div>

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
