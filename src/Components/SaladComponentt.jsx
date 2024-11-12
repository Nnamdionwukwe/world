import styles from "./SaladComponenet.module.css";

export default function SaladComponent({ children }) {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.textDiv}>
        <h2 className={styles.text}>{children}</h2>
      </div>
    </div>
  );
}
