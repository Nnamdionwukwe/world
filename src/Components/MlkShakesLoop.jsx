/* eslint-disable react/prop-types */
import styles from "./SaladLoop.module.css";
import TequilaItem from "./TequilaItem";
import { ShopContext } from ".././context/ShopContextProvider";
import { useContext } from "react";

export default function MilkShakesLoop({ handleSelectId }) {
  const { milkshake } = useContext(ShopContext);
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {milkshake.map((champagne) => (
          <TequilaItem
            handleSelectId={handleSelectId}
            quick={champagne}
            key={champagne.id}
          />
        ))}
      </ul>
    </div>
  );
}
