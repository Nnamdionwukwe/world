/* eslint-disable react/prop-types */
import styles from "./SaladLoop.module.css";
import GinItem from "./GinItem";
import { ShopContext } from ".././context/ShopContextProvider";
import { useContext } from "react";

export default function GinLoop({ handleSelectId }) {
  const { gin } = useContext(ShopContext);
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {gin.map((paster) => (
          <GinItem
            handleSelectId={handleSelectId}
            quick={paster}
            key={paster.id}
          />
        ))}
      </ul>
    </div>
  );
}
