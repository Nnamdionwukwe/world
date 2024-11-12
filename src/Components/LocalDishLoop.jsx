/* eslint-disable react/prop-types */
import LocalDishItem from "./LocalDishItem";
import styles from "./SaladLoop.module.css";

export default function LocalDishesLoop({ localDish, handleSelectId }) {
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
