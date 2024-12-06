/* eslint-disable react/prop-types */
import SidesExtrasItem from "./SidesExtrasItem";
import styles from "./SaladLoop.module.css";

export default function SidesExtraDishLoop({ sidesExtra, handleSelectId }) {
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {sidesExtra.map((sides) => (
          <SidesExtrasItem
            handleSelectId={handleSelectId}
            sides={sides}
            key={sides.id}
          />
        ))}
      </ul>
    </div>
  );
}
