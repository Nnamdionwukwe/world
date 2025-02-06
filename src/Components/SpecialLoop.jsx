/* eslint-disable react/prop-types */
import styles from "./SaladLoop.module.css";
import TequilaItem from "./TequilaItem";
import { ShopContext } from ".././context/ShopContextProvider";
import { useContext } from "react";

export default function SpecialLoop({ handleSelectId }) {
  const { special } = useContext(ShopContext);
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {special.map((champagne) => (
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
