/* eslint-disable react/prop-types */
import styles from "./SaladLoop.module.css";
import GinItem from "./GinItem";

export default function GinLoop({ taco, handleSelectId }) {
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {taco.map((paster) => (
          <GinItem
            handleSelectId={handleSelectId}
            quick={paster}
            key={paster.id}
          />
        ))}
      </ul>
    </div>
  );
}
