/* eslint-disable react/prop-types */
import styles from "./SaladLoop.module.css";
import VodkaItem from "./VodkaItem";

export default function VodkaLoop({ taco, handleSelectId }) {
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {taco.map((paster) => (
          <VodkaItem
            handleSelectId={handleSelectId}
            quick={paster}
            key={paster.id}
          />
        ))}
      </ul>
    </div>
  );
}
