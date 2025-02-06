/* eslint-disable react/prop-types */
import SidesExtrasItem from "./SidesExtrasItem";
import styles from "./SaladLoop.module.css";
import { ShopContext } from ".././context/ShopContextProvider";
import { useContext } from "react";

export default function SidesExtraDishLoop({ handleSelectId }) {
  const { sidesExtra } = useContext(ShopContext);
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {sidesExtra.map((sides) => (
          <SidesExtrasItem
            handleSelectId={handleSelectId}
            sides={sides}
            key={sides.id}
          />
        ))}
      </ul>
    </div>
  );
}
