/* eslint-disable react/prop-types */
import GrillHouseItem from "./GrillHouseItem";
import styles from "./SaladLoop.module.css";
import { ShopContext } from ".././context/ShopContextProvider";
import { useContext } from "react";

export default function GrillHouseLoop({ handleSelectId }) {
  const { grillHouse } = useContext(ShopContext);
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {grillHouse.map((grill) => (
          <GrillHouseItem
            handleSelectId={handleSelectId}
            grill={grill}
            key={grill.id}
          />
        ))}
      </ul>
    </div>
  );
}
