/* eslint-disable react/prop-types */
import styles from "./SaladLoop.module.css";
import TequilaItem from "./TequilaItem";
import { ShopContext } from ".././context/ShopContextProvider";
import { useContext } from "react";

export default function TequilaLoop({ handleSelectId }) {
  const { tequila } = useContext(ShopContext);
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {tequila.map((paster) => (
          <TequilaItem
            handleSelectId={handleSelectId}
            quick={paster}
            key={paster.id}
          />
        ))}
      </ul>
    </div>
  );
}
