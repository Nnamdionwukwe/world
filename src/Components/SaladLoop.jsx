/* eslint-disable react/prop-types */
import SaladItem from "./SaladItem";
import styles from "./SaladLoop.module.css";
import { ShopContext } from ".././context/ShopContextProvider";
import { useContext } from "react";

export default function SaladLoop({ handleSelectId }) {
  const { salad } = useContext(ShopContext);

  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {salad.map((salad) => (
          <SaladItem
            handleSelectId={handleSelectId}
            salad={salad}
            key={salad.id}
          />
        ))}
      </ul>
    </div>
  );
}
