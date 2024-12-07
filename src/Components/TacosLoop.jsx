/* eslint-disable react/prop-types */
import TacosItem from "./TacosItem";
import styles from "./SaladLoop.module.css";

export default function StarterLoop({ taco, handleSelectId }) {
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {taco.map((paster) => (
          <TacosItem
            handleSelectId={handleSelectId}
            quick={paster}
            key={paster.id}
          />
        ))}
      </ul>
    </div>
  );
}
