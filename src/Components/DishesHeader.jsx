import SaladComponent from "./SaladComponentt";
import styles from "./HomePages.module.css";

export default function DishesHeader({ children }) {
  return (
    <div className={styles.textDiv}>
      <SaladComponent>{children}</SaladComponent>

      <div className={styles.more}>
        See More <p>&gt; &gt;</p>
      </div>
    </div>
  );
}
