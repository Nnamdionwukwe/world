/* eslint-disable react/prop-types */
import styles from "./SaladLoop.module.css";
import TequilaItem from "./TequilaItem";
import { ShopContext } from ".././context/ShopContextProvider";
import { useContext } from "react";

export default function BeerLoop({ handleSelectId }) {
  const { beer } = useContext(ShopContext);
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {beer.map((champagne) => (
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
