/* eslint-disable react/prop-types */
import styles from "./SaladLoop.module.css";
import VodkaItem from "./VodkaItem";
import { ShopContext } from ".././context/ShopContextProvider";
import { useContext } from "react";

export default function VodkaLoop({ handleSelectId }) {
  const { vodka } = useContext(ShopContext);
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {vodka.map((paster) => (
          <VodkaItem
            handleSelectId={handleSelectId}
            quick={paster}
            key={paster.id}
          />
        ))}
      </ul>
    </div>
  );
}
