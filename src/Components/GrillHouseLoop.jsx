/* eslint-disable react/prop-types */
import GrillHouseItem from "./GrillHouseItem";
import styles from "./SaladLoop.module.css";

export default function GrillHouseLoop({ grillHouse, handleSelectId }) {
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {grillHouse.map((grill) => (
          <GrillHouseItem
            handleSelectId={handleSelectId}
            grill={grill}
            key={grill.id}
          />
        ))}
      </ul>
    </div>
  );
}
