/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./EmptyCart.module.css";
import CartItem from "./CartItem";
import CartHeader from "./CartHeader";
import EmptyCart from "./EmptyCart";
import { useState } from "react";

export default function CartLoop({
  cart,
  handleDeleteItem,
  selectedId,
  setAppQty,
}) {
  const [cartTotal, setCartTotal] = useState(0);
  // console.log(cartTotal);
  return (
    <>
      {cart?.length === 0 ? (
        <>
          <CartHeader />

          <EmptyCart />
        </>
      ) : (
        <div>
          <CartHeader />

          <div className={styles.item}>
            {cart?.map((cart) => (
              <>
                <div>
                  <CartItem
                    cart={cart}
                    key={cart.id}
                    handleDeleteItem={handleDeleteItem}
                    selectedId={selectedId}
                    setCartTotal={setCartTotal}
                    setAppQty={setAppQty}
                  />
                </div>
              </>
            ))}
          </div>

          <div className={styles.mainDiv}>
            <div className={styles.totalSub}>
              Total: qyt: {cart.length} = Price #{cart.price}.00
            </div>

            <Link className={styles.mainLink} to="/checkout">
              <div className={styles.mainDivButtonSub}>
                <button className={styles.mainDivButton}>Checkout</button>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
