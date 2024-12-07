/* eslint-disable react/prop-types */
import QuickChineseItems from "./QuickChineseItems";
import styles from "./SaladLoop.module.css";

export default function QuickChineseLoop({ quickChinese, handleSelectId }) {
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
