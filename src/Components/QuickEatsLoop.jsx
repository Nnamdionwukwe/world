/* eslint-disable react/prop-types */
import styles from "./SaladLoop.module.css";
import QuickEatsItem from "./QuickEatsItem";
import { ShopContext } from ".././context/ShopContextProvider";
import { useContext } from "react";

export default function StarterLoop({ handleSelectId }) {
  const { quickEat } = useContext(ShopContext);
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {quickEat.map((paster) => (
          <QuickEatsItem
            handleSelectId={handleSelectId}
            quick={paster}
            key={paster.id}
          />
        ))}
      </ul>
    </div>
  );
}
