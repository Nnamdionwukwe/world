/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./EmptyCart.module.css";
import CartItem from "./CartItem";
import CartHeader from "./CartHeader";
import EmptyCart from "./EmptyCart";

export default function CartLoop({ cart, handleDeleteItem, handleAddQty }) {
  const { qty, price } = cart;
  console.log(cart);

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

            <div className={styles.mainDiv}>
              <div className={styles.totalSub}>
                Total: qyt: {qty} = Price #{price}.00
              </div>

              <Link className={styles.mainLink} to="/checkout">
                <div className={styles.mainDivButtonSub}>
                  <button className={styles.mainDivButton}>Checkout</button>
                </div>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
