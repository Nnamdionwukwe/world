import { NavLink } from "react-router-dom";
import styles from "./CartHarder.module.css";

export default function CartHeader() {
  return (
    <div className={styles.myCart}>
      <div>
        <p>My Cart</p>
      </div>

      <div className={styles.nav}>
        <NavLink to="/">
          <button>&times;</button>
        </NavLink>
      </div>
    </div>
  );
}
