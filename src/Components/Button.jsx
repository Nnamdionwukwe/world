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

        <li>
          <NavLink to="/QuickEats">
            <button className={styles.list1}>Quick Eats </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Whiskey">
            <button className={styles.list1}>Whiskey </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Brandy">
            <button className={styles.list1}>Brandy </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Vodka">
            <button className={styles.list1}>Vodka </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Gin">
            <button className={styles.list1}>GIn </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Tequila">
            <button className={styles.list1}>Tequila </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Champagne">
            <button className={styles.list1}>Champagne </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/SparkilingWine">
            <button className={styles.list1}>Sparkilin gWine </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/RedWine">
            <button className={styles.list1}>Red Wine </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/WHiteWine">
            <button className={styles.list1}>White Wine </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/ClassicCocktail">
            <button className={styles.list1}>Classic Cocktail </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Smoothies">
            <button className={styles.list1}>Smoothies </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Mocktails">
            <button className={styles.list1}>Mocktails </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/SpecialJuice">
            <button className={styles.list1}>Special Juice </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/MilkShakes">
            <button className={styles.list1}>MilkShakes </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/FreshJuices">
            <button className={styles.list1}>Fresh Juices </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Parfait">
            <button className={styles.list1}>Parfait </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Beer">
            <button className={styles.list1}>Beer </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/EnergyDrink">
            <button className={styles.list1}>Energy Drinks </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Shisha">
            <button className={styles.list1}>Shisha </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/SoftDrink">
            <button className={styles.list1}>Soft Drink </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
