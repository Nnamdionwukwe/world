/* eslint-disable react/prop-types */
import QuickChineseItems from "./QuickChineseItems";
import styles from "./SaladLoop.module.css";
import { ShopContext } from ".././context/ShopContextProvider";
import { useContext } from "react";

export default function QuickChineseLoop({ handleSelectId }) {
  const { quickChinese } = useContext(ShopContext);
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {quickChinese.map((quick) => (
          <QuickChineseItems
            handleSelectId={handleSelectId}
            quick={quick}
            key={quick.id}
          />
        ))}
      </ul>
    </div>
  );
}
