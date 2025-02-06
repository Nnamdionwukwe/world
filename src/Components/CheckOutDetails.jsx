/* eslint-disable react/prop-types */
import styles from "./CheckOutDetails.module.css";

import { ShopContext } from ".././context/ShopContextProvider";
import { useContext } from "react";

export default function CartItem({ data }) {
  const { dishName, price, image, id, quantity } = data;
  const { cart, dispatch } = useContext(ShopContext);

  const Increase = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity < 10) {
      dispatch({ type: "Increase", id });
    }
  };

  const Decrease = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "Decrease", id });
    }
  };

  const itemTotalPrice = price * quantity;

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.mainImgDiv}>
          <div className={styles.coverDiv}>
            <div className={styles.plusMain}>
              <div className={styles.plusDiv}>
                <h5 onClick={() => Increase(id)}>+</h5>

                <p>{quantity}</p>

                <h4 onClick={() => Decrease(id)}>&minus;</h4>
              </div>
            </div>

            <div className={styles.imgDiv}>
              <img src={image} alt={`${dishName} image`} />
            </div>

            <div className={styles.nameDiv}>
              <h5>{dishName}</h5>

              <p className={styles.qty}>qty: {quantity}</p>

              <div className={styles.nairaDi}>
                <i className="fa-solid fa-naira-sign"></i>

                <p>
                  {Number(price)},000.00 &times; {quantity} ={" "}
                  <i className="fa-solid fa-naira-sign"></i>
                  {Number(itemTotalPrice)}
                  ,000.00
                </p>
              </div>
            </div>
          </div>

          <button
            className={styles.btn}
            onClick={() => dispatch({ type: "Remove", id: id })}
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}
