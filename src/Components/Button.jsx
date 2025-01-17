import { NavLink } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <NavLink className={styles.listMain} to="/homepages">
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
            <button className={styles.list9}>Starter </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Tacos">
            <button className={styles.list9}>Tacos </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/QuickEats">
            <button className={styles.list6}>Quick Eats </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Whiskey">
            <button className={styles.list9}>Whiskey </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Brandy">
            <button className={styles.list9}>Brandy </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Vodka">
            <button className={styles.list9}>Vodka </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Gin">
            <button className={styles.list9}>Gin </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Tequila">
            <button className={styles.list8}>Tequila </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Champagne">
            <button className={styles.list10}>Champagne </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/SparkilingWine">
            <button className={styles.list6}>Sparkiling Wine </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/RedWine">
            <button className={styles.list6}>Red Wine </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/WHiteWine">
            <button className={styles.list6}>White Wine </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/ClassicCocktail">
            <button className={styles.list6}>Classic Cocktail </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Smoothies">
            <button className={styles.list10}>Smoothies </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Mocktails">
            <button className={styles.list10}>Mocktails </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/SpecialJuice">
            <button className={styles.list6}>Special Juice </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/MilkShakes">
            <button className={styles.list10}>MilkShakes </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/FreshJuices">
            <button className={styles.list6}>Fresh Juices </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Parfait">
            <button className={styles.list8}>Parfait </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Beer">
            <button className={styles.list9}>Beer </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/EnergyDrink">
            <button className={styles.list6}>Energy Drinks </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Shisha">
            <button className={styles.list8}>Shisha </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/SoftDrink">
            <button className={styles.list7}>Soft Drinks </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
