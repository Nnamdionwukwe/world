/* eslint-disable react/prop-types */
import styles from "./SaladLoop.module.css";
import QuickEatsItem from "./QuickEatsItem";

export default function StarterLoop({ taco, handleSelectId }) {
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {taco.map((paster) => (
          <QuickEatsItem
            handleSelectId={handleSelectId}
            quick={paster}
            key={paster.id}
          />
        ))}
      </ul>
    </div>
  );
}
