/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./EmptyCart.module.css";
import CartItem from "./CartItem";
import CartHeader from "./CartHeader";
import EmptyCart from "./EmptyCart";

export default function CartLoop({ cart, handleDeleteItem, handleAddQty }) {
  return (
    <>
      {cart.length === 0 ? (
        <>
          <CartHeader />

          <EmptyCart />
        </>
      ) : (
        <>
          <CartHeader />

          <div>
            {cart.map((cart) => (
              <CartItem
                cart={cart}
                key={cart.id}
                handleDeleteItem={handleDeleteItem}
                handleAddQty={handleAddQty}
              />
            ))}
          </div>

          <Link to="/checkout">
            <div className={styles.mainDiv}>
              <button>Checkout</button>
            </div>
          </Link>
        </>
      )}
    </>
  );
}
