/* eslint-disable react/prop-types */
import styles from "./SaladLoop.module.css";
import TequilaItem from "./TequilaItem";
import { ShopContext } from ".././context/ShopContextProvider";
import { useContext } from "react";

export default function ParfaitLoop({ handleSelectId }) {
  const { parfait } = useContext(ShopContext);
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {parfait.map((champagne) => (
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
