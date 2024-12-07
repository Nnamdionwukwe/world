import { NavLink } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <NavLink to="/">
            <button className={styles.list1}>All</button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Salads">
            <button className={styles.list2}>Salads</button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/MainDishes">
            <button className={styles.list3}>Main Dishes / Local Dishes</button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/SidesExtra">
            <button className={styles.list4}>Sides / Extras</button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/GrillHouse">
            <button className={styles.list5}>Grill House Special</button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/QuickChinese">
            <button className={styles.list6}>Quick Chinese</button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Paster">
            <button className={styles.list6}>Pasta Special</button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Starter">
            <button className={styles.list1}>Starter </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Tacos">
            <button className={styles.list1}>Tacos </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
