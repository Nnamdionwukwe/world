/* eslint-disable react/prop-types */
import SaladItem from "./SaladItem";
import styles from "./SaladLoop.module.css";

export default function SaladLoop({ salad, handleSelectId }) {
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {salad.map((salad) => (
          <SaladItem
            handleSelectId={handleSelectId}
            salad={salad}
            key={salad.id}
          />
        ))}
      </ul>
    </div>
  );
}
