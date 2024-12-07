/* eslint-disable react/prop-types */
import PasterItems from "./PasterItems";
import styles from "./SaladLoop.module.css";

export default function PasterLoop({ paster, handleSelectId }) {
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {paster.map((paster) => (
          <PasterItems
            handleSelectId={handleSelectId}
            quick={paster}
            key={paster.id}
          />
        ))}
      </ul>
    </div>
  );
}
