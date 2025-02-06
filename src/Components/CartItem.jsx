/* eslint-disable react/prop-types */
import styles from "./CartItem.module.css";
import { ShopContext } from ".././context/ShopContextProvider";
import { useContext } from "react";

export default function CartItem({ data }) {
  const { dishName, price, image, id, quantity } = data;
  const itemTotalPrice = quantity * price;

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
              <h4>{dishName}</h4>

              <p className={styles.qty}>qty: {quantity}</p>

              <div className={styles.nairaDi}>
                <i className="fa-solid fa-naira-sign"></i>

                <p>
                  {Math.floor(price)},000.00 &times; {quantity} ={" "}
                  <i className="fa-solid fa-naira-sign"></i>
                  {itemTotalPrice}
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
