/* eslint-disable react/prop-types */
import styles from "./SaladLoop.module.css";
import WhiskeyItem from "./WhiskeyItem";
import { ShopContext } from ".././context/ShopContextProvider";
import { useContext } from "react";

export default function WhiskeyLoop({ handleSelectId }) {
  const { whiskey } = useContext(ShopContext);
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {whiskey.map((paster) => (
          <WhiskeyItem
            handleSelectId={handleSelectId}
            quick={paster}
            key={paster.id}
          />
        ))}
      </ul>
    </div>
  );
}
