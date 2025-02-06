/* eslint-disable react/prop-types */
import StarterItem from "./StarterItem";
import styles from "./SaladLoop.module.css";
import { ShopContext } from ".././context/ShopContextProvider";
import { useContext } from "react";

export default function StarterLoop({ handleSelectId }) {
  const { starter } = useContext(ShopContext);
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {starter.map((paster) => (
          <StarterItem
            handleSelectId={handleSelectId}
            quick={paster}
            key={paster.id}
          />
        ))}
      </ul>
    </div>
  );
}
