/* eslint-disable react/prop-types */
import styles from "./CartItem.module.css";
import { useState } from "react";

export default function CartItem({ cart, handleDeleteItem }) {
  const { dishName, price, image, id, qty } = cart;
  const [quantity, setQuantity] = useState(qty);

  function handleIncreaseQuantity(count) {
    if (quantity > 0) setQuantity(count);
    if (quantity === 10) setQuantity(10);
  }

  function handleDecreaseQuantity() {
    if (quantity > 1) setQuantity((qty) => qty - 1);
    if (quantity === 1) setQuantity(1);
  }

  const qtyTotal = price * quantity;
  // setCartTotal(qtyTotal);

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.mainImgDiv}>
          <div className={styles.coverDiv}>
            <div className={styles.plusMain}>
              <div className={styles.plusDiv}>
                <h5 onClick={() => handleIncreaseQuantity((qty) => qty + 1)}>
                  +
                </h5>

                <p>{quantity}</p>

                <h4 onClick={() => handleDecreaseQuantity()}>&minus;</h4>
              </div>
            </div>

            <div className={styles.imgDiv}>
              <img src={image} alt={`${dishName} image`} />
            </div>

            <div className={styles.nameDiv}>
              <h4>{dishName}</h4>

              <p className={styles.qty}>qty: {quantity}</p>

              <div className={styles.nairaDi}>
                <i className="fa-solid fa-naira-sign"></i>

                <p>
                  {Math.floor(price)},000.00 &times; {quantity} ={" "}
                  {Number(qtyTotal)},000.00
                </p>
              </div>
            </div>
          </div>

          <button className={styles.btn} onClick={() => handleDeleteItem(id)}>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}
