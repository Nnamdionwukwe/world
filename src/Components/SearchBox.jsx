import styles from "./SearchBox.module.css";

export default function SearchBox() {
  return (
    <div className={styles.searchBox}>
      <input className={styles.input} type="text" placeholder="Search items" />
     
      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
  );
}
