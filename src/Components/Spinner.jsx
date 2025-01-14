import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}>
        loading loading loadingloadingloading loading
      </div>
    </div>
  );
}

export default Spinner;
