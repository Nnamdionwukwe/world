import { Link } from "react-router-dom";
import styles from "./EmptyCart.module.css";

export default function EmptyCart() {
  return (
    <div className={styles.main}>
      <h2>Start a new cart?</h2>
      <p>Your cart is empty add new items to the list to place your order!.</p>

      <Link to="/">
        <div className={styles.mainDiv}>
          <button className={styles.mainDiv}>New Cart</button>
        </div>
      </Link>
    </div>
  );
}
