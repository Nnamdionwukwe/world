/* eslint-disable react/prop-types */
import PasterItems from "./PasterItems";
import styles from "./SaladLoop.module.css";
import { ShopContext } from ".././context/ShopContextProvider";
import { useContext } from "react";

export default function PasterLoop({ handleSelectId }) {
  const { paster } = useContext(ShopContext);
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {paster.map((paster) => (
          <PasterItems
            handleSelectId={handleSelectId}
            quick={paster}
            key={paster.id}
          />
        ))}
      </ul>
    </div>
  );
}
