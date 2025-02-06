/* eslint-disable react/prop-types */
import TacosItem from "./TacosItem";
import styles from "./SaladLoop.module.css";
import { ShopContext } from ".././context/ShopContextProvider";
import { useContext } from "react";

export default function StarterLoop({ handleSelectId }) {
  const { taco } = useContext(ShopContext);
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {taco.map((paster) => (
          <TacosItem
            handleSelectId={handleSelectId}
            quick={paster}
            key={paster.id}
          />
        ))}
      </ul>
    </div>
  );
}
