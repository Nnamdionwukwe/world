/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import styles from "./SelectedDishMenu.module.css";
import { useState } from "react";

export default function SelectedDishMenu({
  selectedId,
  setHideForm,
  handleAddToCart,
  handleDishClose,
  cart,
  handleBillSubmit,
}) {
  const { dishName, price, image, note, id, qty } = selectedId;

  function handleSplitBill(e) {
    e.preventDefault();
    handleBillSubmit(qty);
    handleAddDish();
  }

  function handleAddDish(e) {
    const newDish = { dishName, price, image, id, qty: 1 };
    handleAddToCart(newDish, id);
  }

  return (
    <div className={styles.selectMain1}>
      <form onSubmit={handleSplitBill} className={styles.menu}>
        <ul className={styles.menuHeader}>
          <div className={styles.menuLi}>
            <h3>{dishName}</h3>

            <button onClick={() => setHideForm((is) => !is)}>&times;</button>
          </div>

          <img
            className={styles.menuLiImg}
            src={image}
            alt={`${dishName} image`}
          />

          <div className={styles.dishSub}>
            <h2>{dishName}</h2>

            <div className={styles.nairaDi}>
              <i className="fa-solid fa-naira-sign"></i>
              <h5 className={styles.nairaDiv}> {price}.00</h5>
            </div>

            <p>{note}</p>
          </div>

          <div className={styles.commentDiv}>
            <p>comments</p>

            <input type="text" />
          </div>

          <div className={styles.addMainDiv1}>
            <div className={styles.addMainDiv}>
              <button onClick={handleDishClose}>Close</button>

              <div className={styles.cartLogo} onClick={handleSplitBill}>
                <i className="fa-solid fa-cart-plus"></i>
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
        </ul>
      </form>
    </div>
  );
}
