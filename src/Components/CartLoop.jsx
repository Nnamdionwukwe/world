/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./EmptyCart.module.css";
import CartItem from "./CartItem";
import CartHeader from "./CartHeader";
import EmptyCart from "./EmptyCart";
import { ShopContext } from ".././context/ShopContextProvider";
import { useContext } from "react";
import { totalItem, totalPrice } from "../context/CartReduser";
import FooterHeader from "./FotterHeader";
import HeaderHeader from "./HeaderHeader";

export default function CartLoop({ handleDeleteItem, handleBillSubmit }) {
  // console.log(cartTotal);
  const { cart } = useContext(ShopContext);
  return (
    <>
      <HeaderHeader />
      {cart?.length === 0 ? (
        <>
          <CartHeader />

          <EmptyCart />
        </>
      ) : (
        <div>
          <CartHeader />

          <div className={styles.item}>
            {cart.map((cart) => {
              if (cart[cart.id] !== 0) {
                return (
                  <CartItem
                    data={cart}
                    key={cart.id}
                    handleDeleteItem={handleDeleteItem}
                    handleBillSubmit={handleBillSubmit}
                  />
                );
              }
            })}
          </div>

          <div className={styles.mainDiv}>
            <div className={styles.totalSub}>
              Total qyt: {totalItem(cart)} = Total price:
              <i className="fa-solid fa-naira-sign"></i>
              {totalPrice(cart)},000.00
            </div>

            <Link className={styles.mainLink} to="/checkout">
              <div className={styles.mainDivButtonSub}>
                <button className={styles.mainDivButton}>Checkout</button>
              </div>
            </Link>
          </div>
        </div>
      )}

      <FooterHeader />
    </>
  );
}
