/* eslint-disable react/prop-types */
import styles from "./SaladLoop.module.css";
import WhiskeyItem from "./WhiskeyItem";

export default function WhiskeyLoop({ taco, handleSelectId }) {
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {taco.map((paster) => (
          <WhiskeyItem
            handleSelectId={handleSelectId}
            quick={paster}
            key={paster.id}
          />
        ))}
      </ul>
    </div>
  );
}
