/* eslint-disable react/prop-types */
import StarterItem from "./StarterItem";
import styles from "./SaladLoop.module.css";

export default function StarterLoop({ starter, handleSelectId }) {
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {starter.map((paster) => (
          <StarterItem
            handleSelectId={handleSelectId}
            quick={paster}
            key={paster.id}
          />
        ))}
      </ul>
    </div>
  );
}
