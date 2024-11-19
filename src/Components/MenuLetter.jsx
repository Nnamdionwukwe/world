import styles from "./MenuLetter.module.css";

export default function MenuLetter() {
  return (
    <div className={styles.menuLetter}>
      <div>
        <h3>BROWSE OUR MENU</h3>

        <div className={styles.div1}>
          <div className={styles.div}></div>
          <div className={styles.div2}></div>
        </div>

        <h5>Food & Drinks</h5>
      </div>
    </div>
  );
}
