/* eslint-disable react/prop-types */
import styles from "./SaladLoop.module.css";
import BrandyItem from "./BrandyItem";
import { ShopContext } from ".././context/ShopContextProvider";
import { useContext } from "react";

export default function BrandyLoop({ handleSelectId }) {
  const { brandy } = useContext(ShopContext);
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {brandy.map((paster) => (
          <BrandyItem
            handleSelectId={handleSelectId}
            quick={paster}
            key={paster.id}
          />
        ))}
      </ul>
    </div>
  );
}
