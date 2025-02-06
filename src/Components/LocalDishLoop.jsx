/* eslint-disable react/prop-types */
import LocalDishItem from "./LocalDishItem";
import styles from "./SaladLoop.module.css";
import { ShopContext } from ".././context/ShopContextProvider";
import { useContext } from "react";

export default function LocalDishesLoop({ handleSelectId }) {
  const { localDish } = useContext(ShopContext);
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {localDish.map((localDish) => (
          <LocalDishItem
            handleSelectId={handleSelectId}
            localDish={localDish}
            key={localDish.id}
          />
        ))}
      </ul>
    </div>
  );
}
