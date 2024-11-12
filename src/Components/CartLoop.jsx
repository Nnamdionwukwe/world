/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";
import styles from "./CartItem.module.css";

export default function CartLoop({ cart, handleDeleteItem, handleAddQty }) {
  return (
    <div>
      <div className={styles.myCart}>
        <div>
          <p>My Cart</p>
        </div>
        <h1>{cart.length}</h1>

        <div className={styles.nav}>
          <NavLink to="/">
            <button>&times;</button>
          </NavLink>
        </div>
      </div>

      {cart.map((cart) => (
        <CartItem
          cart={cart}
          key={cart.id}
          handleDeleteItem={handleDeleteItem}
          handleAddQty={handleAddQty}
        />
      ))}
    </div>
  );
}
