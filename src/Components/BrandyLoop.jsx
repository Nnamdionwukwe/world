/* eslint-disable react/prop-types */
import styles from "./SaladLoop.module.css";
import BrandyItem from "./BrandyItem";

export default function BrandyLoop({ taco, handleSelectId }) {
  return (
    <div>
      <ul className={styles.saladMainDiv}>
        {taco.map((paster) => (
          <BrandyItem
            handleSelectId={handleSelectId}
            quick={paster}
            key={paster.id}
          />
        ))}
      </ul>
    </div>
  );
}
